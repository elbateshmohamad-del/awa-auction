import { PrismaClient } from '@prisma/client';
import { translator } from '../src/lib/translator';

const prisma = new PrismaClient();

function sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
    const allBikes = await prisma.bike.findMany();
    const japaneseRegex = /[\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf]/;

    let fixedCount = 0;

    // Process EN failures
    console.log('--- Fixing EN Failures ---');
    const enFailures = allBikes.filter(b => b.colorEn && japaneseRegex.test(b.colorEn));
    console.log(`Found ${enFailures.length} EN failures.`);

    for (const bike of enFailures) {
        console.log(`Fixing [EN] ${bike.id}: ${bike.color} (Current: ${bike.colorEn})`);

        // Wait to avoid rate limits
        await sleep(2000);

        // Force re-translate
        try {
            const translated = await translator.translate(bike.color, 'en');

            if (translated && !japaneseRegex.test(translated) && translated !== bike.colorEn) {
                console.log(`  -> Fixed: ${translated}`);
                await prisma.bike.update({
                    where: { id: bike.id },
                    data: { colorEn: translated }
                });
                fixedCount++;
            } else {
                console.log(`  -> Failed again: ${translated}`);
            }
        } catch (e) {
            console.error(`  -> Error: ${e}`);
        }
    }

    // Process AR failures
    console.log('--- Fixing AR Failures ---');
    const arFailures = allBikes.filter(b => b.colorAr && japaneseRegex.test(b.colorAr));
    console.log(`Found ${arFailures.length} AR failures.`);

    for (const bike of arFailures) {
        console.log(`Fixing [AR] ${bike.id}: ${bike.color} (Current: ${bike.colorAr})`);

        // Wait to avoid rate limits
        await sleep(2000);

        try {
            const translated = await translator.translate(bike.color, 'ar');

            // For Arabic, we just check it's not Japanese. 
            // Ideally we'd check for Arabic script but "not Japanese" is a good enough proxy for "change happened"
            if (translated && !japaneseRegex.test(translated) && translated !== bike.colorAr) {
                console.log(`  -> Fixed: ${translated}`);
                await prisma.bike.update({
                    where: { id: bike.id },
                    data: { colorAr: translated }
                });
                fixedCount++;
            } else {
                console.log(`  -> Failed again: ${translated}`);
            }
        } catch (e) {
            console.error(`  -> Error: ${e}`);
        }
    }

    console.log(`\nTotal Fixed: ${fixedCount}`);
}

main()
    .catch(console.error)
    .finally(async () => {
        await prisma.$disconnect();
    });
