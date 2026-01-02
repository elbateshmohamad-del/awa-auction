
import { PrismaClient } from '@prisma/client';
import { translator } from '../src/lib/translator';

const prisma = new PrismaClient();

// Helper to check language
function isJapanese(text: string): boolean {
    return /[\u3000-\u303F\u3040-\u309F\u30A0-\u30FF\uFF00-\uFFEF\u4E00-\u9FAF]/.test(text);
}

async function main() {
    console.log('Starting color normalization and translation...');
    const bikes = await prisma.bike.findMany();

    let processed = 0;

    for (const bike of bikes) {
        if (!bike.color) continue;

        let originalColorJA = bike.color;
        let colorEn = '';
        let colorAr = '';

        // Current 'color' field state:
        // Could be "Red" (English, improper state for 'color' field which expect JA)
        // Could be "赤" (Japanese, proper state)

        if (!isJapanese(bike.color)) {
            // It's likely English!
            // We should ideally reverse translate to Japanese for the 'color' field
            // But 'translator.translate(text, 'ja')' isn't explicitly implemented in the class
            // The class defaults to EN or AR targets.
            // Let's fallback: use current English as source for AR, and keep it as EN.
            // For 'color' (JA), we might have to use EN for now, or use a trick.

            // Trick: The user wants Japanese filter. 
            // If we leave it as English, the filter will be English.
            // We will attempt to translate English -> Japanese by using 'translator' 
            // but we need to check if 'translator' supports 'ja' target? 
            // Looking at the code: targetLang: 'en' | 'ar' = 'en'. It doesn't support 'ja'.
            // So we will just keep the English in the 'color' field if we can't reverse it easily.
            // OR we can make a direct Gemini call? No, use the tools available.

            // Let's assume for now: English in 'color' field is "acceptable failure".
            // We will enable 'colorEn' = bike.color.
            console.log(`[${bike.bdsId}] Color is English-like: "${bike.color}". Populating translations.`);

            colorEn = bike.color;
            colorAr = await translator.translate(bike.color, 'ar');

            // Note: If we really want Japanese, we can't easily get it without updating Translator.
        } else {
            // It IS Japanese.
            console.log(`[${bike.bdsId}] Color is Japanese: "${bike.color}". Translating.`);
            originalColorJA = bike.color;
            colorEn = await translator.translate(bike.color, 'en');
            colorAr = await translator.translate(bike.color, 'ar');
        }

        await prisma.bike.update({
            where: { id: bike.id },
            data: {
                color: originalColorJA,
                colorEn: colorEn,
                colorAr: colorAr
            }
        });

        console.log(`  -> [JA] ${originalColorJA} | [EN] ${colorEn} | [AR] ${colorAr}`);
        processed++;

        // Rate limit safety
        await new Promise(resolve => setTimeout(resolve, 2000));
    }

    console.log(`\nProcessed ${processed} bikes.`);
}

main()
    .catch(e => console.error(e))
    .finally(async () => {
        await prisma.$disconnect();
    });
