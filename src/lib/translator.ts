import { prisma } from '@/lib/prisma';
import * as crypto from 'crypto';
import { v2 as googleTranslate } from '@google-cloud/translate';

import dictionaryRaw from './translation-dictionary.json';

// Types
type DictionaryEntry = { en: string; ar: string; ja?: string };
type TargetLang = 'en' | 'ar' | 'ja';
const initialDictionary = dictionaryRaw as Record<string, DictionaryEntry>;

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const GOOGLE_TRANSLATE_API_KEY = process.env.GOOGLE_TRANSLATE_API_KEY;
const API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp:generateContent';
const MAX_RETRIES = 3;
const SYNC_INTERVAL_MS = 5 * 60 * 1000; // 5 minutes

// Language code mapping for Google Translate
const LANG_CODE_MAP: Record<TargetLang, string> = {
    'en': 'en',
    'ar': 'ar',
    'ja': 'ja'
};

// Initialize Google Translate client (will be null if no API key)
let googleTranslateClient: googleTranslate.Translate | null = null;
if (GOOGLE_TRANSLATE_API_KEY) {
    try {
        googleTranslateClient = new googleTranslate.Translate({ key: GOOGLE_TRANSLATE_API_KEY });
        console.log('[Translator] Google Translate Client Initialized');
    } catch (e) {
        console.error('[Translator] Failed to initialize Google Translate Client:', e);
    }
} else {
    console.warn('[Translator] No Google Translate API Key found');
}

class Translator {
    private dictionary: Record<string, DictionaryEntry> = initialDictionary;
    private lastSyncTime: number = 0;
    private isSyncing: boolean = false;

    constructor() {
        // Initial load (async, but constructor is sync, so we trigger and let it run)
        this.syncDictionary().catch(console.error);
    }

    /**
     * Loads dictionary from DB into memory.
     * Uses a lock (isSyncing) to prevent concurrent frequent DB hits.
     */
    private async syncDictionary() {
        const now = Date.now();
        if (this.isSyncing || (now - this.lastSyncTime < SYNC_INTERVAL_MS && this.lastSyncTime !== 0)) {
            return;
        }

        this.isSyncing = true;
        try {
            const entries = await prisma.dictionary.findMany();
            const newDict: Record<string, DictionaryEntry> = {};

            for (const entry of entries) {
                if (entry.en || entry.ar) {
                    newDict[entry.key] = {
                        en: entry.en || entry.key,
                        ar: entry.ar || entry.key
                    };
                }
            }

            this.dictionary = newDict;
            this.lastSyncTime = Date.now();
            console.log(`[Translator] Synced ${entries.length} dictionary entries.`);
        } catch (e) {
            console.error('[Translator] Dictionary sync failed:', e);
        } finally {
            this.isSyncing = false;
        }
    }

    private hash(text: string): string {
        return crypto.createHash('sha256').update(text).digest('hex');
    }

    private hasJapanese(text: string): boolean {
        // Check for Hiragana, Katakana, Kanji
        return /[\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FAF]/.test(text);
    }

    /**
     * Converts Japanese era names to Western years.
     * Supports: 令和, 平成, 昭和 + number or 元年
     */
    private convertJapaneseEra(text: string): string {
        let result = text;

        const eras = [
            { name: '令和', start: 2018 }, // 令和1年 = 2019
            { name: '平成', start: 1988 }, // 平成1年 = 1989
            { name: '昭和', start: 1925 }  // 昭和1年 = 1926
        ];

        for (const era of eras) {
            // Pattern for "Era + Number + Year" (e.g. 令和5年)
            const regexNum = new RegExp(`${era.name}(\\d+)年?`, 'g');
            result = result.replace(regexNum, (_, num) => {
                const year = era.start + parseInt(num, 10);
                return `${year}`;
            });

            // Pattern for "Era + Gan + Year" (e.g. 令和元年)
            const regexGan = new RegExp(`${era.name}元年?`, 'g');
            result = result.replace(regexGan, () => {
                const year = era.start + 1;
                return `${year}`;
            });
        }

        return result;
    }

