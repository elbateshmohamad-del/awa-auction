/**
 * BDS Scraper Library
 * Handles scraping bike data from BDS auction site
 * 
 * Note: This requires proper authentication with BDS.
 */

import { Bike, getAllBikes, addBike, updateBike, ImportLog, BikeInspectionDetail, convertGradeToAWA } from './bike-database';
import { detectMaker } from './maker-detection';
import * as cheerio from 'cheerio';
import * as fs from 'fs';
import * as path from 'path';
import * as https from 'https';
import * as crypto from 'crypto';

interface MakerDetectionResult {
    maker: string;
    confidence: 'high' | 'medium' | 'low';
}

// ... (rest of imports/interfaces)

// Create an agent that allows legacy server connect (renegotiation)
const httpsAgent = new https.Agent({
    secureOptions: crypto.constants.SSL_OP_LEGACY_SERVER_CONNECT || 0x4,
    rejectUnauthorized: false
});


export const SETTINGS_FILE = path.join(process.cwd(), 'data', 'bds-settings.json');
export const BDS_BASE_URL = 'https://bdsc.jupiter.ac';


interface BDSSettings {
    username: string;
    password: string;
}

interface BDSBikeListItem {
    id: string;
    detailUrl: string;
    name: string;
    inspectionStatus: string;
}

interface ScrapedBikeData {
    // Header info
    lane: string;
    auctionNumber: string;
    auctionDate: string;
    name: string;
    region: string;
    listingType: string;
    inspectionStatus: string;
    // Basic specs
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
    // Grades
    overallGrade: number;
    engineGrade: number;
    frontGrade: number;
    exteriorGrade: number;
    rearGrade: number;
    electricGrade: number;
    frameGrade: number;
    // Inspection details
    inspectionDetails: BikeInspectionDetail;
    // Additional
    bdsReport: string;
    sellerDeclaration: string;
    remarks?: { title: string; content: string }[];
    inspectionImages?: Bike['inspectionImages']; // Reuse type from Bike
    images: string[];
    videoUrls: string[];
}

// Custom request helper to handle legacy SSL and Redirects
export async function requestBDS(initialUrl: string, options: any = {}): Promise<{ text: () => Promise<string>, status: number, headers: any, finalCookies: string }> {
    const DEBUG_LOG = path.join(process.cwd(), 'data', 'bds-debug.log');

    // Default headers similar to GAS script
    const defaultHeaders = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
        'Accept-Language': 'ja,en-US;q=0.9,en;q=0.8'
    };

    let currentUrl = initialUrl;
    let method = options.method || 'GET';
    let requestHeaders = { ...defaultHeaders, ...(options.headers || {}) };
    let requestBody = options.body;

    const maxRedirects = 5;

    for (let hop = 0; hop < maxRedirects; hop++) {
        try {
            const result = await new Promise<{ text: () => Promise<string>, status: number, headers: any, bodyAttr: string, finalCookies: string }>((resolve, reject) => {
                const urlObj = new URL(currentUrl);
                const reqOptions = {
                    method: method,
                    headers: requestHeaders,
                    agent: httpsAgent,
                    rejectUnauthorized: false
                };

                const req = https.request(currentUrl, reqOptions, (res) => {
                    const chunks: any[] = [];
                    res.on('data', (d) => chunks.push(d));
                    res.on('end', () => {
                        const body = Buffer.concat(chunks).toString();
                        resolve({
                            status: res.statusCode || 0,
                            headers: res.headers,
                            text: async () => body,
                            bodyAttr: body,
                            finalCookies: ''
                        });
                    });
                });

                req.on('error', (e) => reject(e));

                if (requestBody) {
                    req.write(requestBody.toString());
                }
                req.end();
            });

            // Handle Redirects
            if (result.status >= 300 && result.status < 400 && result.headers.location) {
                // Update URL
                const location = result.headers.location;
                currentUrl = new URL(location, currentUrl).href;

                // Update cookies if present (simple merge)
                if (result.headers['set-cookie']) {
                    const newCookies = result.headers['set-cookie'].map((c: string) => c.split(';')[0]).join('; ');
                    const existingCookie = requestHeaders['Cookie'] || requestHeaders['cookie'] || '';
                    requestHeaders['Cookie'] = existingCookie ? `${existingCookie}; ${newCookies}` : newCookies;
                }

                // Redirects change POST to GET usually (301, 302, 303)
                if (result.status === 301 || result.status === 302 || result.status === 303) {
                    method = 'GET';
                    requestBody = undefined;
                    // Remove Content-Type/Length for GET
                    delete requestHeaders['Content-Type'];
                    delete requestHeaders['Content-Length'];
                    delete requestHeaders['content-type'];
                    delete requestHeaders['content-length'];
                }

                fs.appendFileSync(DEBUG_LOG, `Redirecting [${result.status}] to: ${currentUrl}\n`);
                continue;
            }

            // Return result with final cookies
            result.finalCookies = requestHeaders['Cookie'] || requestHeaders['cookie'] || '';
            return result;

        } catch (error) {
            throw error;
        }
    }

    throw new Error(`Too many redirects (${maxRedirects})`);
}

