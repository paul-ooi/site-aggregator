# Components — Agent Instructions

> Directory: `components/`  
> Inherits from root: [../AGENTS.md](../AGENTS.md)

This directory contains reusable Vue 3 Single-File Components (SFC) for the Site Aggregator user interface.

---

## 1. Scope & Component Inventory

| Component | Responsibility |
| :--- | :--- |
| `ArticleCard.vue` | Renders a summary card for a single article in a list |
| `ArticleCardControls.vue` | Action controls for article items (e.g. favorite toggle bookmarking) |
| `ArticleCardDetails.vue` | Metadata header view (author, date, organization badge, source link) |
| `ArticleList.vue` | Container rendering an array of `ArticleCard` items with empty states |
| `SiteNavigation.vue` | Global top navigation bar, logo, and route links |
| `Footer.vue` | Site footer with copyright, colophon link, and metadata |

---

## 2. Component Guidelines

- **Composition API**: Use `<script setup lang="ts">` exclusively.
- **Props & Emits**: Define props with strict generic types:
  ```ts
  import type { Article } from '~types/article';

  const props = defineProps<{
    article: Article;
    isFavorite?: boolean;
  }>();

  const emit = defineEmits<{
    (e: 'toggle-favorite', id: string): void;
  }>();
  ```
- **Styling**: All component styles must be scoped SCSS: `<style lang="scss" scoped>`. Import variables from `~styles/_variables.scss` if required. Keep nesting depth $\le 3$.
- **Accessibility**:
  - Use semantic elements (`<article>`, `<header>`, `<nav>`, `<button>`).
  - Provide accessible labels (`aria-label`) for icon-only buttons (e.g. favorite toggle).
  - Ensure interactive elements support keyboard activation (Enter/Space).

---

## 3. Verification Commands

When adding or modifying components:

```sh
# Typecheck component props and templates
pnpm typecheck

# Lint component scripts and templates
pnpm lint

# Lint component SCSS styles
pnpm lint:style

# Run E2E tests validating component rendering
pnpm test:e2e
```

