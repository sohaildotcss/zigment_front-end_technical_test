import { test, expect } from '@playwright/test';

test('Form validation and submission', async ({ page }) => {
  await page.goto('/'); // Ensure the correct URL
  await page.waitForLoadState('networkidle'); // Wait for the page to load completely

  // Wait for the email input to be present in the DOM
  const emailInput = page.locator('input[name="email"]');
  await emailInput.waitFor({ state: 'visible', timeout: 10000 }); // Wait for the element to be visible
  await expect(emailInput).toBeVisible();

  await emailInput.fill('invalid-email'); // Invalid email
  await page.click('button[type="submit"]'); // Adjust selector as needed
}); 