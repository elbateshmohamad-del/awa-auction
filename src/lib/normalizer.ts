import { translator } from './translator';
import { normalizeMakerToEnglish } from './maker-map';

/**
 * Cleans translation output by removing debug tags like [CACHE], [DICT], [API]
 */
function cleanOutput(text: string): string {
    if (!text) return '';
    return text
        .replace(/\s*\[CACHE\]\s*/g, '')
        .replace(/\s*\[DICT\]\s*/g, '')
        .replace(/\s*\[API\]\s*/g, '')
        .trim();
}

/**
 * Enforces Western digits (0-9) by replacing Eastern Arabic numerals.
 */
function toWesternDigits(text: string): string {
    return text.replace(/[\u0660-\u0669]/g, (d) => {
        return (d.charCodeAt(0) - 0x0660).toString();
    });
}

/**
 * Converts Japanese era year to Western year.
 * R = 令和 (Reiwa, starts 2019)
 * H = 平成 (Heisei, starts 1989)
 * S = 昭和 (Showa, starts 1926)
 * 
 * Examples: R4 -> 2022, R7 -> 2025, H30 -> 2018, S63 -> 1988
 * 
 * If the input is already a Western year (e.g., "2022") or doesn't match Japanese era pattern,
 * returns the original text.
 */
export function convertJapaneseEraToWestern(text: string, targetLocale: string): string {
    if (!text) return '';

    // If locale is Japanese, keep the Japanese era format
    if (targetLocale === 'ja') {
        return text;
    }

    // Helper function to convert era year to western year
    const eraToWestern = (era: string, yearNum: number): number => {
        const eraUpper = era.toUpperCase();
        if (eraUpper === 'R' || era === '令和') {
            return 2018 + yearNum; // R1 = 2019
        }
        if (eraUpper === 'H' || era === '平成') {
            return 1988 + yearNum; // H1 = 1989
        }
        if (eraUpper === 'S' || era === '昭和') {
            return 1925 + yearNum; // S1 = 1926
        }
        return yearNum;
    };

    // Match date format like "R 9/ 3", "R9/3", "H30/12", "令和9年3月"
    const dateMatch = text.match(/^(R|H|S|令和|平成|昭和)\s*(\d+)\s*[\/年]\s*(\d+)(?:月)?$/i);
    if (dateMatch) {
        const era = dateMatch[1];
        const eraYear = parseInt(dateMatch[2], 10);
        const month = dateMatch[3];
        const westernYear = eraToWestern(era, eraYear);
        return `${westernYear}/${month}`;
    }

    // Match simple era year patterns like "R4", "R 4", "H30", "S63", "令和4", "平成30", "昭和63"
    const simpleMatch = text.match(/^(R|H|S|令和|平成|昭和)\s*(\d+)$/i);
    if (simpleMatch) {
        const era = simpleMatch[1];
        const eraYear = parseInt(simpleMatch[2], 10);
        return eraToWestern(era, eraYear).toString();
    }

    // Handle "元年" (first year)
    const gannenMatch = text.match(/^(R|H|S|令和|平成|昭和)\s*元年?$/i);
    if (gannenMatch) {
        const era = gannenMatch[1];
        return eraToWestern(era, 1).toString();
    }

    // If already a 4-digit year, return as-is
    if (/^\d{4}$/.test(text)) {
        return text;
    }

    // Return original if no pattern matched
    return text;
}

/**
 * English to Japanese mapping for common motorcycle auction terms
 */
