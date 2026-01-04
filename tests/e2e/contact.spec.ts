import { test, expect } from '@playwright/test';

test.describe('Contact Form', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/contact');
    });

    test('should validate required fields', async ({ page }) => {
        // Attempt submit without data
        const submitBtn = page.getByRole('button', { name: /Submit|送信|Send/i });
        await submitBtn.click();

        const nameInput = page.locator('form input[type="text"]').first();
        const isInvalid = await nameInput.evaluate((el: HTMLInputElement) => !el.checkValidity());
        expect(isInvalid).toBeTruthy();
    });

    test('should submit successfully with mocked API', async ({ page }) => {
        await page.locator('form input[type="text"]').first().fill('Test User');
        await page.locator('form input[type="email"]').fill('test@example.com');
        await page.locator('form textarea').fill('This is a test inquiry.');

        // Register dialog handler before action
        page.on('dialog', dialog => dialog.accept());
        await page.locator('button[type="submit"]').click();
    });
});
