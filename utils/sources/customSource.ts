import type { Source, CustomHandler } from '../../types/source.d.ts';
import type { Article } from '../../types/article.d.ts';
import axios from 'axios';

export class CustomSource implements Source {
  constructor(
    public url: string,
    private customHandler: CustomHandler
  ) {}

  async fetchArticles(): Promise<Article[]> {
    const response = await axios.get(this.url);
    return this.customHandler(response.data);
  }
}
