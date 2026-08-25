import * as fs from 'node:fs';
import * as path from 'node:path';

export interface RssArticleItem {
  title: string;
  description: string;
  link: string;
  guid: string;
  pubDate: string;
  author?: string;
  organization?: string;
  source?: string;
  externalUrl?: string;
  tags?: string[];
}

export interface RssFeedOptions {
  siteTitle?: string;
  siteDescription?: string;
  siteUrl?: string;
  feedUrl?: string;
  language?: string;
}

const DEFAULT_OPTIONS: Required<RssFeedOptions> = {
  siteTitle: 'Site Aggregator',
  siteDescription: 'A lightweight content aggregation system that collects, stores, and displays articles from web URLs and RSS feeds',
  siteUrl: 'https://paul-ooi.github.io/site-aggregator',
  feedUrl: 'https://paul-ooi.github.io/site-aggregator/rss.xml',
  language: 'en-us',
};

/**
 * Escapes characters for CDATA or XML elements.
 */
export function escapeCdata(str: string): string {
  if (!str) return '';
  return str.replace(/]]>/g, ']]]]><![CDATA[>');
}

/**
 * Formats a date string into RFC 822 / RFC 2822 format.
 */
export function formatRfc822Date(dateStr?: string): string {
  if (!dateStr) {
    return new Date().toUTCString();
  }
  const date = new Date(dateStr);
  if (isNaN(date.getTime())) {
    return new Date().toUTCString();
  }
  return date.toUTCString();
}

/**
 * Parses frontmatter metadata from a content markdown file.
 */
export function parseMarkdownArticle(fileContent: string, filename: string, baseUrl: string): RssArticleItem | null {
  const frontmatterMatch = fileContent.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!frontmatterMatch) {
    return null;
  }

  const frontmatterText = frontmatterMatch[1];
  const getValue = (key: string): string => {
    const match = frontmatterText.match(new RegExp(`^${key}:[ \\t]*(.*)$`, 'm'));
    if (!match) return '';
    return match[1].trim().replace(/^["']|["']$/g, '');
  };

  const title = getValue('title');
  if (!title) return null;

  const description = getValue('description');
  const externalUrl = getValue('url');
  const source = getValue('source');
  const organization = getValue('organization');
  const repostedDate = getValue('repostedDate');
  const sourcePublishDate = getValue('sourcePublishDate');
  const author = getValue('author');

  // Must have a date (sourcePublishDate or repostedDate) to be included as an RSS feed item
  if (!sourcePublishDate && !repostedDate) {
    return null;
  }

  // Parse tags
  const tags: string[] = [];
  const tagsMatch = frontmatterText.match(/^tags:\r?\n((?:[ \t]*-[ \t]*[^\r\n]+\r?\n?)+)/m);
  if (tagsMatch) {
    const lines = tagsMatch[1].split(/\r?\n/);
    for (const line of lines) {
      const tagMatch = line.match(/^[ \t]*-[ \t]*(.+)$/);
      if (tagMatch) {
        tags.push(tagMatch[1].trim().replace(/^["']|["']$/g, ''));
      }
    }
  }

  const slug = filename.replace(/\.md$/, '');
  const cleanBaseUrl = baseUrl.replace(/\/+$/, '');
  const articleUrl = `${cleanBaseUrl}/${slug}`;
  const pubDate = formatRfc822Date(sourcePublishDate || repostedDate);

  return {
    title,
    description,
    link: articleUrl,
    guid: articleUrl,
    pubDate,
    author: author || organization,
    organization,
    source,
    externalUrl,
    tags,
  };
}

/**
 * Generates valid RSS 2.0 XML from a list of article items.
 */
export function generateRssXml(articles: RssArticleItem[], options: RssFeedOptions = {}): string {
  const opts = { ...DEFAULT_OPTIONS, ...options };
  const lastBuildDate = new Date().toUTCString();

  // Sort articles descending by pubDate
  const sortedArticles = [...articles].sort((a, b) => {
    const dateA = new Date(a.pubDate).getTime();
    const dateB = new Date(b.pubDate).getTime();
    return dateB - dateA;
  });

  const itemsXml = sortedArticles
    .map((item) => {
      const categoriesXml = (item.tags || [])
        .map((tag) => `      <category><![CDATA[${escapeCdata(tag)}]]></category>`)
        .join('\n');

      const creatorXml = item.author
        ? `      <dc:creator><![CDATA[${escapeCdata(item.author)}]]></dc:creator>\n`
        : '';

      const sourceXml = item.source && item.organization
        ? `      <source url="${item.source}"><![CDATA[${escapeCdata(item.organization)}]]></source>\n`
        : '';

      return `    <item>
      <title><![CDATA[${escapeCdata(item.title)}]]></title>
      <link>${item.link}</link>
      <guid isPermaLink="true">${item.guid}</guid>
      <pubDate>${item.pubDate}</pubDate>
      <description><![CDATA[${escapeCdata(item.description)}]]></description>
${creatorXml}${sourceXml}${categoriesXml ? categoriesXml + '\n' : ''}    </item>`;
    })
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:content="http://purl.org/rss/1.0/modules/content/">
  <channel>
    <title><![CDATA[${escapeCdata(opts.siteTitle)}]]></title>
    <link>${opts.siteUrl}</link>
    <description><![CDATA[${escapeCdata(opts.siteDescription)}]]></description>
    <language>${opts.language}</language>
    <lastBuildDate>${lastBuildDate}</lastBuildDate>
    <atom:link href="${opts.feedUrl}" rel="self" type="application/rss+xml"/>
${itemsXml}
  </channel>
</rss>
`;
}

/**
 * Reads markdown files from content directory, generates RSS 2.0 XML, and writes to target file.
 */
export async function buildRssFromContent(
  contentDir: string,
  outputPath: string,
  options: RssFeedOptions = {}
): Promise<number> {
  if (!fs.existsSync(contentDir)) {
    console.warn(`[RSS] Content directory ${contentDir} does not exist.`);
    return 0;
  }

  const opts = { ...DEFAULT_OPTIONS, ...options };
  const files = fs.readdirSync(contentDir).filter((file) => file.endsWith('.md'));
  const articles: RssArticleItem[] = [];

  for (const file of files) {
    const filePath = path.join(contentDir, file);
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      const article = parseMarkdownArticle(content, file, opts.siteUrl);
      if (article) {
        articles.push(article);
      }
    } catch (err) {
      console.error(`[RSS] Error reading file ${file}:`, err);
    }
  }

  const xml = generateRssXml(articles, opts);

  const outputDir = path.dirname(outputPath);
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  fs.writeFileSync(outputPath, xml, 'utf8');
  console.log(`[RSS] Generated feed with ${articles.length} items at ${outputPath}`);
  return articles.length;
}
