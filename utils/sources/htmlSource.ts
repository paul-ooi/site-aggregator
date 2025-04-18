import type { Source } from '~types/source';
import type { Article } from '~types/article';
import axios from 'axios';
import * as cheerio from 'cheerio';

export class HTMLSource implements Source {
  constructor(public url: string) {}

  async fetchArticles(): Promise<Article[]> {
    const response = await axios.get(this.url);
    const $ = cheerio.load(response.data);
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
        sourceType: 'html'
      });
    });

    return articles;
  }
}