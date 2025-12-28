
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function checkBikes() {
    const count = await prisma.bike.count();
    const bikes = await prisma.bike.findMany({
        select: { id: true, bdsId: true, name: true, status: true, importedAt: true }
    });
    console.log(`Total Bikes in DB: ${count}`);
    console.log(JSON.stringify(bikes, null, 2));
}

checkBikes()
    .catch(console.error)
    .finally(() => prisma.$disconnect());
