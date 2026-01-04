import { test, expect } from '@playwright/test';

test.describe('Navigation and Basic Sanity', () => {
    test('should navigate to main pages without 404', async ({ page }) => {
        // Top Page
        await page.goto('/');
        await expect(page).toHaveTitle(/AWA Auction|アワオークション|Auction/i);

        // Stock List (Market)
        await page.goto('/market');
        await expect(page.locator('h1')).toBeVisible();

        // Contact
        await page.goto('/contact');
        await expect(page.locator('form')).toBeVisible();
    });

    test('should verify responsive layout elements', async ({ page, isMobile }) => {
        await page.goto('/market');

        // Check for grid
        const stockGrid = page.locator('.grid');
        await expect(stockGrid.first()).toBeVisible();
    });
});
