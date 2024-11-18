import { test, expect } from '@playwright/test';

test('Error scenarios', async ({ page }) => {
  await page.goto('/'); // Ensure the correct URL
  await page.waitForLoadState('networkidle'); // Wait for the page to load completely

  // Trigger the error scenario (e.g., submit an empty form)
  await page.click('button[type="submit"]'); // Adjust selector as needed
  await page.waitForTimeout(1000); // Wait for 1 second after submission

  // Check for error message
  const errorMessage = page.locator('.error-message');
  await errorMessage.waitFor({ state: 'visible', timeout: 20000 }); // Increased timeout to 20000
  await expect(errorMessage).toHaveText('This field is required');
}); 