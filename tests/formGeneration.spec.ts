import { test, expect } from '@playwright/test';

test('Real-time form generation', async ({ page }) => {
  await page.goto('/'); // Adjust to your app's URL

  const jsonInput = await page.locator('textarea'); // Adjust selector as needed
  await jsonInput.fill(`{
    "title": "Dynamic Form",
    "fields": [
      {
        "name": "dynamicField",
        "label": "Dynamic Field",
        "type": "text",
        "required": true
      }
    ]
  }`);

  // Simulate a change to trigger form generation
  await jsonInput.dispatchEvent('input');

  // Check if the dynamic field is rendered
  const dynamicField = await page.locator('input[name="dynamicField"]'); // Adjust selector as needed
  await expect(dynamicField).toBeVisible();
}); 