export function getSettings(): BDSSettings | null {
    try {
        if (fs.existsSync(SETTINGS_FILE)) {
            const data = JSON.parse(fs.readFileSync(SETTINGS_FILE, 'utf-8'));
            if (data.username && data.password) {
                return {
                    username: data.username,
                    password: data.password
                };
            }
        }
    } catch (e) {
        console.error('Failed to read BDS settings:', e);
    }
    return null;
}

/**
 * Login to BDS and get session cookies
 */
export async function loginToBDS(settings: BDSSettings): Promise<string | null> {
    const DEBUG_LOG = path.join(process.cwd(), 'data', 'bds-debug.log');

    try {
        fs.writeFileSync(DEBUG_LOG, `Thinking... Fetching root page: ${BDS_BASE_URL}\n`);

        // 1. Get root page to extract token and cookies
        const rootResponse = await requestBDS(BDS_BASE_URL);
        const rootHtml = await rootResponse.text();

        // Initial cookies might be needed (AntiCipher etc)
        const initialCookies = rootResponse.headers['set-cookie'];
        const cookieHeader = initialCookies ? initialCookies.join('; ') : '';

        const $ = cheerio.load(rootHtml);

        fs.writeFileSync(path.join(process.cwd(), 'data', 'bds-root.html'), rootHtml);
        fs.appendFileSync(DEBUG_LOG, `Saved root HTML to data/bds-root.html\n`);

        const tokenInput = $('input[name="__RequestVerificationToken"]');
        fs.appendFileSync(DEBUG_LOG, `Token Input found: ${tokenInput.length}\n`);

        const token = tokenInput.val() || '';

        fs.appendFileSync(DEBUG_LOG, `Token found: ${token ? 'YES' : 'NO'}\n`);
        fs.appendFileSync(DEBUG_LOG, `Initial Cookies: ${cookieHeader}\n`);

        if (!token) {
            console.error('BDS login failed: No verification token found');
            return null;
        }

        // 2. Perform login request
        fs.appendFileSync(DEBUG_LOG, `Attempting login POST to ${BDS_BASE_URL} with user ${settings.username}\n`);

        const loginData = new URLSearchParams({
            member: settings.username,
            pas: settings.password,
            __RequestVerificationToken: token as string
        }).toString();

        const loginResponse = await requestBDS(BDS_BASE_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Cookie': cookieHeader
            },
            body: loginData
        });

        fs.appendFileSync(DEBUG_LOG, `Login Status: ${loginResponse.status}\n`);

        // 3. Extract session cookie
        // Prioritize finalCookies which contains the accumulated cookies from redirects
        if (loginResponse.finalCookies && loginResponse.finalCookies.length > 0) {
            fs.appendFileSync(DEBUG_LOG, `Login successful. Using accumulated cookies.\n`);
            return loginResponse.finalCookies;
        }

        const setCookieHeaders = loginResponse.headers['set-cookie'];
        if (!setCookieHeaders) {
            fs.appendFileSync(DEBUG_LOG, `Login failed: No Set-Cookie received and no accumulated cookies.\n`);
            return null;
        }

        const newCookies = setCookieHeaders.join('; ');
        fs.appendFileSync(DEBUG_LOG, `Login Response Cookies: ${newCookies.substring(0, 50)}...\n`);

        // Merge cookies
        let mergedCookies = cookieHeader;
        if (mergedCookies && !mergedCookies.endsWith('; ')) mergedCookies += '; ';
        mergedCookies += newCookies;

        fs.appendFileSync(DEBUG_LOG, `Merged Cookies: ${mergedCookies.substring(0, 50)}...\n`);

        return mergedCookies;

    } catch (error) {
        fs.appendFileSync(DEBUG_LOG, `ERROR: ${error}\n`);
        console.error('BDS login failed:', error);
        return null;
    }
}

/**
 * Fetch bike list page from BDS
 */
export async function fetchBikeListPage(settings: BDSSettings, sessionCookie: string): Promise<BDSBikeListItem[]> {
    const DEBUG_LOG = path.join(process.cwd(), 'data', 'bds-debug.log');

    try {
        // Fetch Search Page
        const listUrl = `${BDS_BASE_URL}/NJP20/NJP20202`;
        fs.appendFileSync(DEBUG_LOG, `Fetching search page from: ${listUrl}\n`);

        const response = await requestBDS(listUrl, {
            headers: { 'Cookie': sessionCookie },
        });

        const html = await response.text();
        fs.writeFileSync(path.join(process.cwd(), 'data', 'bds-search.html'), html);

        const $ = cheerio.load(html);

        // Parse bike list
        const bikes: BDSBikeListItem[] = [];

        $('tbody tr').each((_, element) => {
            const $row = $(element);

            // Link with text (avoid image link)
            const detailLink = $row.find('a[href*="/NJP20/NJP2012B"]').filter((i, el) => $(el).text().trim().length > 0).first();
            const detailUrl = detailLink.attr('href');
            const id = detailLink.text().trim();
            const name = $row.find('td[asp-correction]').text().trim();
            const inspectionStatus = $row.find('.badge-secondary').text().trim() || 'Unknown';

            if (id && detailUrl && name) {
                bikes.push({
                    id,
                    detailUrl,
                    name,
                    inspectionStatus
                });
                fs.appendFileSync(DEBUG_LOG, `Found Bike: ${id} - ${name}\n`);
            }
        });

        return bikes;

    } catch (error) {
        console.error('Failed to fetch bike list:', error);
        return [];
    }
}


