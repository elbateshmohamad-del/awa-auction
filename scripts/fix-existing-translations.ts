
import { PrismaClient } from '@prisma/client';
import { translator } from '../src/lib/translator';

const prisma = new PrismaClient();

async function main() {
    console.log('Starting bulk translation update...');
    const bikes = await prisma.bike.findMany();
    console.log(`Found ${bikes.length} bikes to process.`);

    let updatedCount = 0;
    let errorCount = 0;

    for (const bike of bikes) {
        try {
            console.log(`Processing ${bike.bdsId}: ${bike.name}`);

            // Translate Name
            const nameEn = await translator.translate(bike.name, 'en');
            const nameAr = await translator.translate(bike.name, 'ar');

            // Re-translate other fields to fix potential previous failures
            // Note: If the field is already valid English, the translator (Gemini) usually returns it as is.
            // If it was failed (Japanese), it will be fixed.
            const color = await translator.translate(bike.color, 'en');
            const region = await translator.translate(bike.region, 'en');
            const listingType = await translator.translate(bike.listingType, 'en');
            const inspectionStatus = await translator.translate(bike.inspectionStatus, 'en');
            const inspection = await translator.translate(bike.inspection, 'en');
            const hasParts = await translator.translate(bike.hasParts, 'en');
            const result = await translator.translate(bike.result, 'en');

            await prisma.bike.update({
                where: { id: bike.id },
                data: {
                    nameEn,
                    nameAr,
                    color,
                    region,
                    listingType,
                    inspectionStatus,
                    inspection,
                    hasParts,
                    result
                }
            });

            console.log(`  -> Updated: [EN] ${nameEn} | [AR] ${nameAr}`);
            updatedCount++;

            // Rate limit delay
            await new Promise(resolve => setTimeout(resolve, 5000));
        } catch (e) {
            console.error(`Failed to update bike ${bike.bdsId}:`, e);
            errorCount++;
        }
    }

    console.log('\n--- Summary ---');
    console.log(`Total processed: ${bikes.length}`);
    console.log(`Updated: ${updatedCount}`);
    console.log(`Errors: ${errorCount}`);
}

main()
    .catch(e => console.error(e))
    .finally(async () => {
        await prisma.$disconnect();
    });
