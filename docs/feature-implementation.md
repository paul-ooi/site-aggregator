# Application Features & Implementation Checklist

## Core Features

- Article Collection

  - [x] RSS feed integration
  - [x] Direct URL scraping
  - [x] Scheduled content updates
  - [ ] Content deduplication (hash-based change detection exists, not cross-source dedup)

- Content Management

  - [x] Article storage system
  - [ ] Category management
  - [ ] Tag system (tags come from RSS metadata, no user management)
  - [ ] Search functionality

- User Features
  - [ ] Browser-based favorites
  - [ ] Reading history
  - [ ] Custom tags/categories
  - [ ] Feed preferences

## Component Implementation

- Navigation

  - [x] Header with navigation links (SiteNavigation.vue)
  - [ ] Search bar
  - [ ] User preferences menu

- Article Components

  - [x] ArticleCard.vue
  - [x] ArticleList.vue
  - [x] ArticleDetail — implemented as `pages/[...slug].vue`
  - [ ] ArticleFilter.vue

- User Interface
  - [ ] FavoritesList.vue
  - [ ] ReadingHistory.vue
  - [ ] TagManager.vue
  - [ ] SearchResults.vue
  - [ ] FeedSettings.vue

## TypeScript Implementation

- [x] Initial Configuration

  - [x] tsconfig.json setup
  - [x] Nuxt TypeScript settings
  - [x] ESLint TypeScript rules
  - [x] Path aliases

- Type Definitions
  - [x] Article interface
  - [ ] Feed interface (Source interface exists, no Feed-specific type)
  - [ ] Storage interfaces
  - [ ] API response types

## State Management

- Composables
  - [ ] useArticles.ts (fetching is inline in articles.vue, no dedicated composable)
  - [ ] useFavorites.ts (commented stub)
  - [ ] useStorage.ts
  - [ ] useSearch.ts

## Testing

- [x] Setup Vitest with TypeScript
- [x] Configure test environment
- [ ] Add type utilities for testing
- [ ] Add test type definitions
