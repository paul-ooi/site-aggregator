import type { Source, ContentParsers } from '../../types/source';
import type { Article } from '../../types/article';
import axios from 'axios';
import * as cheerio from 'cheerio';

const CONCURRENCY_LIMIT = 3;

export class HTMLSource implements Source {
  constructor(
    public url: string,
    private contentParsers?: ContentParsers,
  ) {}

  async fetchArticles(): Promise<Article[]> {
    const response = await axios.get(this.url);
    const $ = cheerio.load(response.data);

    if (this.contentParsers) {
      return this.fetchWithTwoPhase($);
    }

    // Default behavior: look for <article> elements
    const articles: Article[] = [];
    $('article').each((_, element) => {
      articles.push({
        title: $(element).find('h1, h2').text().trim(),
        description: $(element).find('p').text().trim(),
        externalUrl: this.url,
        internalUrl: '',
        source: this.url,
        organization: this.url,
        repostedDate: new Date().toISOString(),
        tags: [],
        summary: '',
        rawDescriptionHtml: $(element).html() || '',
        sourceType: 'html',
      });
    });
    return articles;
  }

  private async fetchWithTwoPhase($index: cheerio.CheerioAPI): Promise<Article[]> {
    const { index, article: articleConfig } = this.contentParsers!;
    const linkAttribute = index.linkAttribute || 'href';

    // Phase 1: collect article links from the index page
    const links: string[] = [];
    $index(index.linkSelector).each((_, el) => {
      const raw = $index(el).attr(linkAttribute);
      if (raw) {
        const resolved = new URL(raw, this.url).href;
        if (!links.includes(resolved)) {
          links.push(resolved);
        }
      }
    });

    // Phase 2: fetch each article page with concurrency limit
    const articles: Article[] = [];
    for (let i = 0; i < links.length; i += CONCURRENCY_LIMIT) {
      const batch = links.slice(i, i + CONCURRENCY_LIMIT);
      const results = await Promise.all(batch.map((link) => this.fetchArticlePage(link, articleConfig)));
      for (const result of results) {
        if (result) articles.push(result);
      }
    }

    return articles;
  }

  private async fetchArticlePage(
    articleUrl: string,
    config: ContentParsers['article'],
  ): Promise<Article | null> {
    try {
      const response = await axios.get(articleUrl);
      const $ = cheerio.load(response.data);

      const rawDescriptionHtml = $(config.contentSelector).html() || '';

      const article: Article = {
        title: '',
        description: '',
        externalUrl: articleUrl,
        internalUrl: '',
        source: this.url,
        organization: this.url,
        repostedDate: new Date().toISOString(),
        tags: [],
        summary: '',
        rawDescriptionHtml,
        sourceType: 'html',
      };

      for (const [field, parser] of Object.entries(config.fields)) {
        const $match = $(parser.selector).first();
        if (!$match.length) continue;

        let value: string;
        if (parser.attribute) {
          value = $match.attr(parser.attribute) || '';
        } else {
          value = $match.text().trim();
        }

        if (parser.regex && value) {
          const match = value.match(new RegExp(parser.regex));
          value = match?.[1]?.trim() || '';
        }

        if (field === 'sourcePublishDate' && value) {
          const parsed = new Date(value);
          if (!isNaN(parsed.getTime())) {
            value = parsed.toISOString();
          }
        }

        if (value) {
          (article as unknown as Record<string, unknown>)[field] = value;
        }
      }

      if (!article.title) return null;

      return article;
    } catch (error) {
      console.error(`Error fetching article ${articleUrl}:`, error);
      return null;
    }
  }
}
