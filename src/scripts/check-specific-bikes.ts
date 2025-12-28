
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    const idsToCheck = [
        'awa-1766710191175-u140vwxpm',
        'awa-1766710220866-ru4ipdcrc'
    ];

    console.log('Checking for IDs:', idsToCheck);

    for (const id of idsToCheck) {
        const bike = await prisma.bike.findUnique({
            where: { id }
        });

        if (bike) {
            console.log(`\nFound Bike: ${id}`);
            console.log(`Status: ${bike.status}`);
            console.log(`Name: ${bike.name}`);
            console.log(`BDS ID: ${bike.bdsId}`);
        } else {
            console.log(`\nBike NOT found: ${id}`);
        }
    }

    // Also list recent bikes to see what IS there
    console.log('\n--- Recent 5 Bikes ---');
    const recent = await prisma.bike.findMany({
        take: 5,
        orderBy: { importedAt: 'desc' },
        select: { id: true, name: true, status: true }
    });
    console.log(recent);
}

main()
    .catch((e) => console.error(e))
    .finally(async () => await prisma.$disconnect());
