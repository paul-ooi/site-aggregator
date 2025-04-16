import { Article } from './article';

export interface Source {
  url: string;
  fetchArticles(): Promise<Article[]>;
}

export type CustomHandler = (html: string) => Article[];