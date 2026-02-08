import { describe, it, expect, vi, beforeEach } from 'vitest';
import * as fs from 'node:fs';
import { getExistingContentHash, shouldUpdateContent, removeEmptyContent } from '../../../utils/fileHelper';
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

describe('removeEmptyContent', () => {
  it('removes aggregated files with insufficient body content', () => {
    vi.mocked(fs.readdirSync).mockReturnValue(['empty-article.md'] as unknown as fs.Dirent[]);
    vi.mocked(fs.readFileSync).mockReturnValue(
      '---\ntitle: Empty\ncontentHash: abc123\n---\n\nShort body.'
    );
    vi.mocked(fs.unlinkSync).mockImplementation(() => {});

    removeEmptyContent('/content');

    expect(fs.unlinkSync).toHaveBeenCalledWith('/content/empty-article.md');
  });

  it('keeps aggregated files with sufficient body content', () => {
    vi.mocked(fs.readdirSync).mockReturnValue(['full-article.md'] as unknown as fs.Dirent[]);
    const longBody = Array(101).fill('word').join(' ');
    vi.mocked(fs.readFileSync).mockReturnValue(
      `---\ntitle: Full\ncontentHash: abc123\n---\n\n${longBody}`
    );

    removeEmptyContent('/content');

    expect(fs.unlinkSync).not.toHaveBeenCalled();
  });

  it('skips non-aggregated files without contentHash', () => {
    vi.mocked(fs.readdirSync).mockReturnValue(['colophon.md'] as unknown as fs.Dirent[]);
    vi.mocked(fs.readFileSync).mockReturnValue(
      '---\ntitle: Colophon\ndescription: About\n---\n\nShort page.'
    );

    removeEmptyContent('/content');

    expect(fs.unlinkSync).not.toHaveBeenCalled();
  });

  it('skips non-markdown files', () => {
    vi.mocked(fs.readdirSync).mockReturnValue(['readme.txt', 'data.json'] as unknown as fs.Dirent[]);

    removeEmptyContent('/content');

    expect(fs.readFileSync).not.toHaveBeenCalled();
    expect(fs.unlinkSync).not.toHaveBeenCalled();
  });
});
