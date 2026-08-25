import * as fs from 'node:fs';
import * as path from 'node:path';
import * as os from 'node:os';
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import Parser from 'rss-parser';
import {
  escapeCdata,
  formatRfc822Date,
  parseMarkdownArticle,
  generateRssXml,
  buildRssFromContent,
  type RssArticleItem,
} from '../../../utils/rssFeed';

describe('escapeCdata', () => {
  it('handles empty strings', () => {
    expect(escapeCdata('')).toBe('');
  });

  it('escapes CDATA closing sequences', () => {
    expect(escapeCdata('This has ]]> in it')).toBe('This has ]]]]><![CDATA[> in it');
  });

  it('leaves normal text untouched', () => {
    expect(escapeCdata('Safe text with & < > " characters')).toBe('Safe text with & < > " characters');
  });
});

describe('formatRfc822Date', () => {
  it('converts ISO date to RFC 822 UTC string', () => {
    const rfcDate = formatRfc822Date('2026-01-07T12:00:00.000Z');
    expect(rfcDate).toBe('Wed, 07 Jan 2026 12:00:00 GMT');
  });

  it('returns valid current UTC date when dateStr is empty or invalid', () => {
    const invalidDate = formatRfc822Date('not-a-date');
    expect(new Date(invalidDate).getTime()).not.toBeNaN();
    const emptyDate = formatRfc822Date('');
    expect(new Date(emptyDate).getTime()).not.toBeNaN();
  });
});

describe('parseMarkdownArticle', () => {
  it('returns null for markdown without frontmatter', () => {
    const result = parseMarkdownArticle('# Just a markdown file', 'test.md', 'https://example.com');
    expect(result).toBeNull();
  });

  it('parses valid frontmatter correctly', () => {
    const markdown = `---
title: Sample Article
description: A short description of the sample article
url: https://external.com/sample
source: https://external.com
organization: Sample Org
repostedDate: 2026-08-01T10:00:00.000Z
sourcePublishDate: 2026-01-05T09:30:00.000Z
author: Jane Doe
tags:
  - accessibility
  - testing
---

Body content goes here.
`;

    const result = parseMarkdownArticle(markdown, 'sample-article.md', 'https://paul-ooi.github.io/site-aggregator');

    expect(result).not.toBeNull();
    expect(result?.title).toBe('Sample Article');
    expect(result?.description).toBe('A short description of the sample article');
    expect(result?.link).toBe('https://paul-ooi.github.io/site-aggregator/sample-article');
    expect(result?.guid).toBe('https://paul-ooi.github.io/site-aggregator/sample-article');
    expect(result?.author).toBe('Jane Doe');
    expect(result?.organization).toBe('Sample Org');
    expect(result?.tags).toEqual(['accessibility', 'testing']);
    expect(result?.pubDate).toBe('Mon, 05 Jan 2026 09:30:00 GMT');
  });

  it('falls back to repostedDate when sourcePublishDate is missing', () => {
    const markdown = `---
title: No Publish Date
repostedDate: 2026-06-15T08:00:00.000Z
---
`;
    const result = parseMarkdownArticle(markdown, 'no-pub-date.md', 'https://example.com');
    expect(result?.pubDate).toBe('Mon, 15 Jun 2026 08:00:00 GMT');
  });

  it('falls back to organization when author is missing', () => {
    const markdown = `---
title: Org Author Article
organization: W3C
repostedDate: 2026-06-15T08:00:00.000Z
---
`;
    const result = parseMarkdownArticle(markdown, 'org-article.md', 'https://example.com');
    expect(result?.author).toBe('W3C');
  });

  it('returns null when neither sourcePublishDate nor repostedDate is present', () => {
    const markdown = `---
title: Static Page
description: About page
---
`;
    const result = parseMarkdownArticle(markdown, 'about.md', 'https://example.com');
    expect(result).toBeNull();
  });
});

