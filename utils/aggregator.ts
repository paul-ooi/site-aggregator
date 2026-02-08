import * as fs from 'node:fs';
import * as path from 'node:path';
import { fileURLToPath } from 'node:url';
import { RSSSource, HTMLSource, DirectSource } from './sources/index.ts';
import { generateMarkdown, generateContentHash, hasMinimumContent } from './markdownTemplate.ts';
import { shouldUpdateContent, removeEmptyContent } from './fileHelper.ts';
import type { Article } from '../types/article.d.ts';
import type { Source } from '../types/source.d.ts';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export function sanitizeFilename(title: string): string {
  return title.replace(/[^a-z0-9]/gi, '-').toLowerCase();
}

async function crawlFeeds(): Promise<Article[]> {
  const configPath = path.join(__dirname, '../config/sources.json');
  const sources = JSON.parse(fs.readFileSync(configPath, 'utf8'));
  const results: Article[] = [];

  for (const source of sources) {
    let handler: Source | null = null;

    switch (source.type) {
      case 'rss':
        handler = new RSSSource(source.url, source.name, source.fieldMappings);
        break;
      case 'html':
        handler = new HTMLSource(source.url, source.contentParsers);
        break;
      case 'direct':
        handler = new DirectSource(source.url);
        break;
      default:
        console.error(`Unsupported source type: ${source.type}`);
        continue;
    }

    try {
      const rawArticles = await handler.fetchArticles();
      const processedArticles = rawArticles.map((article) => ({
        ...article,
        organization: article.organization || source.organization || source.name || '',
        description: article.description || source.description || '',
        tags:
          Array.isArray(article.tags) && article.tags.length > 0
            ? article.tags
            : source.tags
              ? source.tags.split(',').map((tag: string) => tag.trim())
              : [],
        summary: article.summary || source.summary || '',
      }));
      results.push(...processedArticles);
    } catch (error) {
      console.error(`Error processing ${source.url}:`, error);
    }
  }

  return results;
}

async function saveArticlesAsMarkdown(articles: Article[]): Promise<void> {
  const contentDir = path.join(__dirname, '../content');
  if (!fs.existsSync(contentDir)) {
    fs.mkdirSync(contentDir, { recursive: true });
  }

  for (const article of articles) {
    const filename = `${sanitizeFilename(article.title)}.md`;
    const filePath = path.join(contentDir, filename);

    if (!hasMinimumContent(article)) {
      console.log(`[SKIP] ${filename} (insufficient content)`);
      continue;
    }

    const newHash = generateContentHash(article);

    if (shouldUpdateContent(article, filePath, newHash)) {
      const content = generateMarkdown(article);
      fs.writeFileSync(filePath, content);
      console.log(`[WRITE] ${filename}`);
    } else {
      console.log(`[SKIP] ${filename} (unchanged)`);
    }
  }
}

(async () => {
  const articles = await crawlFeeds();
  await saveArticlesAsMarkdown(articles);

  const contentDir = path.join(__dirname, '../content');
  removeEmptyContent(contentDir);
})();
