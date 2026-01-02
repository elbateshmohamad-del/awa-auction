import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    const args = process.argv.slice(2);
    const fixMode = args.includes('--fix');

    console.log('Starting translation audit...');
    if (fixMode) {
        console.log('FIX MODE ENABLED: Corrupted entries will be cleared.');
    } else {
        console.log('DRY RUN: Use --fix to apply changes.');
    }

    // 1. Audit Dictionary Table
    console.log('\n--- Auditing Dictionary Table ---');
    const dictionaryEntries = await prisma.dictionary.findMany();
    let corruptedCount = 0;

    for (const entry of dictionaryEntries) {
        if (entry.ar) {
            // Simple check: does it contain ANY Arabic characters?
            // Arabic Unicode range: \u0600-\u06FF
            const hasArabic = /[\u0600-\u06FF]/.test(entry.ar);

            if (!hasArabic) {
                console.log(`[Dictionary] Corrupted ID: ${entry.id} | Key: "${entry.key}" | Value: "${entry.ar}"`);
                corruptedCount++;

                if (fixMode) {
                    await prisma.dictionary.update({
                        where: { id: entry.id },
                        data: { ar: null } // Reset to null so it can be re-translated
                    });
                    console.log(`  -> FIXED (Set to null)`);
                }
            }
        }
    }

    console.log(`Dictionary Audit Complete. Found ${corruptedCount} corrupted 'ar' entries.`);

    // 2. Audit Translation Table (Cache)
    console.log('\n--- Auditing Translation Table (Cache) ---');
    // Only check translations where targetLang is 'ar'
    const translationEntries = await prisma.translation.findMany({
        where: { targetLang: 'ar' }
    });

    let corruptedCacheCount = 0;

    for (const entry of translationEntries) {
        // Check if translated text has Arabic
        const hasArabic = /[\u0600-\u06FF]/.test(entry.translatedText);

        if (!hasArabic) {
            console.log(`[Translation] Corrupted ID: ${entry.id} | Original: "${entry.originalText}" | Value: "${entry.translatedText}"`);
            corruptedCacheCount++;

            if (fixMode) {
                await prisma.translation.delete({
                    where: { id: entry.id }
                });
                console.log(`  -> FIXED (Deleted)`);
            }
        }
    }

    console.log(`Translation Cache Audit Complete. Found ${corruptedCacheCount} corrupted 'ar' entries.`);

    console.log('\nAudit finished.');
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
