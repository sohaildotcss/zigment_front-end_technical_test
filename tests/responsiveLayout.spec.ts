import { test, expect } from '@playwright/test';

test('Responsive layout', async ({ page }) => {
  await page.goto('/'); // Ensure the correct URL
  await page.waitForLoadState('networkidle'); // Wait for the page to load completely

  // Check layout on desktop
  await page.setViewportSize({ width: 1280, height: 800 });
  const desktopLayout = page.locator('.desktop-layout');
  await desktopLayout.waitFor({ state: 'visible', timeout: 10000 }); // Wait for the element to be visible
  await expect(desktopLayout).toBeVisible();

  // Check layout on mobile
  await page.setViewportSize({ width: 375, height: 667 });
  const mobileLayout = page.locator('.mobile-layout');
  await mobileLayout.waitFor({ state: 'visible', timeout: 10000 }); // Wait for the element to be visible
  await expect(mobileLayout).toBeVisible();
});