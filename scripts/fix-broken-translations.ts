
import { PrismaClient } from '@prisma/client';
import { translator } from '../src/lib/translator';

const prisma = new PrismaClient();

function hasJapanese(text: string): boolean {
    return /[\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FAF]/.test(text);
}

async function main() {
    console.log('Starting broken translation repair...');
    const bikes = await prisma.bike.findMany();

    let count = 0;

    for (const bike of bikes) {
        // Check if nameEn contains Japanese (indicating translation failure)
        // OR if nameEn is null/empty
        // OR if nameAr contains Japanese
        const enNeedsFix = !bike.nameEn || hasJapanese(bike.nameEn);
        const arNeedsFix = !bike.nameAr || hasJapanese(bike.nameAr);

        if (enNeedsFix || arNeedsFix) {
            console.log(`Fixing: ${bike.name} (ID: ${bike.bdsId})`);
            console.log(`  Current En: ${bike.nameEn}`);
            console.log(`  Current Ar: ${bike.nameAr}`);

            try {
                // Force re-translation
                // Note: Since we updated translator.ts to TRIM, the hash will change for " ﾄﾞｶﾃｨ..."
                // effectively bypassing the bad cache.
                const nameEn = await translator.translate(bike.name, 'en');
                const nameAr = await translator.translate(bike.name, 'ar');

                await prisma.bike.update({
                    where: { id: bike.id },
                    data: {
                        nameEn,
                        nameAr
                    }
                });

                console.log(`  -> Fixed En: ${nameEn}`);
                console.log(`  -> Fixed Ar: ${nameAr}`);
                count++;

                // Rate limit safety
                await new Promise(resolve => setTimeout(resolve, 2000));
            } catch (e) {
                console.error(`Failed to fix ${bike.bdsId}:`, e);
            }
        }
    }

    console.log(`\nRepaired ${count} bikes.`);
}

main()
    .catch(e => console.error(e))
    .finally(async () => {
        await prisma.$disconnect();
    });
