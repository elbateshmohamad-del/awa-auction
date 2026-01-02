import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    const bikes = await prisma.bike.findMany({
        select: { id: true, inspectionDetails: true },
        take: 5
    });

    for (const bike of bikes) {
        console.log(`\n=== Bike: ${bike.id} ===`);
        const details = bike.inspectionDetails;
        console.log(JSON.stringify(details, null, 2));
    }
}

main()
    .catch(console.error)
    .finally(() => prisma.$disconnect());
