import { Article } from './article';

export interface ContentParserField {
  selector: string;
  regex?: string;
  attribute?: string;
}

export interface ContentParsers {
  index: {
    linkSelector: string;
    linkAttribute?: string;
  };
  article: {
    contentSelector: string;
    fields: Record<string, ContentParserField>;
  };
}

export interface Source {
  url: string;
  fetchArticles(): Promise<Article[]>;
}

export type CustomHandler = (html: string) => Article[];
