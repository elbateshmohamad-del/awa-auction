
import * as fs from 'fs';
import * as path from 'path';
import * as cheerio from 'cheerio';

const BDS_BASE_URL = 'https://bdsc.jupiter.ac';

// Copy-pasted function from src/lib/bds-scraper.ts for testing
function extractVideoUrls(html: string): string[] {
    const urls: Set<string> = new Set();
    const $ = cheerio.load(html);

    let rightVideo: string | null = null;
    let leftVideo: string | null = null;

    // Helper to normalize URL
    const normalizeUrl = (url: string) => {
        if (!url) return '';
        if (!url.startsWith('http')) {
            return `${BDS_BASE_URL}${url.startsWith('/') ? '' : '/'}${url}`;
        }
        return url;
    };

    // 0. Extract from lazy-load script (var node = "...")
    // Handle potential escaped quotes in the string
    const scriptRegex = /var\s+node\s*=\s*"((?:[^"\\]|\\.)*)"/i;
    const scriptMatch = html.match(scriptRegex);
    if (scriptMatch && scriptMatch[1]) {
        console.log('Match found!');
        // Unescape JS string (simple unescape might be enough for typical HTML in JS)
        let innerHtml = scriptMatch[1].replace(/\\"/g, '"').replace(/\\'/g, "'").replace(/\\\//g, '/');
       
        console.log('[VideoDebug] Found lazy-load script content, parsing inner HTML...');
        const $inner = cheerio.load(innerHtml);

        $inner('h3').each((_, el) => {
            const text = $inner(el).text().trim();
            console.log(`Checking header: ${text}`);
            if (text.includes('エンジン音')) {
                const container = $inner(el).closest('.col-sm, .col');
                const videoEl = container.find('video[src], source[src], a[href*=".mp4"]').first();
                const src = videoEl.attr('src') || videoEl.attr('data-src') || videoEl.attr('href');
                console.log(`Src found: ${src}`);

                if (src) {
                    const absUrl = normalizeUrl(src);
                    console.log(`[VideoDebug] Found video via Script extraction for "${text}": ${absUrl}`);
                    if (text.includes('右')) rightVideo = absUrl;
                    else if (text.includes('左')) leftVideo = absUrl;
                    urls.add(absUrl);
                }
            }
        });
    } else {
        console.log('No match for script regex.');
    }

    return Array.from(urls);
}

// Run against the local debug file
const debugFile = path.join(process.cwd(), 'data', 'bds-detail-debug.html');
if (fs.existsSync(debugFile)) {
    console.log(`Reading ${debugFile}...`);
    const html = fs.readFileSync(debugFile, 'utf-8');
    const videos = extractVideoUrls(html);
    console.log('Extracted Videos:', videos);
} else {
    console.error('Debug file not found!');
}
