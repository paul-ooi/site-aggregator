import type { Article } from '../types/article';

export function generateMarkdown(article: Article): string {
  return `---\n` +
    `title: '${article.title}'\n` +
    `description: '${article.description}'\n` +
    `url: '${article.externalUrl}'\n` +
    `source: '${article.source}'\n` +
    `organization: '${article.organization}'\n` +
    `repostedDate: '${article.repostedDate}'\n` +
    `sourcePublishDate: '${article.sourcePublishDate || ''}'\n` +
    `---\n\n${article.summary || ''}`;
}