const ENGLISH_TO_JAPANESE: Record<string, string> = {
    // Regions
    'Kanto': '関東',
    'Kansai': '関西',
    'Chubu': '中部',
    'Hokkaido': '北海道',
    'Tohoku': '東北',
    'Kyushu': '九州',
    'Chugoku': '中国',
    'Shikoku': '四国',
    'Okinawa': '沖縄',
    'Tokyo': '東京',
    'Osaka': '大阪',
    'Nagoya': '名古屋',
    // Colors (単色のみ - 組み合わせは動的に処理)
    'White': '白',
    'Black': '黒',
    'Red': '赤',
    'Blue': '青',
    'Green': '緑',
    'Yellow': '黄',
    'Orange': 'オレンジ',
    'Silver': '銀',
    'Gold': 'ゴールド',
    'Gray': '灰色',
    'Grey': '灰色',
    'Brown': '茶',
    'Purple': '紫',
    'Pink': 'ピンク',
    'Beige': 'ベージュ',
    'Navy': '紺',
    'Cream': 'クリーム',
    // Color variations
    'Dark Blue': '紺',
    'Light Blue': '水色',
    'Navy blue': '紺',
    'Navy Blue': '紺',
    'Light blue': '水色',
    'Dark blue': '紺',
    'Sky Blue': 'スカイブルー',
    'Gunmetal': 'ガンメタ',
    'Gun Metal': 'ガンメタ',
    'Maroon': 'えんじ',
    'Wine': 'ワイン',
    'Wine Red': 'ワインレッド',
    'Bronze': 'ブロンズ',
    'Champagne': 'シャンパン',
    'Titanium': 'チタン',
    'Copper': '銅',
    'Olive': 'オリーブ',
    'Khaki': 'カーキ',
    'Ivory': 'アイボリー',
    'Charcoal': 'チャコール',
    'Turquoise': 'ターコイズ',
    'Cyan': 'シアン',
    'Magenta': 'マゼンタ',
    'Coral': 'コーラル',
    'Teal': 'ティール',
    'Aqua': 'アクア',
    'Burgundy': 'バーガンディ',
    'Tan': 'タン',
    'Sand': 'サンド',
    'Smoke': 'スモーク',
    'Tea': '茶',
    // Color modifiers/finishes
    'Matte': 'マット',
    'Pearl': 'パール',
    'Metallic': 'メタリック',
    'Candy': 'キャンディ',
    'Flat': 'フラット',
    'Gloss': 'グロス',
    'Satin': 'サテン',
    'Chrome': 'クローム',
    'Carbon': 'カーボン',
    'Clear': 'クリア',
    'Tricolor': 'トリコロール',
    'Two-tone': 'ツートン',
    'Graphic': 'グラフィック',
};

/**
 * Translate a single color word to Japanese
 */
function translateSingleColor(color: string): string | null {
    // Direct match
    if (ENGLISH_TO_JAPANESE[color]) {
        return ENGLISH_TO_JAPANESE[color];
    }

    // Case-insensitive match
    const lowerColor = color.toLowerCase();
    for (const [key, value] of Object.entries(ENGLISH_TO_JAPANESE)) {
        if (key.toLowerCase() === lowerColor) {
            return value;
        }
    }

    return null;
}

/**
 * Translate English text to Japanese using the predefined dictionary.
 * Handles color combinations like "White/Red/Blue" by splitting and translating each part.
 * Falls back to translator API if not found.
 */
async function translateToJapaneseWithDict(text: string): Promise<string> {
    if (!text) return '';

    // Check direct match first (for regions and simple terms)
    if (ENGLISH_TO_JAPANESE[text]) {
        return ENGLISH_TO_JAPANESE[text];
    }

    // Try case-insensitive match
    const lowerText = text.toLowerCase();
    for (const [key, value] of Object.entries(ENGLISH_TO_JAPANESE)) {
        if (key.toLowerCase() === lowerText) {
            return value;
        }
    }

    // Check if it's a color combination (contains "/" separator)
    if (text.includes('/')) {
        const parts = text.split('/');
        const translatedParts: string[] = [];
        let allTranslated = true;

        for (const part of parts) {
            const trimmedPart = part.trim();
            const translated = translateSingleColor(trimmedPart);
            if (translated) {
                translatedParts.push(translated);
            } else {
                // Part not found in dictionary, keep original
                translatedParts.push(trimmedPart);
                allTranslated = false;
            }
        }

        // If at least some parts were translated, return the combined result
        if (translatedParts.length > 0) {
            return translatedParts.join('/');
        }
    }

    // Fall back to API translation
    return translator.translateToJapanese(text);
}

/**
 * English to Arabic mapping for common motorcycle auction terms
 */
