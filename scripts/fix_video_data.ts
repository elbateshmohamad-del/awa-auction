
import { importBikesFromBDS } from '../src/lib/bds-scraper';
import { prisma } from '../src/lib/prisma';

async function main() {
    console.log('Starting single bike re-scrape to fix video URLs...');

    // Import 50 bikes to update recent inventory
    const result = await importBikesFromBDS(50);

    console.log('Import result:', JSON.stringify(result, null, 2));

    if (result.success && result.imported.length > 0) {
        const bike = result.imported[0];
        console.log(`Re-scraped bike: ${bike.name} (${bike.id})`);
        console.log(`Video URLs: ${bike.videoUrls}`); // Check if this is populated
    } else {
        console.error('Failed to import any bike.');
    }
}

main()
    .catch(console.error)
    .finally(async () => {
        await prisma.$disconnect();
    });
