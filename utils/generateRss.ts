import * as path from 'node:path';
import { fileURLToPath } from 'node:url';
import { buildRssFromContent } from './rssFeed.ts';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

(async () => {
  const contentDir = path.join(__dirname, '../content');
  const outputPath = path.join(__dirname, '../public/rss.xml');

  console.log('[RSS] Starting RSS feed generation...');
  const count = await buildRssFromContent(contentDir, outputPath);
  console.log(`[RSS] Completed RSS feed generation (${count} articles).`);
})();

