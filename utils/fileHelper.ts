import * as fs from 'node:fs';
import * as path from 'node:path';
import { Article } from '@appTypes/article.d.ts';

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
