import type { Source, ContentParsers } from '../../types/source';
import type { Article } from '../../types/article';
import axios from 'axios';
import * as cheerio from 'cheerio';

export class HTMLSource implements Source {
  constructor(
    public url: string,
    private contentParsers?: ContentParsers,
  ) {}

  async fetchArticles(): Promise<Article[]> {
    const response = await axios.get(this.url);
    const $ = cheerio.load(response.data);
    const articles: Article[] = [];

    if (this.contentParsers?.articleSelector) {
      const selector = this.contentParsers.articleSelector;
      const fields = this.contentParsers.fields || {};

      $(selector).each((_, element) => {
        const $anchor = $(element);
        const title = $anchor.text().trim();
        const $siblings = $anchor.nextUntil(selector);

        const article: Article = {
          title,
          description: '',
          externalUrl: this.url,
          internalUrl: '',
          source: this.url,
          organization: this.url,
          repostedDate: new Date().toISOString(),
          tags: [],
          summary: '',
          rawDescriptionHtml: '',
          sourceType: 'html',
        };

        for (const [field, parser] of Object.entries(fields)) {
          const $match = $siblings.filter(parser.selector).first();
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

          if (field === 'externalUrl' && value && !value.startsWith('http')) {
            value = new URL(value, this.url).href;
          }

          if (value) {
            (article as Record<string, unknown>)[field] = value;
          }
        }

        // Use the first <p> that wasn't consumed by a field parser as description
        if (!article.description) {
          const metaFields = Object.values(fields).filter((f) => f.selector === 'p');
          const metaCount = metaFields.length > 0 ? 1 : 0; // metadata is typically one <p>
          const $descP = $siblings.filter('p').eq(metaCount);
          if ($descP.length) {
            article.description = $descP.text().trim();
          }
        }

        // Collect rawDescriptionHtml from all siblings
        const htmlParts: string[] = [];
        $siblings.each((_, sib) => {
          htmlParts.push($.html(sib));
        });
        article.rawDescriptionHtml = htmlParts.join('');

        if (title) {
          articles.push(article);
        }
      });
    } else {
      // Default behavior: look for <article> elements
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
    }

    return articles;
  }
}
