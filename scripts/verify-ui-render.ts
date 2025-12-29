
import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';

const BASE_URL = 'http://localhost:3000';
const SCREENSHOT_DIR = path.join(process.cwd(), 'verification-screenshots');

if (!fs.existsSync(SCREENSHOT_DIR)) {
    fs.mkdirSync(SCREENSHOT_DIR);
}

async function verifyUI() {
    console.log('Starting UI Verification via Puppeteer...');
    const browser = await puppeteer.launch({
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    const page = await browser.newPage();

    // Capture console logs from the browser
    page.on('console', msg => console.log('BROWSER LOG:', msg.text()));
    page.on('pageerror', err => console.error('BROWSER ERROR:', err.toString()));

    try {
        // 1. Login
        console.log(`Navigating to ${BASE_URL}/ja/login...`);
        await page.goto(`${BASE_URL}/ja/login`, { waitUntil: 'networkidle0' });

        console.log('Attempting Login...');
        await page.type('input[type="email"]', 'admin@example.com'); // Depending on your login form selectors
        await page.type('input[type="password"]', 'admin');

        // Find submit button - adjust selector if needed
        const submitBtn = await page.$('button[type="submit"]');
        if (submitBtn) {
            await Promise.all([
                page.waitForNavigation({ waitUntil: 'networkidle0' }),
                submitBtn.click()
            ]);
            console.log('Login Submitted.');
        } else {
            console.error('Login button not found!');
        }

        // 2. Check Admin Detail Page
        const adminUrl = `${BASE_URL}/ja/admin/bikes/awa-1766710191175-u140vwxpm`;
        console.log(`\nVerifying Admin Page: ${adminUrl}`);
        await page.goto(adminUrl, { waitUntil: 'networkidle0' });

        await page.screenshot({ path: path.join(SCREENSHOT_DIR, 'admin_detail.png') });
        const adminTitle = await page.title();
        const adminContent = await page.$eval('body', el => el.innerText.substring(0, 200));
        console.log(`Admin Page Title: ${adminTitle}`);
        console.log(`Admin Page Content Preview: ${adminContent.replace(/\n/g, ' ')}`);

        // 3. Check User Market Page (Authenticated)
        const marketUrl = `${BASE_URL}/ja/market`;
        console.log(`\nVerifying Market Page: ${marketUrl}`);
        await page.goto(marketUrl, { waitUntil: 'networkidle0' });

        await page.screenshot({ path: path.join(SCREENSHOT_DIR, 'market_page.png') });
        const marketTitle = await page.title();
        const marketContent = await page.$eval('body', el => el.innerText.substring(0, 200));
        console.log(`Market Page Title: ${marketTitle}`);
        console.log(`Market Page Content Preview: ${marketContent.replace(/\n/g, ' ')}`);

    } catch (error) {
        console.error('Verification Script Failed:', error);
        await page.screenshot({ path: path.join(SCREENSHOT_DIR, 'error_state.png') });
    } finally {
        await browser.close();
        console.log(`\nVerification complete. Screenshots saved to ${SCREENSHOT_DIR}`);
    }
}

verifyUI();
