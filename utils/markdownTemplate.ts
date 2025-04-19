import type { Article } from '../types/article';

export function generateMarkdown(article: Article): string {
  const tagsSection = article.tags?.length 
    ? `tags:\n${article.tags.map(tag => `  - ${tag}`).join('\n')}\n`
    : '';

  return `---\n` +
    `title: '${article.title}'\n` +
    `description: '${article.description}'\n` +
    `url: '${article.externalUrl}'\n` +
    `source: '${article.source}'\n` +
    `organization: '${article.organization}'\n` +
    `repostedDate: '${article.repostedDate}'\n` +
    `${tagsSection}` +
    `sourcePublishDate: '${article.sourcePublishDate || ''}'\n` +
    `---\n\n${article.summary || ''}`;
}