import { test, expect } from '@playwright/test';

test('Form validation and submission', async ({ page }) => {
  await page.goto('/'); // Adjust to your app's URL

  const jsonInput = await page.locator('textarea'); // Adjust selector as needed
  await jsonInput.fill(`{
    "title": "Contact Form",
    "fields": [
      {
        "name": "email",
        "label": "Email",
        "type": "email",
        "required": true,
        "validation": {
          "pattern": "^[^@\\s]+@[^@\\s]+\\.[^@\\s]+$",
          "message": "Invalid email format."
        }
      }
    ]
  }`);

  await jsonInput.dispatchEvent('input');

  // Check if the email input exists before filling
  const emailInput = await page.locator('input[name="email"]');
  await expect(emailInput).toBeVisible(); // Ensure the input is visible
  await emailInput.fill('invalid-email'); // Invalid email
  await page.click('button[type="submit"]'); // Adjust selector as needed

  // Check for error message
  const errorMessage = await page.locator('.error-message'); // Adjust selector as needed
  await expect(errorMessage).toHaveText('Invalid email format.');
}); 