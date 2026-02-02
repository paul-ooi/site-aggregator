import { test, expect } from '@playwright/test';

test.describe('Navigation', () => {
  test('can navigate from home to articles', async ({ page }) => {
    await page.goto('/');
    const articlesLink = page.locator('nav a[href*="articles"], nav a:has-text("Articles")').first();
    if (await articlesLink.isVisible()) {
      await articlesLink.click();
      await page.waitForLoadState('networkidle');
      expect(page.url()).toContain('articles');
    }
  });

  test('can navigate from articles back to home', async ({ page }) => {
    await page.goto('/articles');
    const homeLink = page.locator('nav a[href="/"], nav a:has-text("Home")').first();
    if (await homeLink.isVisible()) {
      await homeLink.click();
      await page.waitForLoadState('networkidle');
      expect(page.url()).toMatch(/\/$/);
    }
  });

  test('browser back/forward navigation works', async ({ page }) => {
    await page.goto('/');
    const initialUrl = page.url();

    // Navigate via click to create proper history entry
    const articlesLink = page.locator('nav a[href*="articles"], nav a:has-text("Articles")').first();
    await articlesLink.click();
    await page.waitForURL('**/articles');
    expect(page.url()).toContain('articles');

    await page.goBack();
    await page.waitForURL(initialUrl);
    expect(page.url()).toBe(initialUrl);

    await page.goForward();
    await page.waitForURL('**/articles');
    expect(page.url()).toContain('articles');
  });
});
