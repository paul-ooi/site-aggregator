import { describe, it, expect } from 'vitest';
import { sanitizeFilename } from '../../../utils/aggregator';

describe('sanitizeFilename', () => {
  it('replaces special characters with hyphens', () => {
    expect(sanitizeFilename('Hello, World!')).toBe('hello--world-');
  });

  it('replaces spaces with hyphens', () => {
    expect(sanitizeFilename('my article title')).toBe('my-article-title');
  });

  it('converts to lowercase', () => {
    expect(sanitizeFilename('MyTitle')).toBe('mytitle');
  });

  it('handles mixed case and special characters', () => {
    expect(sanitizeFilename('Article: A Guide to (Testing)')).toBe('article--a-guide-to--testing-');
  });

  it('returns empty string for empty input', () => {
    expect(sanitizeFilename('')).toBe('');
  });

  it('handles unicode characters', () => {
    expect(sanitizeFilename('café résumé')).toBe('caf--r-sum-');
  });

  it('preserves alphanumeric characters', () => {
    expect(sanitizeFilename('article123')).toBe('article123');
  });
});
