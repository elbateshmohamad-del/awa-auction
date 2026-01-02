import { PrismaClient } from '@prisma/client';
import { translator } from '../src/lib/translator';

const prisma = new PrismaClient();

async function main() {
    const targetIds = [
        'awa-1767052604666-9lubtgrs9',
        'awa-1767052622681-h3s5ep685'
    ];

    for (const id of targetIds) {
        const bike = await prisma.bike.findUnique({ where: { id } });
        if (!bike) {
            console.log(`Bike ${id} not found.`);
            continue;
        }

        console.log(`Fixing ${id}: color = "${bike.color}"`);

        // Force re-translate to Arabic
        const colorAr = await translator.translate(bike.color, 'ar');

        console.log(`  -> New colorAr: "${colorAr}"`);

        await prisma.bike.update({
            where: { id },
            data: { colorAr }
        });
    }

    console.log('Done fixing remaining colorAr entries.');
}

main()
    .catch(console.error)
    .finally(async () => {
        await prisma.$disconnect();
    });
