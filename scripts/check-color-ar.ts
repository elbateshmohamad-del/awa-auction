import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    const allBikes = await prisma.bike.findMany();

    // We need to detect entries where colorAr contains Latin characters (i.e. English)
    // Arabic script: \u0600-\u06FF
    const arabicRegex = /[\u0600-\u06FF]/;
    const latinRegex = /[a-zA-Z]/;

    let issues = 0;

    console.log('--- Checking Color AR for non-Arabic content ---');
    for (const bike of allBikes) {
        const colorAr = bike.colorAr || '';

        // If it has Latin characters but no Arabic, it's probably still English
        if (latinRegex.test(colorAr) && !arabicRegex.test(colorAr)) {
            console.log(`[EN in AR] ID: ${bike.id}, colorAr: "${colorAr}"`);
            issues++;
        }
    }

    console.log(`\nFound ${issues} colorAr fields that appear to be English.`);

    // Also show a sample of correct Arabic entries
    console.log('\n--- Sample of correct Arabic colorAr ---');
    const correctAr = allBikes.filter(b => b.colorAr && arabicRegex.test(b.colorAr)).slice(0, 5);
    correctAr.forEach(b => console.log(`ID: ${b.id}, colorAr: "${b.colorAr}"`));
}

main()
    .catch(console.error)
    .finally(async () => {
        await prisma.$disconnect();
    });
