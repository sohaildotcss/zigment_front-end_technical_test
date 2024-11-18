import { test, expect } from '@playwright/test';

test('homepage has title and links', async ({ page }) => {
  await page.goto('/');
  
  // Check if the title exists
  await expect(page.locator('h1')).toContainText('Your App Name');
  
  // Check if the React link exists
  const learnLink = page.getByText('Learn React');
  await expect(learnLink).toBeVisible();
  await expect(learnLink).toHaveAttribute('href', 'https://reactjs.org');
}); 