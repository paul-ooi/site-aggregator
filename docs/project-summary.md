# Project Summary

## Overview

Site Aggregator is a lightweight content aggregation system built with Nuxt 3 and TypeScript, deployed as a static Progressive Web Application on GitHub Pages. It collects articles from RSS feeds, converts them to markdown with YAML frontmatter, and renders them using the Nuxt Content module. The current focus is aggregating accessibility-related content from sources like WebAIM and Access\*Ability.

## Project Direction

The project aims to be a privacy-first, no-account-needed reading tool that:

- Aggregates articles from configurable RSS feeds (with planned support for direct URL scraping)
- Stores content as markdown files in the repository, enabling static site generation
- Provides a responsive, offline-capable reading experience via PWA
- Keeps all user data (favorites, reading history) in the browser with no server-side tracking

See [project-roadmap.md](./project-roadmap.md) for phased milestones and [feature-list.md](./feature-list.md) for the user-facing feature overview.

## Tech Stack

| Layer         | Technology                        |
| ------------- | --------------------------------- |
| Framework     | Nuxt 3 (static site generation)  |
| Language      | TypeScript                        |
| UI            | Vue 3 single-file components      |
| Content       | Nuxt Content module (markdown)    |
| Styling       | SCSS                              |
| Build         | Vite                              |
| Testing       | Vitest                            |
| Linting       | ESLint, Prettier, Stylelint       |
| Deployment    | GitHub Pages via GitHub Actions   |
| Package Mgr   | pnpm                             |

## Architecture

```
RSS Feeds (config/feeds.json)
  -> utils/aggregator.ts (crawlFeeds)
    -> RSSSource parser (rss-parser)
      -> Filter by lastUpdated date
      -> Enrich with source metadata
      -> Convert HTML to Markdown (Turndown)
      -> Write YAML frontmatter + content to /content/*.md
        -> Nuxt Content queries collection at build time
          -> Static HTML pages deployed to GitHub Pages
```

The aggregation step runs as a prebuild script (`pnpm aggregate:build`) before `nuxt generate`. GitHub Actions handles both scheduled content collection and deployment.

## Project Structure

```
site-aggregator/
  assets/           # Cached RSS feeds, SCSS styles
  client/           # Browser-side utilities
  collectors/       # Content collector implementations
  components/       # Vue components (ArticleCard, ArticleList, SiteNavigation, Footer)
  composables/      # Nuxt composables (useArticles, useFavorites - WIP)
  config/           # JSON source configurations (feeds.json, articles.json)
  content/          # Generated markdown article files (build artifact)
  docs/             # Project documentation
  pages/            # Nuxt route pages (index, articles, [...slug])
  public/           # Static assets
  storage/          # Storage handler implementations
  types/            # TypeScript type declarations (article.d.ts)
  utils/            # Aggregation pipeline, markdown templates, file helpers
```

### Key Files

- `utils/aggregator.ts` - Entry point for the content collection pipeline
- `utils/markdownTemplate.ts` - Generates YAML frontmatter and markdown from articles
- `utils/fileHelper.ts` - File system utilities for content writing
- `config/feeds.json` - RSS feed source definitions with field mappings
- `types/article.d.ts` - Core Article type definition
- `pages/articles.vue` - Article listing page (queries Nuxt Content collection)
- `pages/[...slug].vue` - Dynamic article detail page with sidebar metadata

## Content Sources

Sources are defined in JSON config files under `config/`. Each source entry includes the feed URL, organization metadata, tags, and field mappings that normalize varying RSS structures into a consistent Article type.

Currently configured:
- **WebAIM** - Web accessibility blog
- **Access\*Ability** - Disability, DEI, and employment newsletter

## Code Structure and Approach

- Follow camelCase for functions and variables; TitleCase for classes
- Write clean, readable, concise, and accessible code
- Use the latest Nuxt 3 and TypeScript conventions
- Lint with ESLint and Prettier; style-lint SCSS/Vue with Stylelint
- Keep Git commit messages concise on the first line with descriptive detail in subsequent lines when necessary
- Explain reasoning in comments only where the logic is not self-evident
- See [feature-implementation.md](./feature-implementation.md) for the component and type implementation checklist
