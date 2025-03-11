export interface Article {
  id: string
  title: string
  content: string
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