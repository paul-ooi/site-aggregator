import type { Source } from '~types/source';
import type { Article } from '~types/article';
import { load } from 'cheerio';
import axios from 'axios';

export class DirectSource implements Source {
  constructor(public url: string) {}

  async fetchArticles(): Promise<Article[]> {
    const response = await axios.get(this.url);
    const $ = load(response.data);

    return [
      {
        title: $('title').text().trim(),
        description: $('meta[name="description"]').attr('content') || '',
        externalUrl: this.url,
        internalUrl: '',
        source: this.url,
        organization: this.url,
        repostedDate: new Date().toISOString(),
        tags: [],
        summary: '',
        sourceType: 'direct'
      }
    ];
  }
}