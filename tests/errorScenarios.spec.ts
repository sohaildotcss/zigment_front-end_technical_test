import { test, expect } from '@playwright/test';

test('Error scenarios', async ({ page }) => {
  await page.goto('/'); // Adjust to your app's URL

  // Simulate an error scenario
  const jsonInput = await page.locator('textarea'); // Adjust selector as needed
  await jsonInput.fill(`{
    "title": "Error Form",
    "fields": [
      {
        "name": "errorField",
        "label": "Error Field",
        "type": "text",
        "required": true
      }
    ]
  }`);

  await jsonInput.dispatchEvent('input');

  // Fill the form without required field
  await page.click('button[type="submit"]'); // Adjust selector as needed

  // Check for error message
  const errorMessage = await page.locator('.error-message'); // Adjust selector as needed
  await expect(errorMessage).toHaveText('This field is required');
}); 