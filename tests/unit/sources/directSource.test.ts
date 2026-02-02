import { describe, it, expect, vi, beforeEach } from 'vitest';
import { DirectSource } from '../../../utils/sources/directSource';

vi.mock('axios', () => ({
  default: {
    get: vi.fn(),
  },
}));

import axios from 'axios';

const mockGet = vi.mocked(axios.get);

beforeEach(() => {
  vi.resetAllMocks();
});

function makeHtml(body: string, head: string = ''): string {
  return `<html><head><title>Test Page</title>${head}</head><body>${body}</body></html>`;
}

describe('DirectSource', () => {
  describe('extractTags', () => {
    it('extracts tags from keywords meta tag', async () => {
      mockGet.mockResolvedValue({
        data: makeHtml('', '<meta name="keywords" content="a11y, wcag, testing">'),
      });

      const source = new DirectSource('https://example.com/article');
      const articles = await source.fetchArticles();
      expect(articles[0].tags).toEqual(['a11y', 'wcag', 'testing']);
    });

    it('returns empty array when no keywords meta tag', async () => {
      mockGet.mockResolvedValue({
        data: makeHtml('<p>Content</p>'),
      });

      const source = new DirectSource('https://example.com/article');
      const articles = await source.fetchArticles();
      expect(articles[0].tags).toEqual([]);
    });
  });

  describe('extractOrganization', () => {
    it('extracts organization from copyright footer', async () => {
      mockGet.mockResolvedValue({
        data: makeHtml('<footer><p>© 2024 Acme Corp. All Rights Reserved</p></footer>'),
      });

      const source = new DirectSource('https://example.com/article');
      const articles = await source.fetchArticles();
      expect(articles[0].organization).toContain('Acme Corp');
    });

    it('falls back to hostname when no copyright found', async () => {
      mockGet.mockResolvedValue({
        data: makeHtml('<footer><p>Some text</p></footer>'),
      });

      const source = new DirectSource('https://example.com/article');
      const articles = await source.fetchArticles();
      expect(articles[0].organization).toBe('example.com');
    });
  });

  describe('determineSource', () => {
    it('uses canonical link hostname when available', async () => {
      mockGet.mockResolvedValue({
        data: makeHtml('', '<link rel="canonical" href="https://canonical.com/page">'),
      });

      const source = new DirectSource('https://example.com/article');
      const articles = await source.fetchArticles();
      expect(articles[0].source).toBe('canonical.com');
    });

    it('uses default URL hostname when no canonical', async () => {
      mockGet.mockResolvedValue({
        data: makeHtml('<p>Content</p>'),
      });

      const source = new DirectSource('https://example.com/article');
      const articles = await source.fetchArticles();
      expect(articles[0].source).toBe('example.com');
    });

    it('handles relative canonical links', async () => {
      mockGet.mockResolvedValue({
        data: makeHtml('', '<link rel="canonical" href="/page">'),
      });

      const source = new DirectSource('https://example.com/article');
      const articles = await source.fetchArticles();
      expect(articles[0].source).toBe('example.com');
    });
  });

  describe('extractPublishDate', () => {
    it('extracts date from JSON-LD', async () => {
      const jsonLd = JSON.stringify({
        '@type': 'Article',
        datePublished: '2024-03-15T10:00:00Z',
      });
      mockGet.mockResolvedValue({
        data: makeHtml('', `<script type="application/ld+json">${jsonLd}</script>`),
      });

      const source = new DirectSource('https://example.com/article');
      const articles = await source.fetchArticles();
      expect(articles[0].sourcePublishDate).toBe('2024-03-15T10:00:00.000Z');
    });

    it('extracts date from meta tags', async () => {
      mockGet.mockResolvedValue({
        data: makeHtml('', '<meta property="article:published_time" content="2024-03-15T10:00:00Z">'),
      });

      const source = new DirectSource('https://example.com/article');
      const articles = await source.fetchArticles();
      expect(articles[0].sourcePublishDate).toBe('2024-03-15T10:00:00.000Z');
    });

    it('extracts date from time elements', async () => {
      mockGet.mockResolvedValue({
        data: makeHtml('<time datetime="2024-03-15T10:00:00Z">March 15, 2024</time>'),
      });

      const source = new DirectSource('https://example.com/article');
      const articles = await source.fetchArticles();
      expect(articles[0].sourcePublishDate).toBe('2024-03-15T10:00:00.000Z');
    });

    it('returns undefined when no date found', async () => {
      mockGet.mockResolvedValue({
        data: makeHtml('<p>No date here</p>'),
      });

      const source = new DirectSource('https://example.com/article');
      const articles = await source.fetchArticles();
      expect(articles[0].sourcePublishDate).toBeUndefined();
    });
  });

  describe('normalizeDate via extractPublishDate', () => {
    it('handles relative dates like "3 days ago"', async () => {
      mockGet.mockResolvedValue({
        data: makeHtml('<span class="publish-date">3 days ago</span>'),
      });

      const source = new DirectSource('https://example.com/article');
      const articles = await source.fetchArticles();
      expect(articles[0].sourcePublishDate).toBeDefined();
      // Should be approximately 3 days in the past
      const date = new Date(articles[0].sourcePublishDate!);
      const threeDaysAgo = new Date();
      threeDaysAgo.setDate(threeDaysAgo.getDate() - 3);
      // Allow 1 minute tolerance
      expect(Math.abs(date.getTime() - threeDaysAgo.getTime())).toBeLessThan(60000);
    });

    it('handles standard date formats', async () => {
      mockGet.mockResolvedValue({
        data: makeHtml('<time datetime="2024-06-15">June 15, 2024</time>'),
      });

      const source = new DirectSource('https://example.com/article');
      const articles = await source.fetchArticles();
      expect(articles[0].sourcePublishDate).toBe('2024-06-15T00:00:00.000Z');
    });
  });

  describe('fetchArticles output', () => {
    it('sets sourceType to direct', async () => {
      mockGet.mockResolvedValue({
        data: makeHtml('<p>Content</p>'),
      });

      const source = new DirectSource('https://example.com/article');
      const articles = await source.fetchArticles();
      expect(articles[0].sourceType).toBe('direct');
    });

    it('uses og:title when available', async () => {
      mockGet.mockResolvedValue({
        data: makeHtml('', '<meta property="og:title" content="OG Title">'),
      });

      const source = new DirectSource('https://example.com/article');
      const articles = await source.fetchArticles();
      expect(articles[0].title).toBe('OG Title');
    });

    it('falls back to title tag', async () => {
      mockGet.mockResolvedValue({
        data: makeHtml('<p>Content</p>'),
      });

      const source = new DirectSource('https://example.com/article');
      const articles = await source.fetchArticles();
      expect(articles[0].title).toBe('Test Page');
    });
  });
});
