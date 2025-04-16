export interface Article {
  title: string;
  description: string;
  externalUrl: string;
  internalUrl: string;
  source: string;
  organization: string;
  repostedDate: string;
  sourcePublishDate?: string;
  author?: string;
  tags?: string[];
  summary?: string;
  sourceType?: 'rss' | 'html' | 'direct' | 'custom';
}

export interface FavoriteArticle extends Article {
  addedAt: string;
  userTags: string[];
}