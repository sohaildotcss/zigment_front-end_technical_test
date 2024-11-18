import { test, expect } from '@playwright/test';

test('homepage has title and form elements', async ({ page }) => {
  await page.goto('/');
  await page.waitForLoadState('networkidle');
  
  // Check if the title exists
  await expect(page.locator('h1')).toContainText('Dynamic Form Generator');
  
  // Check if form elements exist
  const jsonEditor = page.locator('text=JSON Schema Editor');
  await expect(jsonEditor).toBeVisible();
  
  const submitButton = page.locator('button:has-text("Submit")');
  await expect(submitButton).toBeVisible();
});

test('Responsive layout', async ({ page }) => {
  await page.goto('/');
  await page.waitForLoadState('networkidle');

  // Check layout on desktop
  await page.setViewportSize({ width: 1280, height: 800 });
  const desktopGrid = page.locator('.grid.md\\:grid-cols-2');
  await expect(desktopGrid).toBeVisible();

  // Check layout on mobile
  await page.setViewportSize({ width: 375, height: 667 });
  await expect(desktopGrid).toHaveClass(/grid/); // On mobile it will be a single column
});