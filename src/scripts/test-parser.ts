
import * as fs from 'fs';
import * as path from 'path';
import * as cheerio from 'cheerio';

const BDS_BASE_URL = 'https://bdsc.jupiter.ac';

// Copy of extractVideoUrls from bds-scraper.ts for testing
function extractVideoUrls($: cheerio.CheerioAPI): string[] {
    const urls = new Set<string>();

    const normalizeUrl = (url: string): string => {
        if (!url) return '';
        if (url.startsWith('http')) return url;
        return `${BDS_BASE_URL}${url.startsWith('/') ? '' : '/'}${url}`;
    };

    // Method 1: Direct video/source tags
    $('video source, source[type="video/mp4"]').each((_, el) => {
        const src = $(el).attr('src');
        if (src && src.includes('.mp4')) {
            const absUrl = normalizeUrl(src);
            console.log(`[VideoDebug] Found video via source tag: ${absUrl}`);
            urls.add(absUrl);
        }
    });

    $('video[src]').each((_, el) => {
        const src = $(el).attr('src');
        if (src && src.includes('.mp4')) {
            const absUrl = normalizeUrl(src);
            console.log(`[VideoDebug] Found video via video tag: ${absUrl}`);
            urls.add(absUrl);
        }
    });

    // Method 2: Lazy-loaded script content
    $('script').each((_, el) => {
        const scriptContent = $(el).html();
        if (!scriptContent) return;

        // Check if this script contains video-related content by looking for 'video' element creation
        if (scriptContent.includes('<video') || scriptContent.includes('movie_engine')) {
            console.log(`[VideoDebug] Found script with video content (length: ${scriptContent.length})`);

            // Look for movie_engine paths specifically (most reliable pattern)
            // Pattern: /auctiondata/.../movie_engine/....mp4
            const moviePathRegex = /\/auctiondata\/[^'"\\]+movie_engine\/[^'"\\]+\.mp4/g;
            const movieMatches = scriptContent.match(moviePathRegex);

            if (movieMatches) {
                movieMatches.forEach(url => {
                    const absUrl = normalizeUrl(url);
                    console.log(`[VideoDebug] Found video via movie_engine path: ${absUrl}`);
                    urls.add(absUrl);
                });
            }

            // Also check for any .mp4 files in auctiondata paths
            const mp4PathRegex = /\/auctiondata\/[^'"\\]+\.mp4/g;
            const mp4Matches = scriptContent.match(mp4PathRegex);
            if (mp4Matches) {
                mp4Matches.forEach(url => {
                    const absUrl = normalizeUrl(url);
                    if (!urls.has(absUrl)) {
                        console.log(`[VideoDebug] Found video via mp4 path: ${absUrl}`);
                        urls.add(absUrl);
                    }
                });
            }
        }
    });

    const result = Array.from(urls);
    console.log(`[VideoDebug] Total videos found: ${result.length}`);
    return result;
}

// Test the extraction
function testVideoExtraction(html: string) {
    console.log('=== Testing Video Extraction ===\n');
    const $ = cheerio.load(html);
    const videos = extractVideoUrls($);

    console.log('\n=== Final Result ===');
    console.log('Videos found:', videos);
    return videos;
}

// Test the announcement skip logic
function testAnnouncementSkip(html: string) {
    console.log('\n=== Testing Announcement Skip Logic ===\n');
    const $ = cheerio.load(html);

    // Parse bike name like in bds-scraper.ts
    const rawName = $('.h1 .text-truncate span').last().text().trim();
    console.log(`Raw name extracted: "${rawName}"`);

    // Check if it's an announcement
    if (!rawName || rawName.includes('ｵｼﾗｾ') || rawName.includes('お知らせ') || rawName.trim() === '') {
        console.log('Result: SHOULD BE SKIPPED ✓');
        return true;
    }
    console.log('Result: NOT SKIPPED');
    return false;
}

// Test image extraction
function testImageExtraction(html: string) {
    console.log('\n=== Testing Image Extraction ===\n');
    const $ = cheerio.load(html);
    const images: string[] = [];
    const seenImages = new Set<string>();

    const normalizeUrl = (url: string): string => {
        if (!url) return '';
        if (url.startsWith('http')) return url;
        return `${BDS_BASE_URL}${url.startsWith('/') ? '' : '/'}${url}`;
    };

    const addImage = (src: string, source: string) => {
        if (src && !src.startsWith('data:') && !src.includes('no_image') && !src.includes('loading') && !src.includes('icon')) {
            const fullUrl = normalizeUrl(src);
            if (!seenImages.has(fullUrl)) {
                images.push(fullUrl);
                seenImages.add(fullUrl);
                console.log(`[ImageDebug] Added from ${source}: ${fullUrl}`);
            }
        }
    };

    // Swiper slides - prioritize data-pswp-src, data-src over src
    $('.swiper-slide img').each((_, el) => {
        const dataPswpSrc = $(el).attr('data-pswp-src');
        const dataSrc = $(el).attr('data-src');
        const dataLazy = $(el).attr('data-lazy');
        const src = $(el).attr('src');

        // Priority: data-pswp-src > data-src > data-lazy > src
        if (dataPswpSrc) {
            addImage(dataPswpSrc, 'swiper data-pswp-src');
        } else if (dataSrc) {
            addImage(dataSrc, 'swiper data-src');
        } else if (dataLazy) {
            addImage(dataLazy, 'swiper data-lazy');
        } else if (src && !src.includes('loading') && !src.includes('no_image')) {
            addImage(src, 'swiper src');
        }
    });

    console.log(`\n=== Image Result ===`);
    console.log(`Total images: ${images.length}`);
    images.forEach((img, i) => console.log(`  ${i + 1}. ${img}`));

    return images;
}

// Run tests
const debugFile = path.join(process.cwd(), 'data', 'bds-detail-debug.html');
if (fs.existsSync(debugFile)) {
    const html = fs.readFileSync(debugFile, 'utf-8');
    testAnnouncementSkip(html);
    testVideoExtraction(html);
    testImageExtraction(html);
} else {
    console.error('Debug file not found:', debugFile);
}
