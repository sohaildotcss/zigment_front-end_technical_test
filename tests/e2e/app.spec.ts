import { test, expect } from '@playwright/test';

test('homepage has title and links', async ({ page }) => {
  await page.goto('/');
  await page.waitForLoadState('networkidle');
  
  // Check if the title exists
  await expect(page.locator('h1')).toContainText('Dynamic Form Generator'); // Updated expected title
  
  // Check if the React link exists
  const learnLink = page.locator('text=Learn React'); // Use Playwright's locator
  await page.waitForLoadState('domcontentloaded'); // Ensure DOM is fully loaded
  await learnLink.waitFor({ state: 'visible', timeout: 30000 }); // Increased timeout to 30 seconds
  console.log('Learn React link is visible'); // Debug log
  await expect(learnLink).toBeVisible();
  await expect(learnLink).toHaveAttribute('href', 'https://reactjs.org');
});

test('Responsive layout', async ({ page }) => {
  await page.goto('/'); // Adjust to your app's URL

  // Check layout on desktop
  await page.setViewportSize({ width: 1280, height: 800 });
  const desktopLayout = page.locator('.desktop-layout'); // Adjust selector as needed
  await desktopLayout.waitFor({ state: 'visible', timeout: 15000 }); // Increased timeout
  console.log('Desktop layout is visible'); // Debug log
  await expect(desktopLayout).toBeVisible();

  // Check layout on mobile
  await page.setViewportSize({ width: 375, height: 667 });
  const mobileLayout = page.locator('.mobile-layout'); // Adjust selector as needed
  await mobileLayout.waitFor({ state: 'visible', timeout: 15000 }); // Increased timeout
  console.log('Mobile layout is visible'); // Debug log
  await expect(mobileLayout).toBeVisible();
}); 