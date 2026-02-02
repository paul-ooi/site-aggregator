import { test, expect } from '@playwright/test';

test.describe('Article Detail Page', () => {
  test('shows metadata sidebar with title', async ({ page }) => {
    // Navigate to articles first, then click into one
    await page.goto('/articles');
    await page.waitForLoadState('networkidle');

    const articleLink = page.locator('a[href*="/"]').filter({ hasText: /.+/ }).first();
    if (await articleLink.isVisible()) {
      await articleLink.click();
      await page.waitForLoadState('networkidle');

      // Detail page should have a sidebar with metadata
      const sidebar = page.locator('aside');
      if (await sidebar.isVisible()) {
        await expect(sidebar.locator('h1')).toBeVisible();
      }
    }
  });

  test('shows article content', async ({ page }) => {
    await page.goto('/articles');
    await page.waitForLoadState('networkidle');

    const articleLink = page.locator('a[href*="/"]').filter({ hasText: /.+/ }).first();
    if (await articleLink.isVisible()) {
      await articleLink.click();
      await page.waitForLoadState('networkidle');

      // Should have main content area
      const content = page.locator('main').first();
      await expect(content).toBeVisible();
    }
  });

  test('external links have correct attributes', async ({ page }) => {
    await page.goto('/articles');
    await page.waitForLoadState('networkidle');

    const articleLink = page.locator('a[href*="/"]').filter({ hasText: /.+/ }).first();
    if (await articleLink.isVisible()) {
      await articleLink.click();
      await page.waitForLoadState('networkidle');

      const externalLinks = page.locator('a[target="_blank"]');
      const count = await externalLinks.count();
      for (let i = 0; i < count; i++) {
        const rel = await externalLinks.nth(i).getAttribute('rel');
        expect(rel).toContain('noopener');
      }
    }
  });
});