describe('generateRssXml', () => {
  const articles: RssArticleItem[] = [
    {
      title: 'Older Article',
      description: 'First article',
      link: 'https://example.com/older',
      guid: 'https://example.com/older',
      pubDate: 'Wed, 01 Jan 2025 00:00:00 GMT',
      author: 'Author One',
      tags: ['intro'],
    },
    {
      title: 'Newer Article',
      description: 'Second article with <HTML> and "quotes"',
      link: 'https://example.com/newer',
      guid: 'https://example.com/newer',
      pubDate: 'Sun, 01 Feb 2026 00:00:00 GMT',
      organization: 'Tech Hub',
      source: 'https://techhub.com',
      tags: ['advanced', 'web'],
    },
  ];

  it('produces valid RSS 2.0 XML with custom channel metadata', () => {
    const xml = generateRssXml(articles, {
      siteTitle: 'Custom Aggregator',
      siteDescription: 'Custom Description',
      siteUrl: 'https://custom.com',
      feedUrl: 'https://custom.com/rss.xml',
    });

    expect(xml).toContain('<?xml version="1.0" encoding="UTF-8"?>');
    expect(xml).toContain('<rss version="2.0"');
    expect(xml).toContain('<title><![CDATA[Custom Aggregator]]></title>');
    expect(xml).toContain('<link>https://custom.com</link>');
    expect(xml).toContain('<atom:link href="https://custom.com/rss.xml" rel="self" type="application/rss+xml"/>');
  });

  it('sorts articles in newest-first order', () => {
    const xml = generateRssXml(articles);
    const newerIndex = xml.indexOf('Newer Article');
    const olderIndex = xml.indexOf('Older Article');
    expect(newerIndex).toBeLessThan(olderIndex);
  });

  it('includes tags as category nodes and author in dc:creator', () => {
    const xml = generateRssXml(articles);
    expect(xml).toContain('<dc:creator><![CDATA[Author One]]></dc:creator>');
    expect(xml).toContain('<category><![CDATA[advanced]]></category>');
    expect(xml).toContain('<category><![CDATA[web]]></category>');
  });

  it('can be parsed cleanly by rss-parser', async () => {
    const xml = generateRssXml(articles);
    const parser = new Parser();
    const feed = await parser.parseString(xml);

    expect(feed.title).toBe('Site Aggregator');
    expect(feed.items.length).toBe(2);
    expect(feed.items[0].title).toBe('Newer Article');
    expect(feed.items[1].title).toBe('Older Article');
  });
});

describe('buildRssFromContent', () => {
  let tempDir: string;
  let outputRssPath: string;

  beforeEach(() => {
    tempDir = fs.mkdtempSync(path.join(os.tmpdir(), 'site-aggregator-rss-test-'));
    outputRssPath = path.join(tempDir, 'rss.xml');
  });

  afterEach(() => {
    fs.rmSync(tempDir, { recursive: true, force: true });
  });

  it('reads content directory and outputs valid rss.xml', async () => {
    const article1 = `---
title: Article 1
description: Desc 1
url: https://source1.com/a1
organization: Org 1
sourcePublishDate: 2026-03-01T00:00:00.000Z
tags:
  - tag1
---
Body 1
`;
    const article2 = `---
title: Article 2
description: Desc 2
url: https://source2.com/a2
organization: Org 2
sourcePublishDate: 2026-04-01T00:00:00.000Z
tags:
  - tag2
---
Body 2
`;

    fs.writeFileSync(path.join(tempDir, 'art-1.md'), article1, 'utf8');
    fs.writeFileSync(path.join(tempDir, 'art-2.md'), article2, 'utf8');

    const count = await buildRssFromContent(tempDir, outputRssPath);
    expect(count).toBe(2);
    expect(fs.existsSync(outputRssPath)).toBe(true);

    const parser = new Parser();
    const xmlContent = fs.readFileSync(outputRssPath, 'utf8');
    const feed = await parser.parseString(xmlContent);
    expect(feed.items.length).toBe(2);
    expect(feed.items[0].title).toBe('Article 2');
    expect(feed.items[1].title).toBe('Article 1');
  });

  it('returns 0 when directory does not exist', async () => {
    const nonExistent = path.join(tempDir, 'non-existent-dir');
    const count = await buildRssFromContent(nonExistent, outputRssPath);
    expect(count).toBe(0);
  });
});
