import { test, expect } from '@playwright/test';

test('Error scenarios', async ({ page }) => {
  await page.goto('/');
  await page.waitForLoadState('networkidle');

  // Submit the form without filling required fields
  const submitButton = page.locator('button[type="submit"]');
  await submitButton.click();

  // Check for error message - using the actual class from the app
  const errorMessage = page.locator('.text-red-500');
  await expect(errorMessage).toBeVisible();
  await expect(errorMessage).toContainText('This field is required');
});