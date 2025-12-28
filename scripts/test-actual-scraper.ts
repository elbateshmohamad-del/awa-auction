
import * as fs from 'fs';
import * as path from 'path';
import { extractVideoUrls } from '../src/lib/bds-scraper';

// Test with the actual extractVideoUrls function from bds-scraper
const debugFile = path.join(process.cwd(), 'data', 'bds-detail-debug.html');
if (fs.existsSync(debugFile)) {
    const html = fs.readFileSync(debugFile, 'utf-8');
    console.log('=== Testing extractVideoUrls from bds-scraper.ts ===\n');
    const videos = extractVideoUrls(html);
    console.log('\n=== Final Result ===');
    console.log('Videos found:', videos);
    console.log('Count:', videos.length);
} else {
    console.error('Debug file not found');
}