const ENGLISH_TO_ARABIC: Record<string, string> = {
    // Regions
    'Kanto': 'كانتو',
    'Kansai': 'كانساي',
    'Chubu': 'تشوبو',
    'Hokkaido': 'هوكايدو',
    'Tohoku': 'توهوكو',
    'Kyushu': 'كيوشو',
    'Chugoku': 'تشوغوكو',
    'Shikoku': 'شيكوكو',
    'Okinawa': 'أوكيناوا',
    'Tokyo': 'طوكيو',
    'Osaka': 'أوساكا',
    'Nagoya': 'ناغويا',
    // Colors
    'White': 'أبيض',
    'Black': 'أسود',
    'Red': 'أحمر',
    'Blue': 'أزرق',
    'Green': 'أخضر',
    'Yellow': 'أصفر',
    'Orange': 'برتقالي',
    'Silver': 'فضي',
    'Gold': 'ذهبي',
    'Gray': 'رمادي',
    'Grey': 'رمادي',
    'Brown': 'بني',
    'Purple': 'بنفسجي',
    'Pink': 'وردي',
    'Beige': 'بيج',
    'Navy': 'كحلي',
    'Cream': 'كريمي',
    // Color variations
    'Dark Blue': 'أزرق داكن',
    'Light Blue': 'أزرق فاتح',
    'Navy blue': 'كحلي',
    'Navy Blue': 'كحلي',
    'Light blue': 'أزرق فاتح',
    'Dark blue': 'أزرق داكن',
    'Sky Blue': 'أزرق سماوي',
    'Gunmetal': 'رمادي معدني',
    'Gun Metal': 'رمادي معدني',
    'Maroon': 'خمري',
    'Wine': 'نبيذي',
    'Wine Red': 'أحمر نبيذي',
    'Bronze': 'برونزي',
    'Champagne': 'شامبين',
    'Titanium': 'تيتانيوم',
    'Copper': 'نحاسي',
    'Olive': 'زيتوني',
    'Khaki': 'كاكي',
    'Ivory': 'عاجي',
    'Charcoal': 'فحمي',
    'Turquoise': 'فيروزي',
    'Cyan': 'سماوي',
    'Magenta': 'أرجواني',
    'Coral': 'مرجاني',
    'Teal': 'أزرق مخضر',
    'Aqua': 'أكوا',
    'Burgundy': 'عنابي',
    'Tan': 'أسمر فاتح',
    'Sand': 'رملي',
    'Smoke': 'دخاني',
    'Tea': 'بني',
    // Color modifiers/finishes
    'Matte': 'مطفي',
    'Pearl': 'لؤلؤي',
    'Metallic': 'معدني',
    'Candy': 'كاندي',
    'Flat': 'مسطح',
    'Gloss': 'لامع',
    'Satin': 'ساتان',
    'Chrome': 'كروم',
    'Carbon': 'كربون',
    'Clear': 'شفاف',
    'Tricolor': 'ثلاثي الألوان',
    'Two-tone': 'لونين',
    'Graphic': 'جرافيك',

    // Inspection item terms (common findings)
    'Scratches': 'خدوش',
    'Scratch': 'خدش',
    'Dents': 'خدوش',
    'Dent': 'خدش',
    'Rust': 'صدأ',
    'Corrosion': 'تآكل',
    'Cracks': 'شقوق',
    'Crack': 'شق',
    'Wear': 'تآكل',
    'Worn': 'متآكل',
    'Damage': 'ضرر',
    'Damaged': 'تالف',
    'Fading': 'بهتان',
    'Faded': 'باهت',
    'Discoloration': 'تغير لون',
    'Stains': 'بقع',
    'Stain': 'بقعة',
    'Chips': 'تقشير',
    'Chip': 'تقشير',
    'Peeling': 'تقشر',
    'Bending': 'انحناء',
    'Bent': 'منحني',
    'Leaking': 'تسرب',
    'Leak': 'تسرب',
    'Oil leak': 'تسرب زيت',
    'Oil Leak': 'تسرب زيت',
    'Noise': 'ضوضاء',
    'Vibration': 'اهتزاز',
    'Missing': 'مفقود',
    'Broken': 'مكسور',
    'Cracked': 'متشقق',
    'Replaced': 'مستبدل',
    'Repaired': 'مُصلح',
    'Modified': 'معدل',
    'Aftermarket': 'قطع غيار',
    'Original': 'أصلي',
    'OEM': 'أصلي',
    'Good': 'جيد',
    'Fair': 'مقبول',
    'Poor': 'ضعيف',
    'Excellent': 'ممتاز',
    'Normal': 'طبيعي',
    'Clean': 'نظيف',
    'Dirty': 'متسخ',
    'Yes': 'نعم',
    'No': 'لا',
    'None': 'لا يوجد',
    'Minor': 'طفيف',
    'Major': 'كبير',
    'Small': 'صغير',
    'Large': 'كبير',
    'Light': 'خفيف',
    'Heavy': 'ثقيل',
    'Slight': 'طفيف',
    'Significant': 'ملحوظ',
    'Multiple': 'متعدد',
    'Several': 'عدة',
    'Few': 'قليل',
    'Many': 'كثير',

    // Motorcycle parts
    'Tank': 'خزان',
    'Fender': 'رفرف',
    'Front Fender': 'رفرف أمامي',
    'Rear Fender': 'رفرف خلفي',
    'Fairing': 'كسوة',
    'Cowl': 'غطاء',
    'Side Cover': 'غطاء جانبي',
    'Seat': 'مقعد',
    'Mirror': 'مرآة',
    'Mirrors': 'مرايا',
    'Handlebar': 'مقود',
    'Handlebars': 'مقود',
    'Grip': 'مقبض',
    'Grips': 'مقابض',
    'Lever': 'رافعة',
    'Levers': 'روافع',
    'Brake Lever': 'رافعة فرامل',
    'Clutch Lever': 'رافعة قابض',
    'Footpeg': 'مسند قدم',
    'Footpegs': 'مساند قدم',
    'Exhaust': 'عادم',
    'Muffler': 'كاتم صوت',
    'Silencer': 'كاتم صوت',
    'Chain': 'سلسلة',
    'Sprocket': 'ترس',
    'Wheel': 'عجلة',
    'Wheels': 'عجلات',
    'Front Wheel': 'عجلة أمامية',
    'Rear Wheel': 'عجلة خلفية',
    'Tire': 'إطار',
    'Tires': 'إطارات',
    'Front Tire': 'إطار أمامي',
    'Rear Tire': 'إطار خلفي',
    'Brake': 'فرامل',
    'Brakes': 'فرامل',
    'Front Brake': 'فرامل أمامية',
    'Rear Brake': 'فرامل خلفية',
    'Disc': 'قرص',
    'Rotor': 'قرص',
    'Caliper': 'فرجار',
    'Suspension': 'تعليق',
    'Fork': 'شوكة',
    'Forks': 'شوك',
    'Front Fork': 'شوكة أمامية',
    'Shock': 'ممتص صدمات',
    'Shocks': 'ممتصات صدمات',
    'Rear Shock': 'ممتص خلفي',
    'Swingarm': 'ذراع متأرجح',
    'Frame': 'هيكل',
    'Subframe': 'هيكل فرعي',
    'Triple Clamp': 'مشبك ثلاثي',
    'Steering': 'توجيه',
    'Engine': 'محرك',
    'Cylinder': 'أسطوانة',
    'Head': 'رأس',
    'Cylinder Head': 'رأس أسطوانة',
    'Gasket': 'حشية',
    'Oil': 'زيت',
    'Coolant': 'سائل تبريد',
    'Radiator': 'مبرد',
    'Fan': 'مروحة',
    'Battery': 'بطارية',
    'Starter': 'مشغل',
    'Alternator': 'مولد',
    'Ignition': 'إشعال',
    'Spark Plug': 'شمعة إشعال',
    'Carburetor': 'مازج الوقود',
    'Injection': 'حقن',
    'Fuel Injection': 'حقن وقود',
    'Filter': 'فلتر',
    'Air Filter': 'فلتر هواء',
    'Oil Filter': 'فلتر زيت',
    'Fuel Filter': 'فلتر وقود',
    'Clutch': 'قابض',
    'Transmission': 'ناقل حركة',
    'Gearbox': 'صندوق تروس',
    'Throttle': 'خانق',
    'Cable': 'كيبل',
    'Cables': 'كيبلات',
    'Wiring': 'أسلاك',
    'Harness': 'حزمة أسلاك',
    'Lights': 'أضواء',
    'Headlight': 'مصباح أمامي',
    'Taillight': 'مصباح خلفي',
    'Turn Signal': 'إشارة انعطاف',
    'Indicator': 'مؤشر',
    'Indicators': 'مؤشرات',
    'Horn': 'بوق',
    'Speedometer': 'عداد سرعة',
    'Tachometer': 'عداد دورات',
    'Gauge': 'عداد',
    'Gauges': 'عدادات',
    'Display': 'شاشة',
    'Switch': 'مفتاح',
    'Switches': 'مفاتيح',
    'Key': 'مفتاح',
    'Lock': 'قفل',
    'Stand': 'حامل',
    'Kickstand': 'حامل جانبي',
    'Center Stand': 'حامل مركزي',
    'Passenger': 'راكب',
    'Pillion': 'مقعد خلفي',
};

