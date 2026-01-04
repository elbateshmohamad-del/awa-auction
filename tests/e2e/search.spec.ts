import { test, expect } from '@playwright/test';

test.describe('Search and Filtering', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/market');
    });

    test('should filter by keyword', async ({ page }) => {
        const searchInput = page.locator('input[type="text"]').last();
        await expect(page.locator('.grid > a').first()).toBeVisible();

        const firstItemTitle = await page.locator('.grid > a h3').first().innerText();
        if (firstItemTitle) {
            await searchInput.fill(firstItemTitle.substring(0, 4));
            await expect(page.locator('.grid > a').first()).toContainText(firstItemTitle);
        }
    });

    test('should show no results message when no match', async ({ page }) => {
        await expect(page.locator('.grid > a').first()).toBeVisible();

        const searchInput = page.locator('input').last();
        await searchInput.fill('NON_EXISTENT_MAKER_XYZ_12345');

        // Correct usage of OR locator
        const noRequestsText = page.getByText('No data available', { exact: false });
        const noDataText = page.getByText('データがありません', { exact: false });
        await expect(noRequestsText.or(noDataText)).toBeVisible();
    });
});
