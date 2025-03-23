export interface Article {
  title: string
  description: string
  url: string
  source: string
  organitzation: string
  repostedDate: string
  sourcePublishDate?: string
  author?: string
  tags?: string[]
  summary?: string
}

export interface FavoriteArticle extends Article {
  addedAt: string
  userTags: string[]
}