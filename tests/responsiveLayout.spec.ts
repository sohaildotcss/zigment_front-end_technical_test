import { test, expect } from '@playwright/test';

test('Responsive layout', async ({ page }) => {
  await page.goto('/');
  await page.waitForLoadState('networkidle');

  // Check layout on desktop
  await page.setViewportSize({ width: 1280, height: 800 });
  const gridContainer = page.locator('.grid.md\\:grid-cols-2');
  await expect(gridContainer).toBeVisible();
  
  // Verify two-column layout on desktop
  const columns = page.locator('.grid.md\\:grid-cols-2 > div');
  await expect(columns).toHaveCount(2);

  // Check layout on mobile
  await page.setViewportSize({ width: 375, height: 667 });
  
  // Verify single-column layout on mobile
  await expect(gridContainer).toHaveClass(/grid(?!.*md:grid-cols-2)/);
});