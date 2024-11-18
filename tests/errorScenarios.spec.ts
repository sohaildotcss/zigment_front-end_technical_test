import { test, expect } from '@playwright/test';

test('Error scenarios', async ({ page }) => {
  await page.goto('/');
  await page.waitForLoadState('networkidle');

  // Submit the form without filling required fields
  const submitButton = page.locator('button[type="submit"]');
  await submitButton.click();

  // Check for error message - using a more specific selector
  const errorMessage = page.locator('p.text-red-500.text-sm');
  await expect(errorMessage.first()).toBeVisible();
  await expect(errorMessage.first()).toHaveText('This field is required');
  
  // Verify all required fields show error messages
  const errorMessages = await errorMessage.all();
  expect(errorMessages.length).toBeGreaterThan(0);
});