import { test, expect } from '@playwright/test';

test.describe('Machinery Detail', () => {
    test('should view details of a stock item', async ({ page }) => {
        await page.goto('/market');

        // Click first item (grid > link)
        const firstItem = page.locator('.grid > a').first();
        await expect(firstItem).toBeVisible();

        // Navigate
        await firstItem.click();

        // Verify URL pattern
        await expect(page).toHaveURL(/\/market\/.+/);

        // Verify Data - Based on MarketBikeDetail.tsx
        // Price: "Sold Price" section
        await expect(page.getByText(/Sold Price|販売価格/i)).toBeVisible();

        // Year/First Registration: SpecRow with "初年度" or "First Registration"
        // We check for the SpecRow label
        await expect(page.locator('div', { hasText: /^初年度|First Registration$/ })).toBeVisible();

        // Mileage: SpecRow with "走行距離" or "Mileage"
        await expect(page.locator('div', { hasText: /^走行距離|Mileage$/ })).toBeVisible();

        // Verify Gallery
        const mainImage = page.locator('img[alt="Main"]').first();
        await expect(mainImage).toBeVisible();
    });
});
