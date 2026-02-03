# Project Development Roadmap

## Phase 1: Foundation & Core Infrastructure

- [x] Project setup with Nuxt 3
- [x] TypeScript integration
- [x] GitHub Pages deployment
- [x] Basic component structure (ArticleCard, ArticleCardDetails, ArticleList, SiteNavigation, Footer)
- [x] Core type definitions (Article, FavoriteArticle, Source)
- [x] RSS feed parser (`utils/sources/rssSource.ts` — tested)
- [x] Direct URL scraper (`utils/sources/directSource.ts` — working, not yet wired into aggregator)
- [x] Markdown storage system (`aggregator.ts` + `fileHelper.ts` + content hashing)
- [x] Build optimization (caching, prerendering, asset compression)
- [x] Deployment automation (`nuxt-deploy.yaml`)
- [x] Vitest unit tests (6 test files) and Playwright E2E tests (4 spec files)
- [ ] Scheduled content collection pipeline (`collect-content.yaml` exists but script reference is broken and cron is commented out — needs `aggregate:build` integration and correct script wiring)
- [ ] CI test integration (tests exist but don't run in the deploy/collection workflows)
- [ ] Vue component tests (only util/source unit tests exist so far)

> **Note:** The `collect-content.yaml` workflow references `pnpm run collect` which doesn't exist in `package.json` — this needs to be wired to `aggregate:build` when the scheduled pipeline is built out.

## Phase 2: User Features

- [ ] Favorites system (`useFavorites.ts` is a commented stub, `ArticleCardControls.vue` is empty)
- [ ] Reading history
- [ ] Custom tags/categories
- [ ] Search functionality
- [ ] Feed preferences

## Phase 3: Content Management & PWA

- [ ] Cross-source deduplication (content hashing exists for change detection, but not true cross-source dedup)
- [ ] Auto-categorization
- [ ] PWA setup (manifest.json, service worker, @vite-pwa — zero implementation currently)
- [ ] Offline support

> **Note:** PWA is mentioned in `feature-list.md` and the README but has no implementation yet.

## Phase 4: Documentation & Release

- [x] Project README
- [x] Project summary and development docs
- [ ] API/component/type documentation
- [ ] Usage guides and contributing guide
