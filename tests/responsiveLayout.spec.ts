import { test, expect } from '@playwright/test';

test('Responsive layout', async ({ page }) => {
  await page.goto('/'); // Ensure the correct URL
  await page.waitForLoadState('networkidle'); // Wait for the page to load completely

  // Check layout on desktop
  await page.setViewportSize({ width: 1280, height: 800 });
  const desktopLayout = page.locator('.desktop-layout');


  console.log('Waiting for desktop layout to be visible...'); // Debug log
  await desktopLayout.waitFor({ state: 'visible', timeout: 45000 }); // Increased timeout to 45 seconds
  console.log('Desktop layout is visible'); // Debug log
  await expect(desktopLayout).toBeVisible();

  // Check layout on mobile
  await page.setViewportSize({ width: 375, height: 667 });
  const mobileLayout = page.locator('.mobile-layout');
  await mobileLayout.waitFor({ state: 'visible', timeout: 20000 }); // Increased timeout
  console.log('Mobile layout is visible'); // Debug log
  await expect(mobileLayout).toBeVisible();
});