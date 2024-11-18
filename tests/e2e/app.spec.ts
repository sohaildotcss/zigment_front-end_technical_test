import { test, expect } from '@playwright/test';

test('homepage has title and links', async ({ page }) => {
  await page.goto('/');
  await page.waitForLoadState('networkidle');
  
  // Check if the title exists
  await expect(page.locator('h1')).toContainText('Dynamic Form Generator'); // Updated expected title
  
  // Check if the React link exists
  const learnLink = page.locator('text=Learn React'); // Use Playwright's locator
  await learnLink.waitFor({ state: 'visible', timeout: 10000 });
  await expect(learnLink).toBeVisible();
  await expect(learnLink).toHaveAttribute('href', 'https://reactjs.org');
});

test('Responsive layout', async ({ page }) => {
  await page.goto('/'); // Adjust to your app's URL

  // Check layout on desktop
  await page.setViewportSize({ width: 1280, height: 800 });
  const desktopLayout = page.locator('.desktop-layout'); // Adjust selector as needed
  await desktopLayout.waitFor({ state: 'visible', timeout: 10000 }); // Wait for the element to be visible
  await expect(desktopLayout).toBeVisible();

  // Check layout on mobile
  await page.setViewportSize({ width: 375, height: 667 });
  const mobileLayout = page.locator('.mobile-layout'); // Adjust selector as needed
  await mobileLayout.waitFor({ state: 'visible', timeout: 10000 }); // Wait for the element to be visible
  await expect(mobileLayout).toBeVisible();
}); 