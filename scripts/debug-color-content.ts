import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    const allBikes = await prisma.bike.findMany();
    console.log(`Total Bikes: ${allBikes.length}`);

    const japaneseRegex = /[\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf]/;

    let problematicEn = 0;
    let problematicAr = 0;

    console.log('--- Checking Color EN ---');
    for (const bike of allBikes) {
        if (bike.colorEn && japaneseRegex.test(bike.colorEn)) {
            console.log(`[EN has JA] ID: ${bike.id}, Original: ${bike.color}, EN: ${bike.colorEn}`);
            problematicEn++;
        }
    }

    console.log('--- Checking Color AR ---');
    for (const bike of allBikes) {
        // Arabic might be trickier if it fell back to EN, but definitely shouldn't be JA
        if (bike.colorAr && japaneseRegex.test(bike.colorAr)) {
            console.log(`[AR has JA] ID: ${bike.id}, Original: ${bike.color}, AR: ${bike.colorAr}`);
            problematicAr++;
        }
    }

    console.log(`\nFound ${problematicEn} issues in EN, ${problematicAr} issues in AR.`);
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