    private applyDictionary(text: string, targetLang: TargetLang): string {
        let result = text;
        // Check sync quietly
        this.syncDictionary().catch(() => { });

        // Sort keys by length desc
        const keys = Object.keys(this.dictionary).sort((a, b) => b.length - a.length);

        for (const key of keys) {
            if (result.includes(key)) {
                const translation = this.dictionary[key][targetLang];
                if (translation) {
                    // Global replace
                    result = result.split(key).join(translation);
                }
            }
        }
        return result;
    }

    /**
     * Enforces Western digits (0-9) by replacing Eastern Arabic numerals.
     */
    private toWesternDigits(text: string): string {
        return text.replace(/[\u0660-\u0669]/g, (d) => {
            return (d.charCodeAt(0) - 0x0660).toString();
        });
    }

    /**
     * Calls Google Cloud Translation API (Official)
     * More reliable for standard translations, especially long text
     * Requires GOOGLE_TRANSLATE_API_KEY environment variable
     */
    private async callGoogleTranslate(text: string, targetLang: TargetLang): Promise<string | null> {
        if (!googleTranslateClient) {
            console.warn('[Translator] Google Translate API key not configured');
            return null;
        }

        try {
            const langCode = LANG_CODE_MAP[targetLang];
            const [translations] = await googleTranslateClient.translate(text, langCode);

            // Handle both single result and array result
            const translatedText = Array.isArray(translations)
                ? translations.join(' ')
                : translations;

            if (translatedText && translatedText.trim()) {
                console.log(`[Translator] Google Translate: "${text.substring(0, 30)}..." -> "${translatedText.substring(0, 30)}..."`);
                return translatedText.trim();
            }
            return null;
        } catch (error) {
            console.warn('[Translator] Google Translate failed:', error);
            return null;
        }
    }

