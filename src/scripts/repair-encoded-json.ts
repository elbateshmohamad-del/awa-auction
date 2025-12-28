
import { PrismaClient } from '@prisma/client';
import { updateBike } from '../lib/bike-database';

const prisma = new PrismaClient();

async function main() {
    console.log('--- STARTING JSON REPAIR ---');
    const bikes = await prisma.bike.findMany();
    let fixedCount = 0;

    for (const bike of bikes) {
        let needsUpdate = false;
        const updates: any = {};

        // Helper to check and fix double encoding
        const checkField = (fieldName: string, value: string | null) => {
            if (!value) return null;
            try {
                const parsed1 = JSON.parse(value);
                if (typeof parsed1 === 'string') {
                    // Double encoded!
                    const parsed2 = JSON.parse(parsed1);
                    console.log(`[${bike.bdsId}] Fixed double-encoded ${fieldName}`);
                    return parsed2; // Return the raw object/array
                }
            } catch (e) {
                // Ignore parse errors, assume correct or broken beyond repair
            }
            return null;
        };

        const fixedImages = checkField('images', bike.images);
        if (fixedImages) {
            updates.images = fixedImages;
            needsUpdate = true;
        }

        const fixedVideos = checkField('videoUrls', bike.videoUrls);
        if (fixedVideos) {
            updates.videoUrls = fixedVideos;
            needsUpdate = true;
        }

        const fixedRemarks = checkField('remarks', bike.remarks);
        if (fixedRemarks) {
            updates.remarks = fixedRemarks;
            needsUpdate = true;
        }

        const fixedInspection = checkField('inspectionDetails', bike.inspectionDetails);
        if (fixedInspection) {
            updates.inspectionDetails = fixedInspection;
            needsUpdate = true;
        }

        if (needsUpdate) {
            await updateBike(bike.id, updates);
            fixedCount++;
        }
    }

    console.log(`--- REPAIR COMPLETE. Fixed ${fixedCount} bikes. ---`);
}

main()
    .catch(e => console.error(e))
    .finally(async () => {
        await prisma.$disconnect();
    });
