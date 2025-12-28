
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    const id = 'awa-1766710191175-u140vwxpm'; // One of the IDs the user is looking at
    console.log(`Fetching full data for Bike ID: ${id}`);

    const bike = await prisma.bike.findUnique({
        where: { id }
    });

    if (!bike) {
        console.log('Bike NOT FOUND in DB');
        return;
    }

    console.log('--- BASIC INFO ---');
    console.log(`Name: ${bike.name}`);
    console.log(`BDS ID: ${bike.bdsId}`);
    console.log(`Status: ${bike.status}`);

    console.log('\n--- IMAGES (Raw) ---');
    console.log(bike.images);

    console.log('\n--- VIDEO URLs (Raw) ---');
    console.log(bike.videoUrls);

    console.log('\n--- INSPECTION DETAILS (Raw) ---');
    console.log(bike.inspectionDetails);

    console.log('\n--- REMARKS (Raw) ---');
    console.log(bike.remarks);

    // Check parsing
    try {
        const parsedImages = JSON.parse(bike.images);
        console.log(`\nParsed Images Count: ${Array.isArray(parsedImages) ? parsedImages.length : 'Not Array'}`);
    } catch (e) {
        console.log('\nError parsing images JSON');
    }
}

main()
    .catch(e => console.error(e))
    .finally(async () => {
        await prisma.$disconnect();
    });
