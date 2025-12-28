
import * as fs from 'fs';
import * as path from 'path';
import * as cheerio from 'cheerio';

const BDS_BASE_URL = 'https://bdsc.jupiter.ac';

function testImageExtraction(html: string) {
    const $ = cheerio.load(html);
    const images: string[] = [];
    const seenImages = new Set<string>();

    const addImage = (src: string, method: string) => {
        if (src && !src.startsWith('data:') && !src.includes('no_image') && !src.includes('loading') && !src.includes('icon')) {
            let fullUrl = src;
            if (!src.startsWith('http')) {
                fullUrl = `${BDS_BASE_URL}${src.startsWith('/') ? '' : '/'}${src}`;
            }
            if (!seenImages.has(fullUrl)) {
                images.push(fullUrl);
                seenImages.add(fullUrl);
                console.log(`[${method}] Found: ${fullUrl}`);
            }
        }
    };

    // 1. PhotoSwipe High-res
    $('[data-pswp-src]').each((_, el) => {
        addImage($(el).attr('data-pswp-src') || '', 'PhotoSwipe');
    });

    // 2. Swiper Slide
    $('.swiper-slide img').each((_, img) => {
        const $img = $(img);
        const src = $img.attr('data-pswp-src') || $img.attr('data-src') || $img.attr('src') || $img.attr('data-lazy');
        if (src) addImage(src, 'Swiper');
    });

    // 3. Gallery/Photos
    $('.gallery img, .photos img, figure img').each((_, img) => {
        const $img = $(img);
        const src = $img.attr('data-src') || $img.attr('src');
        if (src) addImage(src, 'Gallery');
    });

    // 4. Linked images (often high-res popups)
    $('a[href]').each((_, a) => {
        const href = $(a).attr('href') || '';
        if (href.match(/\.(jpg|jpeg|png|webp)$/i)) {
            addImage(href, 'Link');
        }
    });

    // 5. GENERIC FALLBACK (New Idea)
    // Grab ANY image that looks like a bike photo (usually in /auctiondata/)
    $('img').each((_, img) => {
        const src = $(img).attr('src') || $(img).attr('data-src');
        if (src && src.includes('/auctiondata/') && !src.includes('icon') && !seenImages.has(src)) {
            addImage(src, 'Generic Fallback');
        }
    });

    console.log(`Total Unique Images Found: ${images.length}`);
}

const debugFile = path.join(process.cwd(), 'data', 'bds-detail-debug.html');
if (fs.existsSync(debugFile)) {
    const html = fs.readFileSync(debugFile, 'utf-8');
    testImageExtraction(html);
} else {
    console.error('Debug file not found');
}
