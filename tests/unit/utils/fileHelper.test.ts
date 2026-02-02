import { describe, it, expect, vi, beforeEach } from 'vitest';
import * as fs from 'node:fs';
import { getExistingContentHash, shouldUpdateContent } from '../../../utils/fileHelper';
import type { Article } from '../../../types/article';

vi.mock('node:fs');

const mockArticle: Article = {
  title: 'Test',
  description: '',
  externalUrl: '',
  internalUrl: '',
  source: '',
  organization: '',
  repostedDate: '',
  rawDescriptionHtml: '',
};

beforeEach(() => {
  vi.resetAllMocks();
});

describe('getExistingContentHash', () => {
  it('returns null when file does not exist', () => {
    vi.mocked(fs.existsSync).mockReturnValue(false);
    expect(getExistingContentHash('/nonexistent.md')).toBeNull();
  });

  it('reads hash from frontmatter', () => {
    vi.mocked(fs.existsSync).mockReturnValue(true);
    vi.mocked(fs.readFileSync).mockReturnValue(
      '---\ntitle: Test\ncontentHash: abc123def456abc123def456abc123de\n---\n'
    );
    expect(getExistingContentHash('/test.md')).toBe('abc123def456abc123def456abc123de');
  });

  it('returns null when no hash in file', () => {
    vi.mocked(fs.existsSync).mockReturnValue(true);
    vi.mocked(fs.readFileSync).mockReturnValue('---\ntitle: Test\n---\n');
    expect(getExistingContentHash('/test.md')).toBeNull();
  });
});

describe('shouldUpdateContent', () => {
  it('returns true when file does not exist', () => {
    vi.mocked(fs.existsSync).mockReturnValue(false);
    expect(shouldUpdateContent(mockArticle, '/missing.md', 'newhash')).toBe(true);
  });

  it('returns true when hashes differ', () => {
    vi.mocked(fs.existsSync).mockReturnValue(true);
    vi.mocked(fs.readFileSync).mockReturnValue(
      '---\ncontentHash: oldhash123oldhash123oldhash1234\n---\n'
    );
    expect(shouldUpdateContent(mockArticle, '/test.md', 'newhash')).toBe(true);
  });

  it('returns false when hashes match', () => {
    vi.mocked(fs.existsSync).mockReturnValue(true);
    vi.mocked(fs.readFileSync).mockReturnValue(
      '---\ncontentHash: abc123def456abc123def456abc123de\n---\n'
    );
    expect(shouldUpdateContent(mockArticle, '/test.md', 'abc123def456abc123def456abc123de')).toBe(false);
  });
});
