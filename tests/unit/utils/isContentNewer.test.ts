import { describe, it, expect } from 'vitest';
import { isContentNewer } from '../../../utils/aggregator';
import type { Article } from '../../../types/article';

function makeArticle(publishDate?: string): Article {
  return {
    title: 'Test',
    description: '',
    externalUrl: '',
    internalUrl: '',
    source: '',
    organization: '',
    repostedDate: '',
    rawDescriptionHtml: '',
    publishDate,
  };
}

describe('isContentNewer', () => {
  it('returns true when no lastUpdated provided', async () => {
    expect(await isContentNewer(makeArticle('2024-01-01'))).toBe(true);
  });

  it('returns true when no lastUpdated is undefined', async () => {
    expect(await isContentNewer(makeArticle('2024-01-01'), undefined)).toBe(true);
  });

  it('returns true when article is newer than lastUpdated', async () => {
    expect(
      await isContentNewer(makeArticle('2024-06-01'), '2024-01-01T00:00:00.000Z')
    ).toBe(true);
  });

  it('returns false when article is older than lastUpdated', async () => {
    expect(
      await isContentNewer(makeArticle('2023-01-01'), '2024-01-01T00:00:00.000Z')
    ).toBe(false);
  });

  it('uses current date when publishDate is missing', async () => {
    // With no publishDate, the function uses new Date() which should be newer than a past date
    expect(
      await isContentNewer(makeArticle(undefined), '2020-01-01T00:00:00.000Z')
    ).toBe(true);
  });
});
