import * as fs from 'node:fs';
import * as path from 'node:path';
import { fileURLToPath } from 'node:url';
import { RSSSource, HTMLSource, DirectSource, CustomSource } from '@sources/index.ts';
import { generateMarkdown } from './markdownTemplate.ts';
import type { Article } from '@appTypes/article.d.ts';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function sanitizeFilename(title: string): string {
  return title.replace(/[^a-z0-9]/gi, '-').toLowerCase();
}

async function crawlFeeds(): Promise<Article[]> {
  const configDir = path.join(__dirname, '../config');
  const configFiles = fs.readdirSync(configDir).filter((file) => file.endsWith('.json'));
  const results: Article[] = [];

  for (const configFile of configFiles) {
    const filePath = path.join(configDir, configFile);
    const sources = JSON.parse(fs.readFileSync(filePath, 'utf8'));

    for (const source of sources) {
      let handler;

      if (configFile === 'feeds.json') {
        handler = new RSSSource(source.url, source.name, source.fieldMappings);
      // } else if (configFile === 'blogs.json') {
      //   handler = new HTMLSource(source.url);
      // } else if (configFile === 'articles.json') {
      // } else if (configFile === 'articles.json') {
      //   handler = new DirectSource(source.url);
      } else if (configFile === 'customSources.json') {
        // if (source.customHandler) {
        //   const handlerModule = require(`./customHandlers`)[source.customHandler];
        //   if (handlerModule) {
        //     handler = new CustomSource(source.url, handlerModule);
        //   } else {
        //     console.error(`Custom handler not found: ${source.customHandler}`);
        //     continue;
        //   }
        // } else {
        //   console.error(`Missing customHandler for custom source in ${configFile}`);
        //   continue;
        // }
      } else {
        console.error(`Unsupported source type in ${configFile}`);
        continue;
      }

      try {
        const articles : Article[] = await handler?.fetchArticles() ?? [];
        results.push(
          ...articles.map((article) => ({
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
          }))
        );
      } catch (error) {
        console.error(`Error processing ${source.url}:`, error);
      }
    }
  }

  return results;
}

async function saveArticlesAsMarkdown(articles: Article[]): Promise<void> {
  const contentDir = path.join(__dirname, '../content');
  if (!fs.existsSync(contentDir)) {
    fs.mkdirSync(contentDir);
  }

  for (const article of articles) {
    const filename = `${sanitizeFilename(article.title)}.md`;
    const filePath = path.join(contentDir, filename);
    const content = generateMarkdown(article);
    fs.writeFileSync(filePath, content);
  }
}

(async () => {
  const articles = await crawlFeeds();
  await saveArticlesAsMarkdown(articles);
})();