    /**
     * Calls Gemini API with exponential backoff (fallback)
     */
    private async callGeminiWithRetry(text: string, targetLang: TargetLang): Promise<string | null> {
        if (!GEMINI_API_KEY) return null;

        let prompt: string;
        if (targetLang === 'ar') {
            prompt = `Translate strictly to Arabic. IMPORTANT: Use ONLY Western numerals (0-9). Do NOT use Eastern Arabic numerals (٠-٩). Keep symbols. Short & simple. Text: "${text}"`;
        } else if (targetLang === 'ja') {
            prompt = `Translate strictly to Japanese. Keep numbers/symbols as-is. Short & simple. Text: "${text}"`;
        } else {
            prompt = `Translate strictly to English. Keep numbers/symbols. Short & simple. Text: "${text}"`;
        }

        for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
            try {
                const response = await fetch(`${API_URL}?key=${GEMINI_API_KEY}`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        contents: [{ parts: [{ text: prompt }] }]
                    })
                });

                if (!response.ok) {
                    if (response.status === 429 || response.status >= 500) {
                        throw new Error(`Retryable error ${response.status}`);
                    }
                    return null; // Non-retryable
                }

                const data = await response.json();
                return data.candidates?.[0]?.content?.parts?.[0]?.text?.trim() || null;

            } catch (e) {
                console.warn(`[Translator] Gemini attempt ${attempt} failed:`, e);
                if (attempt < MAX_RETRIES) {
                    const delay = Math.pow(2, attempt - 1) * 1000;
                    await new Promise(resolve => setTimeout(resolve, delay));
                }
            }
        }
        return null;
    }

    async translate(text: string | null | undefined, targetLang: TargetLang = 'en'): Promise<string> {
        if (!text) return '';

        let result = text;
        try {
            result = await this.resolveTranslation(text, targetLang);
        } catch (error) {
            console.error('[Translator] Translation error:', error);
            // Fallback to original text if everything fails
            result = text;
        }

        // FORCE REPLACE: ensure Eastern Arabic numerals are converted to Western numerals
        // regardless of where the string came from (Dict, Cache, API, or Fallback).
        return result.replace(/[\u0660-\u0669]/g, (d) => {
            return (d.charCodeAt(0) - 0x0660).toString();
        });
    }

    private async resolveTranslation(text: string, targetLang: TargetLang): Promise<string> {
        // 1. Preprocessing
        let normalizedText = text.trim().normalize('NFKC');
        normalizedText = this.convertJapaneseEra(normalizedText);

        const originalHash = this.hash(normalizedText);
        const isDev = process.env.NODE_ENV === 'development';

        // Helper to validate specific languages
        const isValidTranslation = (translated: string, lang: TargetLang): boolean => {
            if (!translated) return false;
            // Strict check for Arabic: MUST contain at least one Arabic character
            if (lang === 'ar') {
                return /[\u0600-\u06FF]/.test(translated);
            }
            // Strict check for Japanese: MUST contain at least one Japanese character
            if (lang === 'ja') {
                return /[\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FAF]/.test(translated);
            }
            return true;
        };

        let result = normalizedText;

        // 2. Check Dictionary (Memory) primarily for partial matches
        let processedText = normalizedText;
        if (this.hasJapanese(processedText)) {
            const dictResult = this.applyDictionary(processedText, targetLang);
            // Verify if dictionary result is valid for the target language
            // (If we asked for AR but got no Arabic chars, assume dictionary missed or had bad data)
            if (!this.hasJapanese(dictResult) && isValidTranslation(dictResult, targetLang)) {
                return isDev ? `${dictResult} [DICT]` : dictResult;
            }
            // Update fallback (still possibly partially translated, but maybe not fully valid)
            result = dictResult;
        }

        // 3. Check DB Cache
        try {
            const cached = await prisma.translation.findUnique({
                where: {
                    originalHash_targetLang: { originalHash, targetLang }
                }
            });

            if (cached && cached.translatedText) {
                // GUARD: Validate cached content
                if (isValidTranslation(cached.translatedText, targetLang)) {
                    return isDev ? `${cached.translatedText} [CACHE]` : cached.translatedText;
                }
                // If invalid (e.g. English in 'ar' slot), ignore it (and ideally delete it, but let's just ignore for now)
            }
        } catch (e) {
            // Ignore DB errors
        }

        // 4. Try Google Translate first (more reliable for standard translations)
        let apiResult = await this.callGoogleTranslate(result, targetLang);
        let usedModel = 'google-translate';

        // 5. Fallback to Gemini if Google Translate failed
        if (!apiResult || !isValidTranslation(apiResult, targetLang)) {
            console.log('[Translator] Google Translate failed or invalid, trying Gemini...');
            apiResult = await this.callGeminiWithRetry(result, targetLang);
            usedModel = 'gemini-2.0-flash-exp';
        }

        if (apiResult && isValidTranslation(apiResult, targetLang)) {
            // Save to Cache
            try {
                await prisma.translation.upsert({
                    where: { originalHash_targetLang: { originalHash, targetLang } },
                    update: {
                        translatedText: apiResult, // Update if exists (fix corruption)
                        updatedAt: new Date()
                    },
                    create: {
                        originalHash,
                        originalText: normalizedText,
                        translatedText: apiResult,
                        targetLang,
                        method: 'data-driven',
                        model: usedModel
                    }
                });
            } catch (e) {
                // Ignore constraint errors
            }
            return isDev ? `${apiResult} [API]` : apiResult;
        }

        // 5. Final Fallback (return dictionary-processed text)
        // If we failed to get a valid translation (e.g. no Arabic returned), 
        // we might prefer returning the original text rather than a misleading wrong-language text.
        // However, result currently holds 'dictionary processed' text.

        // Final guard: If we wanted AR, but result has no Arabic, it might be better to return it 
        // (because maybe it's a number or a proper noun), but usually mixed Japanese/English is better than nothing.
        // We will just return it.
        return result;
    }
    private hasArabic(text: string): boolean {
        return /[\u0600-\u06FF]/.test(text);
    }

    /**
     * Translates text to English (Master Key).
     * Optimization: If text is already English (ASCII-only or no JP/AR), return as is.
     */
    async translateToEnglish(text: string): Promise<string> {
        if (!text) return '';

        // Optimization: Check if text is likely already English
        // If it strictly contains only ASCII characters, assume English.
        const isAscii = /^[\x00-\x7F]*$/.test(text);
        if (isAscii) {
            return text;
        }

        // Use standard translate flow
        return this.translate(text, 'en');
    }

    /**
     * Translates text to Japanese.
     * Optimization: If text already contains Japanese characters, return as is.
     */
    async translateToJapanese(text: string): Promise<string> {
        if (!text) return '';

        // Optimization: If text already contains Japanese characters, return as-is
        if (this.hasJapanese(text)) {
            return text;
        }

        // Use standard translate flow
        return this.translate(text, 'ja');
    }
}

export const translator = new Translator();