/**
 * Parse bike detail page HTML
 */
/**
 * Parse bike detail page HTML
 */
export function parseBikeDetailPage(html: string, bdsId: string = '', auctionDate: string = ''): ScrapedBikeData | null {
    try {
        const $ = cheerio.load(html);

        // Helper to get text by label (robust version)
        const getByLabel = (label: string): string => {
            const th = $(`th:contains("${label}")`);
            if (th.length) {
                return th.next('td').text().trim();
            }
            return '';
        };

        // Helper to parse price
        const parsePrice = (text: string): number => {
            if (!text) return 0;
            const match = text.replace(/[,¥]/g, '').match(/\d+/);
            return match ? parseInt(match[0], 10) : 0;
        };

        // Helper to parse grade
        const parseGrade = (text: string): number => {
            const grade = parseInt(text, 10);
            return isNaN(grade) ? 0 : grade;
        };

        // Helper to extract text from a selector
        const getText = (selector: string) => $(selector).text().trim();

        // Extract basic info
        const name = getText('.h1 .badge:contains("S")').replace('S', '') + ' ' +
            getText('.h1 .text-truncate span:last-child');

        // If name contains ｵｼﾗｾ (Announcement), return null to skip
        if (name.includes('ｵｼﾗｾ') || name.includes('お知らせ')) {
            return null;
        }

        const makerInfo = detectMaker(name);

        // --- Image Extraction ---
        const images: string[] = [];
        const seenImages = new Set<string>();

        // Helper to add image to lists
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

        // 1. PhotoSwipe High-res images (priority)
        $('[data-pswp-src]').each((_, el) => {
            const src = $(el).attr('data-pswp-src');
            if (src) addImage(src);
        });

        // 2. Swiper Slide images
        $('.swiper-slide img').each((_, img) => {
            const $img = $(img);
            // Try all possible source attributes including lazy loaded ones
            const src = $img.attr('data-pswp-src') || $img.attr('data-src') || $img.attr('src') || $img.attr('data-lazy');
            if (src) addImage(src);
        });

        // 3. Any other large images in the gallery container
        $('.gallery img, .photos img, figure img').each((_, img) => {
            const $img = $(img);
            const src = $img.attr('data-src') || $img.attr('src');
            if (src) addImage(src);
        });

        // 4. Capture linked images (often used for high-res popups)
        $('a[href]').each((_, a) => {
            const href = $(a).attr('href') || '';
            if (href.match(/\.(jpg|jpeg|png|webp)$/i)) {
                // Check if it's inside a main content area to avoid incidental UI icons
                if ($(a).parents('.container, .main, #main').length) {
                    addImage(href);
                }
            }
        });

        // 5. Inspection Images (Categorized)
        const inspectionImages: Bike['inspectionImages'] = {
            engine: [],
            frontSuspension: [],
            exterior: [],
            rearSuspension: [],
            electrical: [],
            frame: []
        };

        const categoryMap: Record<string, keyof typeof inspectionImages> = {
            'Ｅ／Ｇ': 'engine',
            'Ｆ足': 'frontSuspension',
            '外装': 'exterior',
            'Ｒ足': 'rearSuspension',
            '電／保': 'electrical',
            '車台': 'frame'
        };

        const inspectionDetailsMap: Bike['inspectionDetails'] = {
            engine: {},
            frontSuspension: {},
            exterior: {},
            rearSuspension: {},
            electrical: {},
            frame: {}
        };

        // Select all col-sm inside any element whose ID starts with "link-to-kensa"
        // BDS often splits "link-to-kensa", "link-to-kensa2", "link-to-kensa3" etc.
        $('div[id^="link-to-kensa"] > div.col-sm').each((_, col) => {
            const headerText = $(col).find('h3').text().trim();
            // Header text might be like "Ｅ／Ｇ :5", so we just look for the key
            let matchedKey: keyof typeof inspectionImages | null = null;

            for (const [jpKey, enKey] of Object.entries(categoryMap)) {
                if (headerText.includes(jpKey)) {
                    matchedKey = enKey;
                    break;
                }
            }

            if (matchedKey) {
                $(col).find('.njp20120-inspection-img img').each((__, img) => {
                    const src = $(img).attr('data-pswp-src') || $(img).attr('data-src') || $(img).attr('src');
                    if (src && !src.includes('no_image') && !src.includes('loading')) {
                        const fullUrl = src.startsWith('/') ? `${BDS_BASE_URL}${src}` : src;

                        // Add to specific category
                        inspectionImages[matchedKey as keyof typeof inspectionImages].push(fullUrl);

                        // Also add to main gallery if not present (User wanted "all images")
                        if (!seenImages.has(fullUrl)) {
                            images.push(fullUrl);
                            seenImages.add(fullUrl);
                        }
                    }
                });

                // Extract Inspection Text Details (Table)
                const textDetails: Record<string, string> = {};
                $(col).find('.njp20120-inspection-table tr').each((_, tr) => {
                    const th = $(tr).find('th').text().trim();
                    const td = $(tr).find('td').text().trim();
                    if (th && td) {
                        textDetails[th] = td;
                    }
                });

                // Add to inspectionDetails
                // We need to initialize inspectionDetails if not present in ScrapedBikeData, 
                // but ScrapedBikeData interface already has it.
                // We just need to ensure `details` object is populated.
                // Note: We need a local variable to hold these details before constructing the final object,
                // or we update a local details object.
                // Let's create a local `inspectionDetailsMap` similar to `inspectionImages`.
                if (Object.keys(textDetails).length > 0) {
                    inspectionDetailsMap[matchedKey as keyof typeof inspectionImages] = textDetails;
                }
            }
        });

        // --- Video Extraction ---
        const videoUrls = extractVideoUrls(html);

        // Parse Grades
        // Table ID: link-to-hyouka
        const gradeCells = $('#link-to-hyouka tr').eq(1).find('td');
        const grades: Record<string, string> = {};
        const gradeLabels = ['総合', 'Ｅ／Ｇ', 'Ｆ足', '外装', 'Ｒ足', '電／保', '車台'];
        gradeCells.each((idx, el) => {
            if (gradeLabels[idx]) {
                grades[gradeLabels[idx]] = $(el).text().trim();
            }
        });

        // Parse Details table
        const details: Record<string, string> = {};
        $('table.njp20120-table-detail tr').each((_, row) => {
            const $row = $(row);
            const label = $row.find('th').text().trim();
            const value = $row.find('td').text().trim();
            if (label && value) {
                details[label] = value;
            }
        });

        // Inspection Details (structured comments)
        const inspectionDetails: BikeInspectionDetail = {
            engine: {},
            frontSuspension: {},
            exterior: {},
            rearSuspension: {},
            electrical: {},
            frame: {}
        };

        // Loop through h3 headers to find sections
        $('h3').each((_, h3) => {
            const title = $(h3).text().replace(/[\n\r\t:0-9]/g, '').trim(); // Remove score numbers
            const key = categoryMap[title]; // Reuse categoryMap for consistency

            if (key) {
                // Find the table following this h3. 
                // It might be nested in a col or div.
                // Based on HTML: h3 -> div (images) -> table.njp20120-inspection-table
                // Or h3's parent .col-sm -> find table
                const parentCol = $(h3).closest('.col-sm');
                const table = parentCol.find('table.njp20120-inspection-table');

                if (table.length) {
                    table.find('tr').each((__, row) => {
                        const $row = $(row);
                        const label = $row.find('th').text().trim();
                        const value = $row.find('td').text().trim();
                        if (label && value) {
                            inspectionDetails[key][label] = value;
                        }
                    });
                }
            }
        });

        const scrapedData: ScrapedBikeData = {
            lane: getText('.badge-lane-a').replace('A', '') || getByLabel('レーン') || '',
            auctionNumber: getText('.h1 span:contains("A") + span') || getByLabel('出品番号') || '',
            auctionDate: getText('.h1 td.text-right').split('（')[0].trim() || getByLabel('オークション日') || auctionDate, // 2024年...
            name,
            region: getText('.badge-outline-dark') || getByLabel('地域'),
            listingType: getText('.badge-secondary:first') || getByLabel('出品種別'),
            inspectionStatus: getText('.badge-lane-b') || getByLabel('検査状態'),
            vin: details['車台番号'] || getByLabel('車台番号') || '',
            engineNumber: details['ｴﾝｼﾞﾝ型式'] || getByLabel('ｴﾝｼﾞﾝ型式') || '',
            mileage: details['走行距離'] || getByLabel('走行距離') || '',
            documentMileage: details['書類距離'] || getByLabel('書類距離') || '',
            pastMileage: details['過去距離'] || getByLabel('過去距離') || '',
            color: details['色'] || getByLabel('色') || '',
            displacement: details['排気量'] || getByLabel('排気量') || '',
            firstRegistration: details['初年度'] || getByLabel('初年度') || '',
            inspection: details['車検・保険'] || getByLabel('車検・保険') || '',
            hasParts: details['パーツ有無'] || getByLabel('パーツ有無') || 'なし',
            registrationNumber: details['登録番号'] || getByLabel('登録番号') || '',
            startPrice: parsePrice(details['ｽﾀｰﾄ価格'] || details['スタート価格'] || getByLabel('ｽﾀｰﾄ価格')),
            result: getText('.icon-result') || getByLabel('結果') || '', // Often dynamically loaded, might be empty

            // Grades
            overallGrade: parseGrade(grades['総合']),
            engineGrade: parseGrade(grades['Ｅ／Ｇ']),
            frontGrade: parseGrade(grades['Ｆ足']),
            exteriorGrade: parseGrade(grades['外装']),
            rearGrade: parseGrade(grades['Ｒ足']),
            electricGrade: parseGrade(grades['電／保']),
            frameGrade: parseGrade(grades['車台']),

            // Details & Reports
            inspectionDetails,
            bdsReport: getText('.row:contains("BDS報告") + .row .col-sm:first p') || $('h2:contains("BDS報告")').next('p').text().trim(),
            sellerDeclaration: getText('.row:contains("出品店申告") p') || $('h2:contains("出品店申告")').next('p').text().trim(),

            images,
            inspectionImages, // Added categorized images
            videoUrls,
            remarks: [], // Populated below
        };

        // Populate remarks with any other text sections found
        $('h3, h4, .card-header').each((_, el) => {
            const title = $(el).text().trim();
            // Skip headers we already processed
            if (Object.keys(categoryMap).some(k => title.includes(k)) ||
                title.includes('BDS報告') ||
                title.includes('出品店申告') ||
                !title) {
                return;
            }

            // Get content
            const content = $(el).next().text().trim();
            if (content && content.length > 2 && content.length < 1000) { // Reasonable length limits
                scrapedData.remarks?.push({ title, content });
            }
        });

        return scrapedData;
    } catch (error) {
        console.error('Failed to parse bike detail page:', error);
        return null;
    }
}

