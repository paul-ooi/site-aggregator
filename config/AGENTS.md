# Configuration — Agent Instructions

> Directory: `config/`  
> Inherits from root: [../AGENTS.md](../AGENTS.md)

This directory stores data source configurations and metadata consumed by the content aggregation pipeline.

---

## 1. File Inventory & Schema

- **`sources.json`**: An array of `Source` objects defining feeds, scraper targets, and direct articles.

### Source Object Schema

```json
{
  "type": "rss" | "html" | "direct" | "custom",
  "name": "Human-Readable Source Name",
  "url": "https://example.com/feed or https://example.com/blog",
  "description": "Short description of the source",
  "language": "en",
  "tags": "accessibility,technology",
  "organization": "Optional Org Name",
  "fieldMappings": {
    "description": "content:encoded",
    "summary": "description",
    "rawDescriptionHtml": "content:encoded"
  },
  "contentParsers": {
    "index": {
      "linkSelector": "a.article-link",
      "linkAttribute": "href"
    },
    "article": {
      "contentSelector": "#article-body",
      "fields": {
        "title": { "selector": "h1.entry-title" },
        "sourcePublishDate": { "selector": "time.published" },
        "author": { "selector": ".author-name" }
      }
    }
  }
}
```

---

## 2. Guidelines for Adding or Modifying Sources

1. **Verify Source Type**:
   - `rss`: Standard RSS/Atom feed parsed via `rss-parser`. Supports `fieldMappings` to normalize non-standard XML tags.
   - `html`: Paginated or index-based web page scraped via Cheerio selector rules in `contentParsers`.
   - `direct`: Single article URL scraped directly.
   - `custom`: Dedicated programmatic handler registered in `utils/sources/customSource.ts`.
2. **Validate Selectors**: When adding an `html` scraper, inspect the live DOM to ensure CSS selectors uniquely match target containers without capturing navigation or ad wrappers.
3. **Tags**: Comma-separated list of lower-case strings.

---

## 3. Verification & Testing

Whenever you edit `sources.json`:

```sh
# Run source parser unit tests
pnpm test -- tests/unit/sources/

# Test collection dry-run
pnpm collect

# Verify that output markdown was generated in content/
ls -la content/
```

