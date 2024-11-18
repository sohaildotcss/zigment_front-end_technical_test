import { test, expect } from '@playwright/test';

test('JSON validation', async ({ page }) => {
  await page.goto('/'); // Adjust to your app's URL

  const jsonInput = await page.locator('textarea'); // Adjust selector as needed
  await jsonInput.fill(`{
    "title": "Test Form",
    "fields": [
      {
        "name": "testField",
        "label": "Test Field",
        "type": "text",
        "required": true
      }
    ]
  }`);

  // Simulate a change to trigger validation
  await jsonInput.dispatchEvent('input');

  // Check for no error message
  const errorMessage = await page.locator('.error-message'); // Adjust selector as needed
  await expect(errorMessage).toHaveCount(0);
}); 