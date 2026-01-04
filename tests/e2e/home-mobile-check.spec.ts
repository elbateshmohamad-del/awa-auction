
import { test, expect } from '@playwright/test';

test.use({
    viewport: { width: 390, height: 844 },
    userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0 Mobile/15E148 Safari/604.1',
});

test('Home page should render correctly on mobile', async ({ page }) => {
    await page.goto('/ja'); // Use Japanese locale to check the added subtitle

    // Check Hero Section
    const heroTitle = page.locator('h1').first();
    await expect(heroTitle).toBeVisible();
    // We expect the title to be "グローバル貿易を、シンプルに" or similar based on ja.json

    // Check About Section Subtitle (The one we added/fixed)
    const aboutSubtitle = page.getByText('世界中のライダーと日本最高のバイクを繋ぐ').first();
    await expect(aboutSubtitle).toBeVisible();

    // Check Stats
    await expect(page.getByText('5,000+')).toBeVisible();
    await expect(page.getByText('120+')).toBeVisible();

    // Check How It Works
    const step1 = page.getByText('01', { exact: true }).first();
    // Or "AWAの仕組み"
    await expect(page.getByText('AWAの仕組み')).toBeVisible();

    // Verify vertical stacking logic (rough check by order or bounding box if possible, but visibility is good enough for now)
});
