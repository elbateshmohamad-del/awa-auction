
import * as fs from 'fs';
import * as path from 'path';

const BDS_BASE_URL = 'https://bdsc.jupiter.ac';

// Helper to normalize URL
const normalizeUrl = (url: string) => {
    if (!url) return '';
    if (!url.startsWith('http')) {
        return `${BDS_BASE_URL}${url.startsWith('/') ? '' : '/'}${url}`;
    }
    return url;
};

// Test the exact logic from bds-scraper.ts
function testVideoExtraction(html: string) {
    console.log('=== Testing Video Extraction (using bds-scraper logic) ===\n');

    const urls: Set<string> = new Set();

    // 0. Extract from lazy-load script (var node = "...")
    const scriptRegex = /var\s+node\s*=\s*"((?:[^"\\]|\\.)*)"/i;
    const scriptMatch = html.match(scriptRegex);

    console.log('Script regex match:', !!scriptMatch);

    if (scriptMatch && scriptMatch[1]) {
        // Unescape JS string
        let innerHtml = scriptMatch[1].replace(/\\"/g, '"').replace(/\\'/g, "'").replace(/\\\//g, '/');

        console.log('Inner HTML length:', innerHtml.length);
        console.log('Inner HTML preview:', innerHtml.substring(0, 300));

        // Use strong regex to find all .mp4 URLs in the unescaped string
        const videoMatches = innerHtml.match(/src=['"]([^'"]+\.mp4)['"]/g);
        console.log('Video matches found:', videoMatches?.length || 0);
        console.log('Video matches:', videoMatches);

        if (videoMatches) {
            videoMatches.forEach(match => {
                const url = match.replace(/^src=['"]/, '').replace(/['"]$/, '');
                if (url) {
                    const absUrl = normalizeUrl(url);
                    console.log(`Found video: ${absUrl}`);
                    urls.add(absUrl);
                }
            });
        }
    } else {
        console.log('No script match found! Trying alternate approach...');

        // Find movie_engine paths directly in HTML
        const moviePathRegex = /\/auctiondata\/[^'">\s]+movie_engine\/[^'">\s]+\.mp4/g;
        const directMatches = html.match(moviePathRegex);
        console.log('Direct movie_engine matches:', directMatches);

        if (directMatches) {
            directMatches.forEach(url => {
                const absUrl = normalizeUrl(url);
                console.log(`Found video (direct): ${absUrl}`);
                urls.add(absUrl);
            });
        }
    }

    console.log('\n=== Final Result ===');
    console.log('Videos found:', Array.from(urls));
    return Array.from(urls);
}

// Run test
const debugFile = path.join(process.cwd(), 'data', 'bds-detail-debug.html');
if (fs.existsSync(debugFile)) {
    const html = fs.readFileSync(debugFile, 'utf-8');
    testVideoExtraction(html);
} else {
    console.error('Debug file not found');
}
