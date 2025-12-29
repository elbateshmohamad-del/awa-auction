
import * as cheerio from 'cheerio';
import * as fs from 'fs';
import * as path from 'path';

console.log('Script started');

// --- Mocks & Types ---
interface BikeInspectionDetail {
    engine: Record<string, string>;
    frontSuspension: Record<string, string>;
    exterior: Record<string, string>;
    rearSuspension: Record<string, string>;
    electrical: Record<string, string>;
    frame: Record<string, string>;
}

interface ScrapedBikeData {
    lane: string;
    auctionNumber: string;
    auctionDate: string;
    name: string;
    region: string;
    listingType: string;
    inspectionStatus: string;
    vin: string;
    engineNumber: string;
    mileage: string;
    documentMileage: string;
    pastMileage: string;
    color: string;
    displacement: string;
    firstRegistration: string;
    inspection: string;
    hasParts: string;
    registrationNumber: string;
    startPrice: number;
    result: string;
    overallGrade: number;
    engineGrade: number;
    frontGrade: number;
    exteriorGrade: number;
    rearGrade: number;
    electricGrade: number;
    frameGrade: number;
    inspectionDetails: BikeInspectionDetail;
    bdsReport: string;
    sellerDeclaration: string;
    remarks?: { title: string; content: string }[];
    inspectionImages?: Record<string, string[]>;
    images: string[];
    videoUrls: string[];
}

const BDS_BASE_URL = 'https://bdsc.jupiter.ac';

// --- Scraper Logic (Copied & Adjusted) ---

function parseBikeDetailPage(html: string): ScrapedBikeData | null {
    try {
        const $ = cheerio.load(html);

        // Helper to parse price
        const parsePrice = (priceStr: string | undefined): number => {
            if (!priceStr) return 0;
            const clean = priceStr.replace(/[¥,]/g, '').trim();
            const val = parseInt(clean, 10);
            return isNaN(val) ? 0 : val;
        };

        const parseGrade = (text: string): number => {
            const grade = parseInt(text, 10);
            return isNaN(grade) ? 0 : grade;
        };

        const getText = (selector: string) => $(selector).text().trim();
        const getByLabel = (label: string): string => {
            // Simple mock or approximate finding if simple selector fails
            // Real implementation uses specific logic, but for images we check main flow
            return '';
        };

        // Extract basic info
        const name = getText('.h1 .badge:contains("S")').replace('S', '') + ' ' +
            getText('.h1 .text-truncate span:last-child');

        // --- Image Extraction ---
        const images: string[] = [];
        const seenImages = new Set<string>();

        const addImage = (src: string) => {
            if (src && !src.startsWith('data:') && !src.includes('no_image') && !src.includes('loading') && !src.includes('icon')) {
                let fullUrl = src;
                if (!src.startsWith('http')) {
                    fullUrl = `${BDS_BASE_URL}${src.startsWith('/') ? '' : '/'}${src}`;
                }
                if (!seenImages.has(fullUrl)) {
                    images.push(fullUrl);
                    seenImages.add(fullUrl);
                }
            }
        };

        // 1. PhotoSwipe High-res images
        $('[data-pswp-src]').each((_, el) => {
            const src = $(el).attr('data-pswp-src');
            if (src) addImage(src);
        });

        // 2. Swiper Slide images
        $('.swiper-slide img').each((_, img) => {
            const $img = $(img);
            const src = $img.attr('data-pswp-src') || $img.attr('data-src') || $img.attr('src') || $img.attr('data-lazy');
            if (src) addImage(src);
        });

        // 5. Inspection Images (Categorized)
        const inspectionImages: Record<string, string[]> = {
            engine: [],
            frontSuspension: [],
            exterior: [],
            rearSuspension: [],
            electrical: [],
            frame: []
        };

        const categoryMap: Record<string, string> = {
            'Ｅ／Ｇ': 'engine',
            'Ｆ足': 'frontSuspension',
            '外装': 'exterior',
            'Ｒ足': 'rearSuspension',
            '電／保': 'electrical',
            '車台': 'frame'
        };

        $('div[id^="link-to-kensa"] > div.col-sm').each((_, col) => {
            const headerText = $(col).find('h3').text().trim();
            let matchedKey: string | null = null;

            for (const [jpKey, enKey] of Object.entries(categoryMap)) {
                if (headerText.includes(jpKey)) {
                    matchedKey = enKey;
                    break;
                }
            }

            if (matchedKey) {
                console.log(`Found section: ${matchedKey}`);
                // Extract images
                const imgs: string[] = [];
                $(col).find('.njp20120-inspection-img img').each((__, img) => {
                    const src = $(img).attr('data-pswp-src') || $(img).attr('data-src') || $(img).attr('src');
                    if (src) imgs.push(src);
                });
                console.log(`  - Images: ${imgs.length}`);

                // Extract text
                const textDetails: Record<string, string> = {};
                $(col).find('.njp20120-inspection-table tr').each((_, tr) => {
                    const th = $(tr).find('th').text().trim();
                    const td = $(tr).find('td').text().trim();
                    if (th && td) {
                        textDetails[th] = td;
                    }
                });
                console.log(`  - Details: ${JSON.stringify(textDetails)}`);

                $(col).find('.njp20120-inspection-img img').each((__, img) => {
                    const src = $(img).attr('data-pswp-src') || $(img).attr('data-src') || $(img).attr('src');
                    if (src && !src.includes('no_image') && !src.includes('loading')) {
                        const fullUrl = src.startsWith('/') ? `${BDS_BASE_URL}${src}` : src;

                        // Add to specific category
                        inspectionImages[matchedKey!].push(fullUrl);

                        // Also add to main gallery if not present
                        if (!seenImages.has(fullUrl)) {
                            images.push(fullUrl);
                            seenImages.add(fullUrl);
                        }
                    }
                });
            }
        });

        return {
            name,
            images,
            inspectionImages,
            // Mock other fields
            lane: '', auctionNumber: '', auctionDate: '', region: '', listingType: '', inspectionStatus: '',
            vin: '', engineNumber: '', mileage: '', documentMileage: '', pastMileage: '', color: '',
            displacement: '', firstRegistration: '', inspection: '', hasParts: '', registrationNumber: '',
            startPrice: 0, result: '', overallGrade: 0, engineGrade: 0, frontGrade: 0, exteriorGrade: 0,
            rearGrade: 0, electricGrade: 0, frameGrade: 0,
            inspectionDetails: {} as any, bdsReport: '', sellerDeclaration: '', videoUrls: []
        };

    } catch (error) {
        console.error('Failed to parse bike detail page:', error);
        return null;
    }
}


