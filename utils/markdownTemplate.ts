import type { Article } from '../types/article.d.ts';
import { parse, HTMLElement } from 'node-html-parser';
import TurndownService from 'turndown';
import { createHash } from 'crypto';

export function generateContentHash(article: Article): string {
  const content = `${article.title}${article.rawDescriptionHtml}${article.sourcePublishDate}`;
  return createHash('md5').update(content).digest('hex');
}

function createTurndownService(): TurndownService {
  return new TurndownService({
    headingStyle: 'atx', // Use # for h1, ## for h2, etc.
    bulletListMarker: '-',
    codeBlockStyle: 'fenced',
  });
}

function convertBodyToMarkdown(rawDescriptionHtml: string): string {
  const turndownService = createTurndownService();
  const root = parse(rawDescriptionHtml) as HTMLElement;
  const figureElement = root.querySelector('figure');
  if (figureElement) {
    figureElement.remove();
  }
  return turndownService.turndown(root.innerHTML);
}

export function hasMinimumContent(article: Article, minWords = 100): boolean {
  if (!article.rawDescriptionHtml) return false;

  const bodyMarkdown = convertBodyToMarkdown(article.rawDescriptionHtml);

  // Strip markdown image syntax, headings, and other non-word markup
  const plainText = bodyMarkdown
    .replace(/!\[.*?\]\(.*?\)/g, '') // Remove images
    .replace(/\[([^\]]*)\]\(.*?\)/g, '$1') // Replace links with link text
    .replace(/#{1,6}\s*/g, '') // Remove heading markers
    .replace(/[*_~`>|=-]+/g, ' ') // Remove emphasis, code, blockquote markers
    .replace(/\n/g, ' ');

  const words = plainText.split(/\s+/).filter((w) => w.length > 0);
  return words.length >= minWords;
}

export function generateMarkdown(article: Article): string {
  const tagsSection = article.tags?.length ? `tags:\n${article.tags.map((tag : string) => `  - ${tag}`).join('\n')}\n` : '';

    const turndownService = createTurndownService();

  let bodyMarkdown = '';
  let figureMarkdown = '';
  let frontmatterDescription = article.title; // Default description for frontmatter

  if (article.rawDescriptionHtml) {
    const root = parse(article.rawDescriptionHtml) as HTMLElement; // Cast for type safety with querySelector
    const figureElement = root.querySelector('figure');
    let captionTextForFrontmatter: string | null = null;

    if (figureElement) {
      const imgElement = figureElement.querySelector('img');
      const figcaptionElement = figureElement.querySelector('figcaption');

      const imgSrc = imgElement?.getAttribute('src');
      // Use innerText to get the plain text content of the caption
      const captionText = figcaptionElement?.innerText?.trim();

      if (imgSrc && captionText) {
        // Use caption as alt text, sanitize it slightly for alt attribute
        const altText = (imgElement?.getAttribute('alt') || captionText)
          .replace(/[\*_~`#>+-=]/g, '') // Remove Markdown special chars
          .replace(/"/g, "'"); // Replace double quotes with single for alt

        figureMarkdown = `![${altText}](${imgSrc})\n\n*${captionText}*\n\n`;
        captionTextForFrontmatter = captionText;
      }
      figureElement.remove(); // Remove the figure from the parsed HTML structure
    }


    // Trucated first paragraph for Description (TODO: use AI summary)
    const firstParagraph = root.querySelector('p');
    if (firstParagraph) {
      frontmatterDescription = firstParagraph.innerText.trim().substring(0, 200); // Limit length
    }

    // Sanitize frontmatterDescription for YAML (escape double quotes, newlines)
    frontmatterDescription = frontmatterDescription.replace(/"/g, '\\"').replace(/\n/g, ' ');

    // Convert the rest of the HTML (after figure removal) to Markdown
    bodyMarkdown = turndownService.turndown(root.innerHTML);
  }

  // Ensure title is also YAML safe
  const safeTitle = article.title.replace(/"/g, '\\"');

  const contentHash = generateContentHash(article);

  return (
    `---\n` +
    `title: ${safeTitle}\n` +
    `description: ${frontmatterDescription}\n` +
    `url: ${article.externalUrl}\n` +
    `source: ${article.source}\n` +
    `organization: ${article.organization}\n` +
    `repostedDate: ${article.repostedDate}\n` +
    `${tagsSection}` +
    `sourcePublishDate: ${article.sourcePublishDate || ''}\n` +
    `author: ${article.author || ''}\n` +
    `contentHash: ${contentHash}\n` +
    `---\n\n` +
    `${figureMarkdown}` + // Prepend the figure Markdown
    `${bodyMarkdown}`
  );
}
