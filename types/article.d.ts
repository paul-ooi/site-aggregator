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
  rawDescriptionHtml: string; // Expecting the full HTML from RSS <description>
  sourceType?: 'rss' | 'html' | 'direct' | 'custom';
}

export interface FavoriteArticle extends Article {
  addedAt: string;
  userTags: string[];
}
