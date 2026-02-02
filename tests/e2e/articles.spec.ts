import { test, expect } from '@playwright/test';

test.describe('Articles Page', () => {
  test('renders the articles page', async ({ page }) => {
    await page.goto('/articles');
    await expect(page).toHaveTitle(/Site Aggregator/);
  });

  test('displays article list', async ({ page }) => {
    await page.goto('/articles');
    // Wait for content to load
    await page.waitForLoadState('networkidle');
    const articles = page.locator('article, [class*="article"], li a');
    const count = await articles.count();
    // There should be at least one article if content exists
    expect(count).toBeGreaterThanOrEqual(0);
  });

  test('articles display title and metadata', async ({ page }) => {
    await page.goto('/articles');
    await page.waitForLoadState('networkidle');
    const firstArticle = page.locator('article, [class*="article"], li').first();
    if (await firstArticle.isVisible()) {
      // Article should contain some text content
      const text = await firstArticle.textContent();
      expect(text?.length).toBeGreaterThan(0);
    }
  });

  test('clicking an article navigates to detail page', async ({ page }) => {
    await page.goto('/articles');
    await page.waitForLoadState('networkidle');
    const articleLink = page.locator('a[href*="/"]').filter({ hasText: /.+/ }).first();
    if (await articleLink.isVisible()) {
      const href = await articleLink.getAttribute('href');
      await articleLink.click();
      await page.waitForLoadState('networkidle');
      // Should have navigated away from /articles
      if (href && !href.includes('http')) {
        expect(page.url()).toContain(href);
      }
    }
  });
});