/**
 * Convert scraped data to Bike object
 */
function convertToBike(bdsId: string, scraped: ScrapedBikeData): Bike {
    const makerResult = detectMaker(scraped.name);

    return {
        id: `awa-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
        bdsId,
        lane: scraped.lane,
        auctionNumber: scraped.auctionNumber,
        auctionDate: scraped.auctionDate,
        name: scraped.name,
        maker: makerResult.maker,
        makerConfirmed: makerResult.confidence === 'high',
        region: scraped.region,
        inspectionStatus: scraped.inspectionStatus,
        listingType: scraped.listingType,
        vin: scraped.vin,
        engineNumber: scraped.engineNumber,
        mileage: scraped.mileage,
        documentMileage: scraped.documentMileage,
        pastMileage: scraped.pastMileage,
        color: scraped.color,
        displacement: scraped.displacement,
        firstRegistration: scraped.firstRegistration,
        inspection: scraped.inspection,
        hasParts: scraped.hasParts,
        registrationNumber: scraped.registrationNumber,
        startPrice: scraped.startPrice,
        result: scraped.result,
        overallGrade: scraped.overallGrade,
        engineGrade: scraped.engineGrade,
        frontGrade: scraped.frontGrade,
        exteriorGrade: scraped.exteriorGrade,
        rearGrade: scraped.rearGrade,
        electricGrade: scraped.electricGrade,
        frameGrade: scraped.frameGrade,
        awaGrade: convertGradeToAWA(scraped.overallGrade),
        inspectionDetails: scraped.inspectionDetails,
        awaReport: scraped.bdsReport, // Rename BDS報告 to AWA報告
        sellerDeclaration: scraped.sellerDeclaration,
        remarks: scraped.remarks || [],
        inspectionImages: scraped.inspectionImages,
        images: scraped.images,
        videoUrls: scraped.videoUrls,
        importedAt: new Date().toISOString(),
        status: 'active',
    };
}

export interface ImportResult {
    success: boolean;
    imported: Bike[];
    skipped: number;
    errors: string[];
}

/**
 * Main import function - scrapes BDS and returns bikes
 * @param maxBikes Maximum number of bikes to import (default 5 for testing)
 */

/**
 * Download a file from BDS to local path
 */
async function downloadBDSFile(url: string, destPath: string, sessionCookie: string): Promise<boolean> {
    const DEBUG_LOG = path.join(process.cwd(), 'data', 'bds-debug.log');

    return new Promise((resolve, reject) => {
        try {
            const file = fs.createWriteStream(destPath);
            const urlObj = new URL(url);

            const options = {
                method: 'GET',
                headers: {
                    'Cookie': sessionCookie,
                    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
                },
                agent: httpsAgent,
                rejectUnauthorized: false
            };

            const req = https.request(url, options, (res) => {
                if (res.statusCode && res.statusCode >= 400) {
                    fs.appendFileSync(DEBUG_LOG, `Download failed: ${res.statusCode} for ${url}\n`);
                    file.close();
                    fs.unlink(destPath, () => { }); // Delete partial file
                    resolve(false);
                    return;
                }

                res.pipe(file);

                file.on('finish', () => {
                    file.close();
                    resolve(true);
                });
            });

            req.on('error', (err) => {
                fs.appendFileSync(DEBUG_LOG, `Download error: ${err.message} for ${url}\n`);
                fs.unlink(destPath, () => { });
                resolve(false);
            });

            req.end();

        } catch (error) {
            fs.appendFileSync(DEBUG_LOG, `Download exception: ${error} for ${url}\n`);
            resolve(false);
        }
    });
}

/**
 * Extract video URLs from HTML
 */
export function extractVideoUrls(html: string): string[] {
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
        // Unescape JS string (simple unescape might be enough for typical HTML in JS)
        let innerHtml = scriptMatch[1].replace(/\\"/g, '"').replace(/\\'/g, "'").replace(/\\\//g, '/');
        // Handle unicode escapes if any (though usually not present in this specific pattern)
        // innerHtml = innerHtml.replace(/\\u[\dA-F]{4}/gi, (match) => String.fromCharCode(parseInt(match.replace(/\\u/g, ''), 16)));

        console.log('[VideoDebug] Found lazy-load script content, parsing inner HTML...');
        const $inner = cheerio.load(innerHtml);

        $inner('h3').each((_, el) => {
            const text = $inner(el).text().trim();
            if (text.includes('エンジン音')) {
                const container = $inner(el).closest('.col-sm, .col');
                const videoEl = container.find('video[src], source[src], a[href*=".mp4"]').first();
                const src = videoEl.attr('src') || videoEl.attr('data-src') || videoEl.attr('href');

                if (src) {
                    const absUrl = normalizeUrl(src);
                    console.log(`[VideoDebug] Found video via Script extraction for "${text}": ${absUrl}`);
                    if (text.includes('右')) rightVideo = absUrl;
                    else if (text.includes('左')) leftVideo = absUrl;
                    urls.add(absUrl);
                }
            }
        });
    }

    // 1. Context-based extraction (Right/Left) from main HTML (fallback)
    $('h3').each((_, el) => {
        const text = $(el).text().trim();
        if (text.includes('エンジン音')) {
            console.log(`[VideoDebug] Found Engine Sound Header: "${text}"`);
            const container = $(el).closest('.col-sm, .col');
            const videoEl = container.find('video, source, a[href*=".mp4"]').first();
            const src = videoEl.attr('src') || videoEl.attr('data-src') || videoEl.attr('href');

            if (src) {
                console.log(`[VideoDebug] Found video source for "${text}": ${src}`);
                if (text.includes('右')) rightVideo = normalizeUrl(src);
                else if (text.includes('左')) leftVideo = normalizeUrl(src);
            } else {
                console.log(`[VideoDebug] No video element found near header "${text}"`);
                // Dump inner HTML of container for inspection
                console.log(`[VideoDebug] Container HTML: ${container.html()?.substring(0, 200)}...`);
            }
        }
    });

    // 2. Collect all unique video URLs
    const collect = (selector: string, attr: string) => {
        $(selector).each((_, el) => {
            const val = $(el).attr(attr);
            if (val) {
                console.log(`[VideoDebug] Collected via selector ${selector}[${attr}]: ${val}`);
                urls.add(normalizeUrl(val));
            }
        });
    };

    collect('video', 'src');
    collect('video', 'data-src');
    collect('source', 'src');
    collect('source', 'data-src');
    // Using simple regex check for links
    $('a').each((_, el) => {
        const href = $(el).attr('href');
        if (href && /\.(mp4|webm|mov|m4v|3gp|m3u8)(\?|$)/i.test(href)) {
            urls.add(normalizeUrl(href));
        }
    });

    // Other sources
    const ogVideo = $('meta[property="og:video"]').attr('content');
    if (ogVideo) urls.add(normalizeUrl(ogVideo));

    $('script[type="application/ld+json"]').each((_, el) => {
        try {
            const json = JSON.parse($(el).html() || '{}');
            if (json['@type'] === 'VideoObject' && json.contentUrl) {
                urls.add(normalizeUrl(json.contentUrl));
            }
        } catch (e) { }
    });

    const rawRegex = /(https?:\/\/[^\s"'<>]+\.(?:mp4|webm|mov|m4v|3gp|m3u8))/gi;
    let match;
    while ((match = rawRegex.exec(html)) !== null) {
        urls.add(match[1]); // Already absolute likely
    }

    // 3. Construct ordered list [Right, Left, ...Others]
    const orderedUrls: string[] = [];

    // Add Right if found
    if (rightVideo) {
        orderedUrls.push(rightVideo);
        urls.delete(rightVideo);
    }

    // Add Left if found
    if (leftVideo) {
        orderedUrls.push(leftVideo);
        urls.delete(leftVideo);
    }

    // If we missed either but have others, fill in gaps heuristically if wanted, 
    // BUT safest is just to append the rest.
    // The UI maps index 0 -> Right, index 1 -> Left.
    // So if we found Right but no Left, and we have other videos, the first "other" video will become Left.
    // This is probably desired behavior (assuming the unlabeled one is the other side).

    urls.forEach(url => orderedUrls.push(url));

    return orderedUrls;
}

/**
 * Main import function - scrapes BDS and returns bikes
 * @param maxBikes Maximum number of bikes to import (default 5 for testing)
 */
export async function importBikesFromBDS(maxBikes: number = 10): Promise<ImportResult> {
    const DEBUG_LOG = path.join(process.cwd(), 'data', 'bds-debug.log');
    try { fs.appendFileSync(DEBUG_LOG, "DEBUG: importBikesFromBDS called\n"); } catch { }

    const settings = getSettings();
    if (!settings || !settings.username || !settings.password) {
        return {
            success: false,
            imported: [],
            skipped: 0,
            errors: ['BDS設定が見つかりません。管理画面の設定ページで接続情報を入力してください。'],
        };
    }

    const result: ImportResult = {
        success: true,
        imported: [],
        skipped: 0,
        errors: [],
    };

    try {
        const sessionCookie = await loginToBDS(settings);
        if (!sessionCookie) {
            return {
                success: false,
                imported: [],
                skipped: 0,
                errors: ['BDSへのログインに失敗しました。認証情報を確認してください。'],
            };
        }

        const bikeList = await fetchBikeListPage(settings, sessionCookie);
        if (bikeList.length === 0) {
            return {
                success: true,
                imported: [],
                skipped: 0,
                errors: ['取り込み可能なバイクが見つかりませんでした。'],
            };
        }

        const bikesToImport = bikeList.slice(0, maxBikes);

        for (let i = 0; i < bikesToImport.length; i++) {
            const bikeItem = bikesToImport[i];

            try {
                const detailUrl = bikeItem.detailUrl.startsWith('http')
                    ? bikeItem.detailUrl
                    : `${BDS_BASE_URL}${bikeItem.detailUrl}`;

                const response = await requestBDS(detailUrl, {
                    headers: { 'Cookie': sessionCookie }
                });
                const html = await response.text();

                if (i === 0) {
                    fs.writeFileSync(path.join(process.cwd(), 'data', 'bds-detail-debug.html'), html);
                }

                const scraped = parseBikeDetailPage(html);

                if (scraped) {
                    const bike = convertToBike(bikeItem.id, scraped);
                    if (!bike.name && bikeItem.name) bike.name = bikeItem.name;

                    const makerDetection = detectMaker(bike.name);
                    bike.maker = makerDetection.maker;
                    bike.makerConfirmed = makerDetection.confidence === 'high';

                    // --- VIDEO PROCESSING START ---
                    const rawVideoUrls = extractVideoUrls(html);
                    if (rawVideoUrls.length > 0) {
                        fs.appendFileSync(DEBUG_LOG, `Found ${rawVideoUrls.length} videos for bike ${bike.id}\n`);

                        const videoDir = path.join(process.cwd(), 'public', 'videos', bike.id);
                        if (!fs.existsSync(videoDir)) {
                            fs.mkdirSync(videoDir, { recursive: true });
                        }

                        const localVideoPaths: string[] = [];

                        // Limit to max 2 videos as requested
                        const videosToProcess = rawVideoUrls.slice(0, 2);

                        for (let v = 0; v < videosToProcess.length; v++) {
                            const vUrl = videosToProcess[v];
                            // Determine extension
                            const ext = vUrl.split('.').pop()?.split(/[?#]/)[0] || 'mp4';
                            const filename = `video_${v + 1}.${ext}`;
                            const destPath = path.join(videoDir, filename);

                            fs.appendFileSync(DEBUG_LOG, `Downloading video: ${vUrl} -> ${destPath}\n`);
                            const success = await downloadBDSFile(vUrl, destPath, sessionCookie);

                            if (success) {
                                localVideoPaths.push(`/videos/${bike.id}/${filename}`);
                            }
                        }

                        bike.videoUrls = localVideoPaths;
                    }
                    // --- VIDEO PROCESSING END ---
                    // --- VIDEO PROCESSING END ---

                    // Add to result
                    result.imported.push(bike);

                    // Add to DB
                    const existingBikes = getAllBikes();
                    if (!existingBikes.some(b => b.bdsId === bike.bdsId)) {
                        addBike(bike);
                    } else {
                        const existing = existingBikes.find(b => b.bdsId === bike.bdsId);
                        if (existing) {
                            updateBike(existing.id, bike);
                        }
                    }

                    // Sleep to be nice
                    await new Promise(r => setTimeout(r, 1000));
                } else {
                    console.warn(`Failed to parse detail for bike ${bikeItem.id}`);
                    result.skipped++;
                    result.errors.push(`バイク ${bikeItem.id} の解析に失敗しました`);
                }

            } catch (err) {
                console.error(`Error importing bike ${bikeItem.id}:`, err);
                result.skipped++;
                result.errors.push(`Error importing bike ${bikeItem.id}: ${err}`);
            }
        }

        return result;

    } catch (error) {
        return {
            success: false,
            imported: [],
            skipped: 0,
            errors: [`取り込み処理中にエラーが発生しました: ${error}`],
        };
    }
}

/**
 * Generate mock bikes for testing when BDS is not accessible
 */
export function generateMockBikes(count: number = 10): Bike[] {
    const mockBikes: Partial<Bike>[] = [
        { name: 'NINJA250-2', vin: 'EX250Y-A36161', startPrice: 280000, overallGrade: 7, color: '黒／緑', displacement: '250cc', mileage: '1,644K' },
        { name: 'YZF-R1M', vin: 'RN65-009876', startPrice: 2100000, overallGrade: 8, color: 'シルバー', displacement: '998cc', mileage: '5,230K' },
        { name: 'CBR1000RR-R', vin: 'SC82-100200', startPrice: 2450000, overallGrade: 6, color: '赤', displacement: '1000cc', mileage: '3,100K' },
        { name: 'GSX-R1000R', vin: 'DM11G-101101', startPrice: 1580000, overallGrade: 5, color: '青／白', displacement: '1000cc', mileage: '8,900K' },
        { name: 'Panigale V4S', vin: 'ZDM1100-334455', startPrice: 3200000, overallGrade: 8, color: '赤', displacement: '1103cc', mileage: '2,100K' },
    ];

    return mockBikes.slice(0, count).map((mock, index) => {
        const makerResult = detectMaker(mock.name || '');
        return {
            id: `awa-mock-${Date.now()}-${index}`,
            bdsId: `BDS-${1000 + index}`,
            lane: String.fromCharCode(65 + index), // A, B, C...
            auctionNumber: String(index + 1).padStart(4, '0'),
            auctionDate: new Date().toISOString().split('T')[0],
            name: mock.name || 'Unknown Bike',
            maker: makerResult.maker,
            makerConfirmed: makerResult.confidence === 'high',
            region: '関東',
            inspectionStatus: '検査済',
            listingType: '定例',
            vin: mock.vin || '',
            engineNumber: mock.vin?.replace('Y-', 'PL') || '',
            mileage: mock.mileage || '0K',
            documentMileage: '',
            pastMileage: '',
            color: mock.color || '',
            displacement: mock.displacement || '',
            firstRegistration: '',
            inspection: '',
            hasParts: 'なし',
            registrationNumber: '',
            startPrice: mock.startPrice || 0,
            result: '',
            overallGrade: mock.overallGrade || 5,
            engineGrade: Math.max(1, (mock.overallGrade || 5) - 1),
            frontGrade: mock.overallGrade || 5,
            exteriorGrade: Math.max(1, (mock.overallGrade || 5) - 2),
            rearGrade: mock.overallGrade || 5,
            electricGrade: Math.min(8, (mock.overallGrade || 5) + 1),
            frameGrade: mock.overallGrade || 5,
            awaGrade: convertGradeToAWA(mock.overallGrade || 5),
            inspectionDetails: {
                engine: {},
                frontSuspension: {},
                exterior: {},
                rearSuspension: {},
                electrical: {},
                frame: {},
            },
            awaReport: 'AWAシステムにより取り込み',
            sellerDeclaration: '',
            remarks: [
                { title: '特記事項', content: '（モック）社外マフラー、フェンダーレスキット装着。ノーマルパーツあり。' },
                { title: '整備備考', content: '（モック）バッテリー交換推奨。タイヤ溝あり。' }
            ],
            inspectionImages: {
                engine: [
                    'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=400&q=80',
                    'https://images.unsplash.com/photo-1558981285-6f0c94958bb6?auto=format&fit=crop&w=400&q=80'
                ],
                frontSuspension: [
                    'https://images.unsplash.com/photo-1558980394-4c7c92998a42?auto=format&fit=crop&w=400&q=80'
                ],
                exterior: [
                    'https://images.unsplash.com/photo-1558981806-ec527fa84f3d?auto=format&fit=crop&w=400&q=80',
                    'https://images.unsplash.com/photo-1558981822-641589ffadce?auto=format&fit=crop&w=400&q=80',
                    'https://images.unsplash.com/photo-1558981359-21a163152a5c?auto=format&fit=crop&w=400&q=80'
                ],
                rearSuspension: [
                    'https://images.unsplash.com/photo-1558981408-db0ecd84c36c?auto=format&fit=crop&w=400&q=80'
                ],
                electrical: [
                    'https://images.unsplash.com/photo-1558980336-b0930dc96f43?auto=format&fit=crop&w=400&q=80'
                ],
                frame: [
                    'https://images.unsplash.com/photo-1558980394-0a06c4631733?auto=format&fit=crop&w=400&q=80'
                ]
            },
            images: [],
            importedAt: new Date().toISOString(),
            status: 'active' as const,
        };
    });
}
