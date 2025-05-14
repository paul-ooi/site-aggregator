import type { Source } from '../../types/source';
import type { Article } from '../../types/article';
import Parser from 'rss-parser';

const parser = new Parser();

export class RSSSource implements Source {
  constructor(
    public rssUrl: string,
    public url: string
  ) {}

  async fetchArticles(): Promise<Article[]> {
    const feed = await parser.parseURL(this.rssUrl);
    return feed.items.map((item) => ({
      title: item.title || '',
      description: item.contentSnippet || '',
      externalUrl: item.link || '',
      internalUrl: '',
      source: feed.title || '',
      organization: this.url,
      repostedDate: new Date().toISOString(),
      sourcePublishDate: item.pubDate || '',
      author: item.creator || '',
      tags: [],
      summary: '',
      sourceType: 'rss',
    }));
  }
}
