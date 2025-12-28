
import { importBikesFromBDS } from '@/lib/bds-scraper';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function run() {
    console.log('Starting scraper debug run...');
    try {
        const result = await importBikesFromBDS(5); // Limit to 5 for quick debug
        console.log('Import result:', JSON.stringify(result, null, 2));

        if (result.success && result.imported.length > 0) {
            console.log('Checking imported bikes in DB...');
            for (const bike of result.imported) {
                const dbBike = await prisma.bike.findUnique({
                    where: { id: bike.id }
                });
                console.log(`Bike ${bike.id}:`, {
                    videoUrls: dbBike?.videoUrls,
                    imagesCount: dbBike?.images?.length || 0,
                    grade: dbBike?.overallGrade,
                    model: dbBike?.model
                });
            }
        }
    } catch (err) {
        console.error('Fatal error:', err);
    }
}

run();
