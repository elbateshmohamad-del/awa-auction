import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    const allBikes = await prisma.bike.findMany();
    console.log(`Total Bikes: ${allBikes.length}`);

    const missingEn = allBikes.filter(b => !b.colorEn);
    const missingAr = allBikes.filter(b => !b.colorAr);

    console.log(`Missing EN: ${missingEn.length}`);
    console.log(`Missing AR: ${missingAr.length}`);

    if (missingEn.length > 0) {
        console.log('--- Sample Missing EN ---');
        missingEn.slice(0, 5).forEach(b => console.log(`ID: ${b.id}, Color: ${b.color}`));
    }
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
