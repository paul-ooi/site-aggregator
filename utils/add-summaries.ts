import { readFileSync, writeFileSync, readdirSync } from 'fs';
import { join } from 'path';
import Anthropic from '@anthropic-ai/sdk';

const client = new Anthropic(); // uses ANTHROPIC_API_KEY env var

const CONTENT_DIR = './content';
const files = readdirSync(CONTENT_DIR).filter(f => f.endsWith('.md'));

let processed = 0;
let skipped = 0;

for (const file of files) {
  const filePath = join(CONTENT_DIR, file);
  const raw = readFileSync(filePath, 'utf-8');

  // Skip if already has summary
  if (/^summary:/m.test(raw)) {
    skipped++;
    continue;
  }

  // Extract frontmatter and body
  const match = raw.match(/^---\n([\s\S]*?)\n---\n\n?([\s\S]*)$/);
  if (!match) {
    console.warn(`⚠ Skipping (no frontmatter): ${file}`);
    skipped++;
    continue;
  }

  const [, frontmatter, body] = match;

  // Strip markdown to get plain text
  const plainText = body
    .replace(/!\[.*?\]\(.*?\)/g, '')
    .replace(/\[([^\]]*)\]\(.*?\)/g, '$1')
    .replace(/#{1,6}\s*/g, '')
    .replace(/[*_~`>|]+/g, '')
    .replace(/\n{3,}/g, '\n\n')
    .trim();

  // Count paragraphs (non-empty blocks)
  const paragraphs = plainText.split(/\n\n+/).filter(p => p.trim().length > 0);
  const isShort = paragraphs.length < 3;
  const wordLimit = isShort ? 50 : 200;

  // Call Claude for summary
  const response = await client.messages.create({
    model: 'claude-haiku-4-5-20251001',
    max_tokens: 400,
    messages: [{
      role: 'user',
      content: `Summarize this article in under ${wordLimit} words. Plain text only, no markdown. No special chars that break YAML (escape any double quotes as \\"). Be direct and informative.\n\n${plainText.substring(0, 3000)}`
    }]
  });

  const summary = (response.content[0] as { text: string }).text
    .trim()
    .replace(/"/g, '\\"')
    .replace(/\n/g, ' ');

  // Insert summary after description line
  const updatedFrontmatter = frontmatter.replace(
    /^(description:.*)/m,
    `$1\nsummary: "${summary}"`
  );

  const updatedContent = `---\n${updatedFrontmatter}\n---\n\n${body}`;
  writeFileSync(filePath, updatedContent, 'utf-8');
  processed++;
  console.log(`✓ ${file}`);
}

console.log(`\nDone: ${processed} processed, ${skipped} skipped.`);
