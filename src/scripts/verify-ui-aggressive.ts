
import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';

const BASE_URL = 'http://localhost:3000';
const OUT_DIR = path.join(process.cwd(), 'debug_screenshots');

if (!fs.existsSync(OUT_DIR)) {
    fs.mkdirSync(OUT_DIR);
}

async function debugUI() {
    console.log('--- STARTING AGGRESSIVE UI DEBUG ---');
    const browser = await puppeteer.launch({
        headless: true, // Use headless for stability
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    const page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 800 });

    // Capture EVERYTHING - with better message extraction
    page.on('console', async msg => {
        const args = await Promise.all(msg.args().map(arg => arg.jsonValue()));
        console.log(`[BROWSER CONSOLE] ${msg.type()}:`, args.length ? args.join(' ') : msg.text());
    });
    page.on('pageerror', err => console.error(`[BROWSER CRASH] ${err.message}`));
    page.on('requestfailed', req => console.error(`[NETWORK FAIL] ${req.url()} - ${req.failure()?.errorText}`));

    // 1. Login Flow
    try {
        console.log(`Step 1: Navigating to ${BASE_URL}/ja/login`);
        await page.goto(`${BASE_URL}/ja/login`, { waitUntil: 'domcontentloaded' });
        await page.screenshot({ path: path.join(OUT_DIR, '01_login_load.png') });

        console.log('Step 2: Performing Login');
        await page.type('input[type="email"]', 'admin@example.com');
        await page.type('input[type="password"]', 'admin');
        const submitBtn = await page.$('button[type="submit"]');

        if (submitBtn) {
            await Promise.all([
                page.waitForNavigation({ waitUntil: 'networkidle0', timeout: 10000 }),
                submitBtn.click()
            ]);
            console.log('Login Success (Navigation completed)');
        } else {
            console.error('Login submit button NOT FOUND');
        }
        await page.screenshot({ path: path.join(OUT_DIR, '02_post_login.png') });
    } catch (e) {
        console.error('Login flow failed:', e);
    }

    // 2. Test Admin Detail Page
    try {
        const targetUrl = `${BASE_URL}/ja/admin/bikes/awa-1766710191175-u140vwxpm`;
        console.log(`Step 3: Visiting ${targetUrl}`);
        const response = await page.goto(targetUrl, { waitUntil: 'networkidle2', timeout: 15000 });

        console.log(`Response Status: ${response?.status()}`);
        await page.screenshot({ path: path.join(OUT_DIR, '03_admin_detail.png') });

        // Check for specific content
        const bodyText = await page.$eval('body', el => el.innerText);
        if (bodyText.includes('SR400')) {
            console.log('SUCCESS: Found "SR400" in page content.');
        } else {
            console.error('FAILURE: "SR400" NOT FOUND in page content.');
        }

        // Check for client-side error boundaries (React error overlay)
        if (bodyText.includes('Runtime Error') || bodyText.includes('Something went wrong')) {
            console.error('CRITICAL: React Error Overlay detected!');
        }

    } catch (e) {
        console.error('Admin Detail Page Check Failed:', e);
        await page.screenshot({ path: path.join(OUT_DIR, '03_admin_detail_error.png') });
    }

    // 3. Test User Market Page
    try {
        const marketUrl = `${BASE_URL}/ja/market`;
        console.log(`Step 4: Visiting ${marketUrl}`);
        await page.goto(marketUrl, { waitUntil: 'networkidle2', timeout: 15000 });
        await page.screenshot({ path: path.join(OUT_DIR, '04_market_page.png') });

        const marketText = await page.$eval('body', el => el.innerText);
        console.log('Market Page Preview:', marketText.substring(0, 100).replace(/\n/g, ' '));

    } catch (e) {
        console.error('Market Page Check Failed:', e);
    }

    await browser.close();
    console.log(`--- DEBUG COMPLETE. Screenshots in ${OUT_DIR} ---`);
}

debugUI();
