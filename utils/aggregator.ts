import * as fs from 'fs';
import * as path from 'path';
import { RSSSource, HTMLSource, DirectSource, CustomSource } from './sources';
import { generateMarkdown } from './markdownTemplate';
import type { Article } from '../types/article';

function sanitizeFilename(title: string): string {
  return title.replace(/[^a-z0-9]/gi, '-').toLowerCase();
}

async function crawlFeeds(): Promise<Article[]> {
  const configDir = path.join(__dirname, '../config');
  const configFiles = fs.readdirSync(configDir).filter(file => file.endsWith('.json'));
  const results: Article[] = [];

  for (const configFile of configFiles) {
    const filePath = path.join(configDir, configFile);
    const sources = JSON.parse(fs.readFileSync(filePath, 'utf8'));

    for (const source of sources) {
      let handler;

      // if (configFile === 'feeds.json') {
      //   handler = new RSSSource(source.url, source.name);
      // } else if (configFile === 'blogs.json') {
      //   handler = new HTMLSource(source.url);
      // } else if (configFile === 'articles.json') {
      if (configFile === 'articles.json') {
        handler = new DirectSource(source.url);
      } else if (configFile === 'customSources.json') {
        if (source.customHandler) {
          const handlerModule = require(`./customHandlers`)[source.customHandler];
          if (handlerModule) {
            handler = new CustomSource(source.url, handlerModule);
          } else {
            console.error(`Custom handler not found: ${source.customHandler}`);
            continue;
          }
        } else {
          console.error(`Missing customHandler for custom source in ${configFile}`);
          continue;
        }
      } else {
        console.error(`Unsupported source type in ${configFile}`);
        continue;
      }

      try {
        const articles = await handler.fetchArticles();
        results.push(
          ...articles.map(article => ({
            ...article,
            organization: article.organization || source.name || source.organization || '',
            description: article.description || source.description || '',
            tags: article.tags || (source.tags ? source.tags.split(',') : []),
            summary: article.summary || source.summary || ''
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