/**
 * Translate a single color word to Arabic
 */
function translateSingleColorArabic(color: string): string | null {
    // Direct match
    if (ENGLISH_TO_ARABIC[color]) {
        return ENGLISH_TO_ARABIC[color];
    }

    // Case-insensitive match
    const lowerColor = color.toLowerCase();
    for (const [key, value] of Object.entries(ENGLISH_TO_ARABIC)) {
        if (key.toLowerCase() === lowerColor) {
            return value;
        }
    }

    return null;
}

/**
 * Translate English text to Arabic using the predefined dictionary.
 * Handles color combinations like "White/Red/Blue" by splitting and translating each part.
 * Falls back to translator API if not found.
 */
async function translateToArabicWithDict(text: string): Promise<string> {
    if (!text) return '';

    // Check direct match first (for regions and simple terms)
    if (ENGLISH_TO_ARABIC[text]) {
        return ENGLISH_TO_ARABIC[text];
    }

    // Try case-insensitive match
    const lowerText = text.toLowerCase();
    for (const [key, value] of Object.entries(ENGLISH_TO_ARABIC)) {
        if (key.toLowerCase() === lowerText) {
            return value;
        }
    }

    // Check if it's a color combination (contains "/" separator)
    // Check if it's a color combination (contains "/" separator)
    if (text.includes('/')) {
        const parts = text.split('/');
        const translatedParts: string[] = [];
        let hasTranslatedPart = false;

        for (const part of parts) {
            const trimmedPart = part.trim();
            const translated = translateSingleColorArabic(trimmedPart);
            if (translated) {
                translatedParts.push(translated);
                hasTranslatedPart = true;
            } else {
                // Part not found in dictionary, keep original
                translatedParts.push(trimmedPart);
            }
        }

        // Only return if we actually translated something (likely a color combo)
        // Otherwise fall through to API translation (likely a sentence with a slash)
        if (hasTranslatedPart) {
            return translatedParts.join('/');
        }
    }

    // Fall back to API translation
    return translator.translate(text, 'ar');
}

