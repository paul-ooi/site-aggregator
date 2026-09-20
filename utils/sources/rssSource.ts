import type { Source } from '../../types/source.d.ts';
import type { Article } from '../../types/article.d.ts';
import Parser from 'rss-parser';

const parser = new Parser();

// Interface for the field mappings from feeds.json
interface FieldMappings {
  title?: string | string[];
  description?: string | string[]; // For Article.description (main content)
  externalUrl?: string | string[];
  sourcePublishDate?: string | string[];
  author?: string | string[];
  tags?: string | string[]; // For Article.tags (from item.categories or similar)
  summary?: string | string[];  // For Article.summary
  rawDescriptionHtml?: string | string[]; // For Article.rawDescriptionHtml
}

export class RSSSource implements Source {
  constructor(
    public url: string,
    public rssName: string,
    private fieldMappings?: FieldMappings,
  ) {}

  /**
   * Converts an rss-parser field value to text. rss-parser usually yields
   * strings, but namespaced fields and categories can surface as numbers or
   * objects ({name, _, $text}), which a string-only check would drop.
   */
  private toTextValue(raw: unknown): string {
    if (typeof raw === 'string') return raw;
    if (typeof raw === 'number' || typeof raw === 'boolean' || typeof raw === 'bigint') return String(raw);
    if (Array.isArray(raw)) {
      for (const entry of raw) {
        const text = this.toTextValue(entry);
        if (text.trim() !== '') return text;
      }
      return '';
    }
    if (raw && typeof raw === 'object') {
      const obj = raw as Record<string, unknown>;
      for (const key of ['name', '_', '$text', '#text', 'content', 'value']) {
        if (key in obj) {
          const text = this.toTextValue(obj[key]);
          if (text.trim() !== '') return text;
        }
      }
    }
    return '';
  }

  /**
   * Helper to get a value from an RSS item based on mappings or defaults.
   * @param item The RSS item from rss-parser.
   * @param articleField The Article property we are trying to populate.
   * @param defaultSourceFields An array of rss-parser item field names to try as defaults.
   * @returns The extracted string value or an empty string.
   */
  private getFieldValue(item: Parser.Item, articleField: keyof FieldMappings, defaultSourceFields: string[]): string {
    const mapping = this.fieldMappings?.[articleField];
    let value = '';

    if (mapping) {
      const fieldsToTry = Array.isArray(mapping) ? mapping : [mapping];
      for (const sourceField of fieldsToTry) {
        // rss-parser items can have arbitrary keys, especially with namespaces
        const potentialValue = this.toTextValue((item as any)[sourceField]);
        if (potentialValue.trim() !== '') {
          value = potentialValue;
          break;
        }
      }
    }

    if (!value) { // If mapping didn't yield a value, or no mapping provided, try defaults
      for (const sourceField of defaultSourceFields) {
        const potentialValue = this.toTextValue((item as any)[sourceField]);
        if (potentialValue.trim() !== '') {
          value = potentialValue;
          break;
        }
      }
    }
    return value;
  }

  async fetchArticles(): Promise<Article[]> {
    const feed = await parser.parseURL(this.url);
    return feed.items.map((item) => {
      const title = this.getFieldValue(item, 'title', ['title']);
      // Prefer the full body (content:encoded) over the excerpt (content/description).
      // WordPress feeds carry both: content:encoded ~10k chars vs content ~340 chars.
      const description = this.getFieldValue(item, 'description', ['content:encoded', 'content', 'description']);
      const externalUrl = this.getFieldValue(item, 'externalUrl', ['link', 'guid']);
      const sourcePublishDate = this.getFieldValue(item, 'sourcePublishDate', ['isoDate', 'pubDate']);
      const author = this.getFieldValue(item, 'author', ['creator', 'author', 'dc:creator']);
      const summary = this.getFieldValue(item, 'summary', ['contentSnippet', 'description']); // Default: contentSnippet then description
      const rawDescriptionHtml = this.getFieldValue(item, 'rawDescriptionHtml', ['content:encoded', 'content', 'description']); // Default: full body, then excerpt fallbacks

      // Handle tags (categories) - they are often arrays or need special parsing
      let itemCategories: any[] | string | undefined;
      const tagsMappingKey = this.fieldMappings?.tags;
      if (tagsMappingKey) {
        const keysToTry = Array.isArray(tagsMappingKey) ? tagsMappingKey : [tagsMappingKey];
        for (const key of keysToTry) {
          const candidate = (item as any)[key];
          if (candidate !== undefined && candidate !== null && candidate !== '') {
            itemCategories = candidate;
            break;
          }
        }
        if (itemCategories === undefined) {
          itemCategories = item.categories; // Default
        }
      } else {
        itemCategories = item.categories; // Default
      }

      let tags: string[] = [];
      if (Array.isArray(itemCategories)) {
        tags = itemCategories
          .map(cat => (typeof cat === 'string' ? cat.trim() : (cat.name || cat._ || '').trim()))
          .filter(Boolean) // Remove empty or null tags
          .filter(tag => tag.toLowerCase() !== 'uncategorized'); // Remove "Uncategorized"
      } else if (typeof itemCategories === 'string') {
        tags = itemCategories
          .split(',')
          .map(t => t.trim())
          .filter(Boolean) // Remove empty or null tags
          .filter(tag => tag.toLowerCase() !== 'uncategorized'); // Remove "Uncategorized"
      }

      return {
        title,
        description,
        externalUrl,
        internalUrl: '', // Remains generated or empty
        source: feed.link || '', // Feed's main link
        organization: feed.title || this.rssName || '', // Feed's title
        repostedDate: new Date().toISOString(),
        sourcePublishDate,
        author,
        tags,
        summary,
        rawDescriptionHtml,
        sourceType: 'rss',
      };
    });
  }
}
