
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    // Search for bike with name containing 'Streetfighter' or 'ストリートファイター' or 'ｽﾄﾘｰﾄﾌｧｲﾀｰ'
    const bikes = await prisma.bike.findMany({
        where: {
            OR: [
                { name: { contains: 'Streetfighter' } },
                { name: { contains: 'ストリートファイター' } },
                { name: { contains: 'ｽﾄﾘｰﾄﾌｧｲﾀｰ' } }
            ]
        }
    });

    console.log(`Found ${bikes.length} bikes.`);
    for (const bike of bikes) {
        console.log('---------------------------------------------------');
        console.log(`ID: ${bike.id}`);
        console.log(`BDS ID: ${bike.bdsId}`);
        console.log(`Name (Original): "${bike.name}"`);
        console.log(`Name (En): "${bike.nameEn}"`);
        console.log(`Name (Ar): "${bike.nameAr}"`);
    }
}

main()
    .catch(e => console.error(e))
    .finally(async () => {
        await prisma.$disconnect();
    });