/**
 * Translates a brand/maker name.
 * Brand names are ALWAYS normalized to English, regardless of target locale.
 * 
 * Example: "ホンダ" -> "Honda", "Kawasaki" -> "Kawasaki"
 */
export async function translateBrandName(text: string): Promise<string> {
    if (!text) return '';

    // Use the maker map for direct lookup
    const normalized = normalizeMakerToEnglish(text);

    // If maker map didn't change it and it contains Japanese, try API
    if (normalized === text && /[\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FAF]/.test(text)) {
        const apiResult = await translator.translateToEnglish(text);
        return cleanOutput(apiResult);
    }

    return cleanOutput(normalized);
}

/**
 * Translates a model name.
 * Model names are kept in English/alphanumeric form.
 * Japanese parts are translated to English.
 * 
 * Example: "CRF250L" -> "CRF250L"
 *          "ニンジャ250" -> "Ninja 250"
 *          "ドゥカティパニガーレV4" -> "Ducati Panigale V4"
 */
export async function translateModelName(text: string): Promise<string> {
    if (!text) return '';

    // If already ASCII only, return as-is
    if (/^[\x00-\x7F]*$/.test(text)) {
        return text;
    }

    // Contains Japanese - translate to English
    const englishResult = await translator.translateToEnglish(text);
    return cleanOutput(englishResult);
}

/**
 * Translates general text (colors, regions, etc.) to the target locale.
 * Uses English Pivot Strategy: Source -> English -> Target Locale
 * 
 * For Japanese locale, translates English text to Japanese
 * For English locale, translates to English
 * For Arabic locale, translates to Arabic
 */
export async function translateGeneral(text: string, targetLocale: string): Promise<string> {
    if (!text) return '';

    // For Japanese locale
    if (targetLocale === 'ja') {
        // If text is already Japanese, return it
        if (/[\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FAF]/.test(text)) {
            return text;
        }
        // If text is English, translate to Japanese using dictionary first
        const japaneseResult = await translateToJapaneseWithDict(text);
        return cleanOutput(japaneseResult);
    }

    // For English locale
    if (targetLocale === 'en') {
        // If already ASCII, return as-is
        if (/^[\x00-\x7F]*$/.test(text)) {
            return text;
        }
        const englishResult = await translator.translateToEnglish(text);
        return cleanOutput(englishResult);
    }

    // For Arabic locale (and potentially others)
    if (targetLocale === 'ar') {
        // Step 1: Get English master key (if text contains Japanese)
        let masterKey = text;
        if (/[\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FAF]/.test(text)) {
            masterKey = await translator.translateToEnglish(text);
            masterKey = cleanOutput(masterKey);
        }

        // Step 2: Translate to Arabic using dictionary first
        const arabicResult = await translateToArabicWithDict(masterKey);
        let cleaned = cleanOutput(arabicResult);

        // Step 3: Enforce Western digits
        return toWesternDigits(cleaned);
    }

    // Fallback for unknown locales
    return text;
}

/**
 * @deprecated Use translateBrandName, translateModelName, or translateGeneral instead.
 * 
 * Legacy function - kept for backward compatibility.
 * Normalizes text translation using the English Pivot Strategy.
 */
export async function getNormalizedTranslation(text: string, targetLocale: string): Promise<string> {
    return translateGeneral(text, targetLocale);
}
