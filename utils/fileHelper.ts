import * as fs from 'node:fs';
import * as path from 'node:path';
import type { Article } from '../types/article.d.ts';

export function getExistingContentHash(filePath: string): string | null {
  if (!fs.existsSync(filePath)) return null;

  const content = fs.readFileSync(filePath, 'utf8');
  const match = content.match(/contentHash: ([a-f0-9]+)/);
  return match ? match[1] : null;
}

export function shouldUpdateContent(article: Article, filePath: string, newHash: string): boolean {
  const existingHash = getExistingContentHash(filePath);
  return !existingHash || existingHash !== newHash;
}

function isAggregatedContent(fileContent: string): boolean {
  return /contentHash: [a-f0-9]+/.test(fileContent);
}

function getBodyWordCount(fileContent: string): number {
  const frontmatterEnd = fileContent.indexOf('---', fileContent.indexOf('---') + 3);
  if (frontmatterEnd === -1) return 0;

  const body = fileContent.slice(frontmatterEnd + 3);
  const plainText = body
    .replace(/!\[.*?\]\(.*?\)/g, '')
    .replace(/\[([^\]]*)\]\(.*?\)/g, '$1')
    .replace(/#{1,6}\s*/g, '')
    .replace(/[*_~`>|=-]+/g, ' ')
    .replace(/\n/g, ' ');

  return plainText.split(/\s+/).filter((w) => w.length > 0).length;
}

export function removeEmptyContent(contentDir: string, minWords = 100): void {
  const files = fs.readdirSync(contentDir).filter((f) => f.endsWith('.md'));

  for (const file of files) {
    const filePath = path.join(contentDir, file);
    const content = fs.readFileSync(filePath, 'utf8');

    if (!isAggregatedContent(content)) continue;

    if (getBodyWordCount(content) < minWords) {
      fs.unlinkSync(filePath);
      console.log(`[REMOVE] ${file} (insufficient content)`);
    }
  }
}
