import type { Source } from '@appTypes/source.d.ts';
import type { Article } from '@appTypes/article.d.ts';
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
        const potentialValue = (item as any)[sourceField];
        if (typeof potentialValue === 'string' && potentialValue.trim() !== '') {
          value = potentialValue;
          break;
        }
      }
    }

    if (!value) { // If mapping didn't yield a value, or no mapping provided, try defaults
      for (const sourceField of defaultSourceFields) {
        const potentialValue = (item as any)[sourceField];
        if (typeof potentialValue === 'string' && potentialValue.trim() !== '') {
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
      const description = this.getFieldValue(item, 'description', ['content', 'description']); // Default: content then description
      const externalUrl = this.getFieldValue(item, 'externalUrl', ['link', 'guid']);
      const sourcePublishDate = this.getFieldValue(item, 'sourcePublishDate', ['isoDate', 'pubDate']);
      const author = this.getFieldValue(item, 'author', ['creator', 'author', 'dc:creator']);
      const summary = this.getFieldValue(item, 'summary', ['contentSnippet', 'description']); // Default: contentSnippet then description
      const rawDescriptionHtml = this.getFieldValue(item, 'rawDescriptionHtml', ['content', 'description']); // Default: contentSnippet then description

      // Handle tags (categories) - they are often arrays or need special parsing
      let itemCategories: any[] | string | undefined;
      const tagsMappingKey = this.fieldMappings?.tags;
      if (tagsMappingKey && (item as any)[Array.isArray(tagsMappingKey) ? tagsMappingKey[0] : tagsMappingKey] !== undefined) { // Simplified check for brevity
        itemCategories = (item as any)[Array.isArray(tagsMappingKey) ? tagsMappingKey[0] : tagsMappingKey];
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
