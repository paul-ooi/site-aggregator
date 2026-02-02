import { test, expect } from '@playwright/test';

test.describe('Home Page', () => {
  test('loads with correct title', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/Site Aggregator/);
  });

  test('displays the main heading', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('h1')).toContainText('Site Aggregator');
  });

  test('navigation is visible', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('nav').first()).toBeVisible();
  });

  test('footer is present', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('footer')).toBeVisible();
  });
});
