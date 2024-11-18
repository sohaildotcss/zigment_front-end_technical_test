import { test, expect } from '@playwright/test';

test('Error scenarios', async ({ page }) => {
  await page.goto('/'); // Ensure the correct URL
  await page.waitForLoadState('networkidle'); // Wait for the page to load completely

  // Trigger the error scenario (e.g., submit an empty form)
  await page.click('button[type="submit"]'); // Adjust selector as needed

  // Check for error message
  const errorMessage = page.locator('.error-message');
  await errorMessage.waitFor({ state: 'visible', timeout: 10000 }); // Wait for the element to be visible
  await expect(errorMessage).toHaveText('This field is required');
}); 