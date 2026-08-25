# Style & Quality Guidelines

This document outlines the coding standards, formatting rules, accessibility practices, and linter enforcement commands for the project.

---

## 1. Naming Conventions

| Entity | Pattern | Examples |
| :--- | :--- | :--- |
| **Variables & Functions** | `camelCase` | `fetchArticleData`, `articleCount`, `sanitizeSlug` |
| **Vue Components & Classes** | `PascalCase` / `TitleCase` | `ArticleCard.vue`, `SiteNavigation.vue`, `RSSParser` |
| **TypeScript Types & Interfaces** | `PascalCase` | `Article`, `Source`, `ContentParsers` |
| **Enums & Global Constants** | `UPPER_SNAKE_CASE` | `MAX_ITEMS_PER_PAGE`, `SOURCE_TYPE` |
| **SCSS Classes** | `kebab-case` / BEM-like | `.article-card`, `.article-card__title`, `.is-active` |
| **Files & Directories** | `kebab-case` / `camelCase` | `markdownTemplate.ts`, `fileHelper.ts`, `[...slug].vue` |

---

## 2. TypeScript & JavaScript Conventions

- **Strict Mode**: Full TypeScript strict mode enabled (`noImplicitAny`, `strictNullChecks`).
- **Explicit Returns & Types**: Annotate exported functions and interface boundaries; rely on type inference for simple internal variables.
- **Imports**: Prefer ES module imports. Use configured Nuxt aliases (`~components`, `~composables`, `~styles`, `~types`) or relative imports where appropriate.
- **Code Comments**:
  - Do not restate what the code clearly does.
  - Add comments to explain non-obvious algorithms, edge case workarounds, regex patterns, or API quirks.

---

## 3. Vue 3 Single-File Components (SFC)

### Component Block Order

Structure `.vue` files in this consistent top-down order:

```vue
<script setup lang="ts">
// 1. Imports
// 2. Props (defineProps) & Emits (defineEmits)
// 3. Reactive state (ref, reactive, computed)
// 4. Methods / Handlers
// 5. Lifecycle hooks (onMounted, etc.)
</script>

<template>
  <!-- Semantic markup only -->
</template>

<style lang="scss" scoped>
// Scoped styles, importing variables if needed
</style>
```

### Component Rules
- Always use `<script setup lang="ts">` and the Vue 3 Composition API.
- Explicitly type props using TypeScript generics: `defineProps<{ article: Article; isFavorite?: boolean }>()`.
- Keep templates semantic (`<header>`, `<main>`, `<article>`, `<section>`, `<nav>`, `<aside>`, `<footer>`).

---

## 4. SCSS & CSS Architecture

- **Max Nesting Depth**: Maximum 3 levels deep to prevent high specificity and maintainable styling (enforced by Stylelint).
- **No Empty Blocks**: Enforced by Stylelint `block-no-empty`.
- **Variables First**: Global colors, spacing, and breakpoints are defined in `assets/styles/_variables.scss`. Never hardcode raw hex values when standard tokens exist.
- **Modular Styles**:
  - `_variables.scss`: Color palette, typography scales, layout dimensions.
  - `_typography.scss`: Base font families, font weights, line heights.
  - `_layout.scss`: Grid wrappers, containers, flex utilities.
  - `main.scss`: Global bundle uniting all foundational partials.

---

## 5. Accessibility (a11y) Standards

- **Semantic HTML**: Use native buttons (`<button>`) for actions and links (`<a>` / `<NuxtLink>`) for navigation. Do not use `<div @click="...">` for interactive controls.
- **ARIA**: ARIA is a supplement, not a replacement for semantics. Only use ARIA roles or `aria-label` when standard semantic tags cannot convey the accessible name or state.
- **Abbreviations**: Wrap abbreviations and acronyms with `<abbr title="...">` (e.g., `<abbr title="Too Long; Didn't Read">TLDR</abbr>`).
- **Focus & Keyboard Navigation**: Ensure all interactive elements have visible focus indicators (`:focus-visible`) and are reachable via Tab.
- **Color Contrast**: Maintain WCAG AA standard (4.5:1 for normal text, 3:1 for large text).

---

## 6. Prettier & ESLint Configuration

Formatting rules configured across `eslint.config.ts` and `prettier.config.js`:

- **Print Width**: `120` characters
- **Indentation**: `2` spaces (no tabs)
- **Quotes**: Single quotes (`'`) for JS/TS; standard HTML attributes
- **Semicolons**: Always include semicolons (`;`)
- **Trailing Commas**: ES5 style (objects, arrays, multiline parameters)
- **Arrow Function Parens**: Always include parens `(x) => x`

---

## 7. Git Commit Message Standards

Format commits with a concise summary followed by descriptive reasoning when necessary:

```
feat(sources): add html parser for gaad foundation blog

- implement custom cheerio selectors for article content extraction
- add unit test coverage in tests/unit/sources/htmlSource.test.ts
- register source in config/sources.json
```

---

## 8. Style Verification Commands

```sh
# Lint JS/TS/Vue files
pnpm lint
pnpm lint:fix

# Lint SCSS stylesheets & Vue style blocks
pnpm lint:style
pnpm lint:style:fix

# Format entire codebase
pnpm format

# Verify TypeScript types
pnpm typecheck
```

