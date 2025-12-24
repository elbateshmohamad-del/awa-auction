
import * as fs from 'fs';
import * as path from 'path';
import { parseBikeDetailPage } from '@/lib/bds-scraper';
// Since it's a script inside src/scripts, relative path is ../lib/bds-scraper

// Mock DOM dependency if needed, but the function uses cheerio which doesn't need browser environment.

const samplePath = path.join(process.cwd(), 'data', 'sample_bike_detail.html');
console.log(`Reading sample from: ${samplePath}`);

try {
    const html = fs.readFileSync(samplePath, 'utf-8');
    const result = parseBikeDetailPage(html, 'test-id', '2025-12-17');

    if (result) {
        console.log('--- Parsing Successful ---');
        console.log(`Name: ${result.name}`);
        console.log(`Inspection Images Found:`);
        console.log(JSON.stringify(result.inspectionImages, null, 2));

        // Verify key expectations
        const totalInspectionImages = Object.values(result.inspectionImages || {}).flat().length;
        console.log(`Total Inspection Images: ${totalInspectionImages}`);

        if (totalInspectionImages > 0) {
            console.log('PASS: Inspection images extracted.');
        } else {
            console.error('FAIL: No inspection images extracted.');
        }

        // Verify some known images from the user's HTML
        const knownImage = '/auctiondata/bds/disp/bds/20251217/image_item/000220251217_010_01.jpg';
        const found = Object.values(result.inspectionImages || {}).flat().some(img => img.includes(knownImage.split('/').pop()!));

        if (found) {
            console.log('PASS: Known image found in output.');
        } else {
            console.log('FAIL: Known image NOT found in output.');
        }

    } else {
        console.error('Parsing returned null.');
    }

} catch (err) {
    console.error('Error running test:', err);
}
