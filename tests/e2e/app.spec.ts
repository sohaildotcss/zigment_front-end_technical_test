import { test, expect } from '@playwright/test';

test('homepage has title and links', async ({ page }) => {
  await page.goto('/');
  
  // Check if the title exists
  await expect(page.locator('h1')).toContainText('Dynamic Form Generator'); // Updated expected title
  
  // Check if the React link exists
  const learnLink = page.locator('text=Learn React'); // Use Playwright's locator
  await expect(learnLink).toBeVisible();
  await expect(learnLink).toHaveAttribute('href', 'https://reactjs.org');
  await expect(learnLink.getAttribute('href')).resolves.toBe('https://reactjs.org');
}); 