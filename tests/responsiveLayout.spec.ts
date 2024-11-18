import { test, expect } from '@playwright/test';

test('Responsive layout', async ({ page }) => {
  await page.goto('/'); // Adjust to your app's URL

  // Check layout on desktop
  await page.setViewportSize({ width: 1280, height: 800 });
  const desktopLayout = await page.locator('.desktop-layout'); // Adjust selector as needed
  await expect(desktopLayout).toBeVisible();

  // Check layout on mobile
  await page.setViewportSize({ width: 375, height: 667 });
  const mobileLayout = await page.locator('.mobile-layout'); // Adjust selector as needed
  await expect(mobileLayout).toBeVisible();
}); 