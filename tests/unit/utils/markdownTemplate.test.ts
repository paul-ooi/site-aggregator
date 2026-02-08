import { describe, it, expect } from 'vitest';
import { generateContentHash, generateMarkdown, hasMinimumContent } from '../../../utils/markdownTemplate';
import type { Article } from '../../../types/article';

function makeArticle(overrides: Partial<Article> = {}): Article {
  return {
    title: 'Test Article',
    description: 'A test description',
    externalUrl: 'https://example.com/article',
    internalUrl: '',
    source: 'https://example.com',
    organization: 'Example Org',
    repostedDate: '2024-01-15T00:00:00.000Z',
    rawDescriptionHtml: '<p>Hello world</p>',
    ...overrides,
  };
}

describe('generateContentHash', () => {
  it('returns a deterministic MD5 hash', () => {
    const article = makeArticle();
    const hash1 = generateContentHash(article);
    const hash2 = generateContentHash(article);
    expect(hash1).toBe(hash2);
  });

  it('returns a 32-character hex string', () => {
    const hash = generateContentHash(makeArticle());
    expect(hash).toMatch(/^[a-f0-9]{32}$/);
  });

  it('produces different hashes for different content', () => {
    const hash1 = generateContentHash(makeArticle({ title: 'Title A' }));
    const hash2 = generateContentHash(makeArticle({ title: 'Title B' }));
    expect(hash1).not.toBe(hash2);
  });
});

describe('generateMarkdown', () => {
  it('contains YAML frontmatter delimiters', () => {
    const md = generateMarkdown(makeArticle());
    expect(md).toMatch(/^---\n/);
    expect(md).toContain('\n---\n');
  });

  it('includes title, source, organization in frontmatter', () => {
    const md = generateMarkdown(makeArticle());
    expect(md).toContain('title: Test Article');
    expect(md).toContain('source: https://example.com');
    expect(md).toContain('organization: Example Org');
  });

  it('renders tags as YAML list', () => {
    const md = generateMarkdown(makeArticle({ tags: ['a11y', 'wcag'] }));
    expect(md).toContain('tags:\n  - a11y\n  - wcag');
  });

  it('omits tags section when no tags provided', () => {
    const md = generateMarkdown(makeArticle({ tags: [] }));
    expect(md).not.toContain('tags:');
  });

  it('extracts figure elements from rawDescriptionHtml', () => {
    const html = '<figure><img src="https://img.com/photo.jpg" alt="photo"><figcaption>A caption</figcaption></figure><p>Body text</p>';
    const md = generateMarkdown(makeArticle({ rawDescriptionHtml: html }));
    expect(md).toContain('![photo](https://img.com/photo.jpg)');
    expect(md).toContain('*A caption*');
    expect(md).toContain('Body text');
  });

  it('converts HTML body to markdown', () => {
    const html = '<h2>Section</h2><p>Paragraph text</p>';
    const md = generateMarkdown(makeArticle({ rawDescriptionHtml: html }));
    expect(md).toContain('## Section');
    expect(md).toContain('Paragraph text');
  });

  it('escapes double quotes in title for YAML safety', () => {
    const md = generateMarkdown(makeArticle({ title: 'He said "hello"' }));
    expect(md).toContain('title: He said \\"hello\\"');
  });

  it('includes contentHash in frontmatter', () => {
    const md = generateMarkdown(makeArticle());
    expect(md).toMatch(/contentHash: [a-f0-9]{32}/);
  });
});

describe('hasMinimumContent', () => {
  const loremWords = Array(100).fill('word').join(' ');

  it('returns false for undefined rawDescriptionHtml', () => {
    expect(hasMinimumContent(makeArticle({ rawDescriptionHtml: undefined }))).toBe(false);
  });

  it('returns false for empty rawDescriptionHtml', () => {
    expect(hasMinimumContent(makeArticle({ rawDescriptionHtml: '' }))).toBe(false);
  });

  it('returns false for content under 100 words', () => {
    const shortHtml = '<p>Happy holidays from our team! Wishing you a wonderful new year.</p>';
    expect(hasMinimumContent(makeArticle({ rawDescriptionHtml: shortHtml }))).toBe(false);
  });

  it('returns true for content with 100+ words', () => {
    const longHtml = `<p>${loremWords}</p>`;
    expect(hasMinimumContent(makeArticle({ rawDescriptionHtml: longHtml }))).toBe(true);
  });

  it('does not count image-only content toward word count', () => {
    const imageOnlyHtml = '<figure><img src="https://img.com/photo.jpg" alt="photo"><figcaption>A caption</figcaption></figure>';
    expect(hasMinimumContent(makeArticle({ rawDescriptionHtml: imageOnlyHtml }))).toBe(false);
  });

  it('respects custom minWords parameter', () => {
    const html = '<p>one two three four five</p>';
    expect(hasMinimumContent(makeArticle({ rawDescriptionHtml: html }), 5)).toBe(true);
    expect(hasMinimumContent(makeArticle({ rawDescriptionHtml: html }), 6)).toBe(false);
  });
});