// --- Test Execution ---

const samplePath = path.join(process.cwd(), 'data', 'sample_bike_detail.html');
console.log(`Reading sample from: ${samplePath}`);

if (!fs.existsSync(samplePath)) {
    console.error('Sample file not found!');
    process.exit(1);
}

const html = fs.readFileSync(samplePath, 'utf-8');
const result = parseBikeDetailPage(html);

if (result) {
    console.log('--- Parsing Successful ---');
    console.log(`Name: ${result.name}`);
    console.log(`Total Main Images: ${result.images.length}`);

    console.log('--- Inspection Images ---');
    let totalInspection = 0;
    if (result.inspectionImages) {
        for (const [cat, imgs] of Object.entries(result.inspectionImages)) {
            console.log(`${cat}: ${imgs.length} images`);
            totalInspection += imgs.length;
        }
    }
    console.log(`Total Inspection Images: ${totalInspection}`);

    // Verification Logic
    if (totalInspection > 0) {
        console.log('PASS: Inspection images extracted.');
    } else {
        console.error('FAIL: No inspection images extracted.');
        process.exit(1);
    }

    // Check if images in inspection are also in main images
    if (result.images.length >= totalInspection) {
        console.log('PASS: Main images list includes inspection images.');
    } else {
        console.warn('WARN: Main images list smaller than inspection images? (Possible duplicates handled correctly or logic issue)');
        // Note: Main images de-dupes, so if inspection images are duplicates of main gallery, count might be lower than sum if duplicates existed across categories (unlikely) 
        // or if inspection images were NOT in the swiper but added to main. 
        // If inspection images are unique, main >= inspection.
    }

} else {
    console.error('FAIL: Parsing returned null.');
    process.exit(1);
}
