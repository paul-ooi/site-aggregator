import { describe, it, expect, vi, beforeEach } from 'vitest';
import { RSSSource } from '../../../utils/sources/rssSource';

// Mock rss-parser
vi.mock('rss-parser', () => {
  const MockParser = vi.fn();
  MockParser.prototype.parseURL = vi.fn();
  return { default: MockParser };
});

import Parser from 'rss-parser';

const mockParseURL = vi.mocked(Parser.prototype.parseURL);

beforeEach(() => {
  vi.resetAllMocks();
});

function makeFeed(items: any[], feedOverrides: any = {}) {
  return {
    title: 'Test Feed',
    link: 'https://example.com',
    items,
    ...feedOverrides,
  };
}

describe('RSSSource', () => {
  describe('field mapping resolution', () => {
    it('uses mapped fields when provided', async () => {
      mockParseURL.mockResolvedValue(
        makeFeed([
          {
            customTitle: 'Mapped Title',
            title: 'Default Title',
            link: 'https://example.com/1',
          },
        ])
      );

      const source = new RSSSource('https://feed.com/rss', 'Test', {
        title: 'customTitle',
      });
      const articles = await source.fetchArticles();
      expect(articles[0].title).toBe('Mapped Title');
    });

    it('falls back to defaults when mapped field is empty', async () => {
      mockParseURL.mockResolvedValue(
        makeFeed([
          {
            customTitle: '',
            title: 'Default Title',
            link: 'https://example.com/1',
          },
        ])
      );

      const source = new RSSSource('https://feed.com/rss', 'Test', {
        title: 'customTitle',
      });
      const articles = await source.fetchArticles();
      expect(articles[0].title).toBe('Default Title');
    });

    it('tries array of mapped fields in order', async () => {
      mockParseURL.mockResolvedValue(
        makeFeed([
          {
            altTitle: '',
            customTitle: 'Second Option',
            title: 'Default',
            link: 'https://example.com/1',
          },
        ])
      );

      const source = new RSSSource('https://feed.com/rss', 'Test', {
        title: ['altTitle', 'customTitle'],
      });
      const articles = await source.fetchArticles();
      expect(articles[0].title).toBe('Second Option');
    });
  });

  describe('tag parsing', () => {
    it('parses array categories', async () => {
      mockParseURL.mockResolvedValue(
        makeFeed([
          {
            title: 'Article',
            link: 'https://example.com/1',
            categories: ['a11y', 'wcag', 'testing'],
          },
        ])
      );

      const source = new RSSSource('https://feed.com/rss', 'Test');
      const articles = await source.fetchArticles();
      expect(articles[0].tags).toEqual(['a11y', 'wcag', 'testing']);
    });

    it('parses comma-separated string categories', async () => {
      mockParseURL.mockResolvedValue(
        makeFeed([
          {
            title: 'Article',
            link: 'https://example.com/1',
            categories: 'a11y, wcag, testing',
          },
        ])
      );

      const source = new RSSSource('https://feed.com/rss', 'Test');
      const articles = await source.fetchArticles();
      expect(articles[0].tags).toEqual(['a11y', 'wcag', 'testing']);
    });

    it('filters out Uncategorized tags', async () => {
      mockParseURL.mockResolvedValue(
        makeFeed([
          {
            title: 'Article',
            link: 'https://example.com/1',
            categories: ['a11y', 'Uncategorized', 'testing'],
          },
        ])
      );

      const source = new RSSSource('https://feed.com/rss', 'Test');
      const articles = await source.fetchArticles();
      expect(articles[0].tags).toEqual(['a11y', 'testing']);
    });

    it('handles object categories with name property', async () => {
      mockParseURL.mockResolvedValue(
        makeFeed([
          {
            title: 'Article',
            link: 'https://example.com/1',
            categories: [{ name: 'tag1' }, { name: 'tag2' }],
          },
        ])
      );

      const source = new RSSSource('https://feed.com/rss', 'Test');
      const articles = await source.fetchArticles();
      expect(articles[0].tags).toEqual(['tag1', 'tag2']);
    });
  });

  describe('default fallbacks', () => {
    it('uses feed title as organization', async () => {
      mockParseURL.mockResolvedValue(
        makeFeed(
          [{ title: 'Article', link: 'https://example.com/1' }],
          { title: 'My Feed', link: 'https://example.com' }
        )
      );

      const source = new RSSSource('https://feed.com/rss', 'Fallback Name');
      const articles = await source.fetchArticles();
      expect(articles[0].organization).toBe('My Feed');
    });

    it('uses rssName when feed title is missing', async () => {
      mockParseURL.mockResolvedValue(
        makeFeed(
          [{ title: 'Article', link: 'https://example.com/1' }],
          { title: '', link: 'https://example.com' }
        )
      );

      const source = new RSSSource('https://feed.com/rss', 'Fallback Name');
      const articles = await source.fetchArticles();
      expect(articles[0].organization).toBe('Fallback Name');
    });

    it('sets sourceType to rss', async () => {
      mockParseURL.mockResolvedValue(
        makeFeed([{ title: 'Article', link: 'https://example.com/1' }])
      );

      const source = new RSSSource('https://feed.com/rss', 'Test');
      const articles = await source.fetchArticles();
      expect(articles[0].sourceType).toBe('rss');
    });
  });
});
