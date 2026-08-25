# Project Architecture & Tech Stack

## 1. System Overview

**Site Aggregator** is a lightweight, privacy-focused content aggregation system. It crawls accessibility and web engineering articles from configured RSS feeds, HTML web scrapers, and direct URLs, converts the content into structured Markdown with YAML frontmatter, and publishes a static Progressive Web Application deployed to GitHub Pages via Nuxt Content.

### Core Data Flow

```
1. Source Definitions (config/sources.json)
       │
       ▼
2. Aggregator CLI Engine (utils/aggregator.ts)
       │───► RSS Feed Parser (rss-parser)
       │───► HTML Scraper (cheerio / node-html-parser)
       │───► Direct URL Scraper (axios + turndown)
       │
       ▼
3. Content Generator (utils/markdownTemplate.ts & fileHelper.ts)
       │───► Calculate sha256 contentHash for change detection
       │───► Clean/format slug and YAML frontmatter
       │───► Write markdown files to content/*.md
       │
       ▼
4. Static Site Generation (Nuxt 3 + @nuxt/content v3)
       │───► Pages query Content collection at build time
       │───► Prerender routes: /, /articles, /<slug>
       │
       ▼
5. Deployment (.github/workflows/nuxt-deploy.yaml)
       └───► Static HTML / CSS / JS published to GitHub Pages
```

---

## 2. Tech Stack & Pinned Dependency Versions

| Layer / Tool | Technology | Version / Spec |
| :--- | :--- | :--- |
| **Runtime Environment** | Node.js | `>=20.0.0` (ES Modules) |
| **Package Manager** | pnpm | `>=10.0.0` (Lockfile v9) |
| **Web Framework** | Nuxt | `^3.10.0` |
| **UI Library** | Vue | `^3.4.0` (Composition API, `<script setup>`) |
| **Content Engine** | `@nuxt/content` | `3.4.0` |
| **CSS Preprocessor** | Sass / SCSS | `^1.70.0` |
| **Build Tool / Bundler** | Vite / Nitro | Vite `^5.0.0`, Nitro static preset |
| **Parsing & Scraping** | `cheerio`, `rss-parser`, `turndown`, `axios` | `cheerio@^1.0.0`, `rss-parser@^3.13.0`, `turndown@^7.2.0` |
| **Unit Testing** | Vitest + Happy DOM | `vitest@^1.2.0`, `happy-dom@^13.0.0` |
| **E2E Testing** | Playwright Test | `@playwright/test@^1.58.1` |
| **Linter & Formatter** | ESLint, Stylelint, Prettier | `eslint@^9.22.0`, `stylelint@^16.19.1`, `prettier@^3.2.0` |

---

## 3. Directory Map

```
site-aggregator/
├── AGENTS.md                  # Root AI coding agent operational policy
├── ARCHITECTURE.md            # Architecture, dependencies, and system overview
├── STYLES.md                  # Coding, styling, and accessibility standards
├── .github/                   # Workflows (deploy, cron scraper) and Copilot instructions
├── app.vue                    # Nuxt application root wrapper (NuxtLayout + NuxtPage)
├── assets/styles/             # SCSS stylesheets (variables, typography, layout, main.scss)
├── components/                # Vue 3 UI components (cards, lists, navigation, footer)
├── composables/               # Nuxt composables (useFavorites, state management)
├── config/                    # Aggregator source definitions (sources.json)
├── content/                   # Generated Markdown articles with YAML frontmatter
├── docs/                      # Human documentation, roadmap, feature specifications
├── pages/                     # Nuxt file-based routes (index, articles, dynamic [...slug])
├── public/                    # Static assets (images, icons)
├── tests/                     # Unit (Vitest) and End-to-End (Playwright) suites
├── types/                     # TypeScript ambient and module interfaces (article, source)
├── utils/                     # Aggregator CLI engine, parsers, templates, file helpers
├── nuxt.config.ts             # Nuxt framework, Nitro, module, and alias configuration
├── content.config.ts          # Nuxt Content v3 collection schema definition
└── package.json               # Project manifest, scripts, and dependencies
```

---

## 4. Key Architectural Files & Entry Points

- **`utils/aggregator.ts`**: Entry point for the prebuild/scheduled content collection CLI pipeline. Runs outside the Nuxt bundle with `tsx` and `utils/tsconfig.json`.
- **`config/sources.json`**: Source registry containing RSS URLs, CSS selector maps for HTML scrapers, and metadata.
- **`types/article.d.ts` & `types/source.d.ts`**: Canonical TypeScript contracts for articles, sources, parsers, and favorites.
- **`content.config.ts`**: Defines the Nuxt Content collection schema with Zod validation.
- **`pages/[...slug].vue`**: Single article viewer route rendering Nuxt Content markdown through `<ContentRenderer>`.
- **`nuxt.config.ts`**: Disables SSR (`ssr: false`), configures path aliases, nitro prerendering, `@nuxt/content`, and `@nuxt/eslint`.

---

## 5. Deployment & Automation Pipelines

- **`.github/workflows/nuxt-deploy.yaml`**: Triggers on pushes to `main`. Generates static assets using `pnpm generate:production` and deploys to GitHub Pages.
- **`.github/workflows/collect-content.yaml`**: Scheduled monthly / manual dispatch workflow that runs `pnpm collect`, commits newly scraped markdown files to `content/`, and creates a PR or pushes directly to `main`.

