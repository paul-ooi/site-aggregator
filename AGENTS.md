# Site Aggregator — Agent Instructions

> Lightweight content aggregation system built with Nuxt 3, TypeScript, and Nuxt Content, deployed to GitHub Pages.

This file provides operational instructions for AI coding agents working on this codebase. It serves as the root configuration in a hierarchical inheritance model.

---

## 1. Setup, Build & Dev Commands

```sh
# Dependencies
pnpm install

# Development server (runs at http://localhost:3000)
pnpm dev

# Content collection pipeline (crawls RSS/HTML sources and writes content/*.md)
pnpm collect

# Static build & generation for GitHub Pages
pnpm generate:production

# Preview generated build
pnpm preview

# Clean build artifacts
pnpm clean
```

---

## 2. Verification, Lint & Test Commands

Run these exact commands to verify code changes:

```sh
# Typecheck
pnpm typecheck

# Code linting (ESLint + Stylistic rules)
pnpm lint
pnpm lint:fix

# Style linting (Stylelint for SCSS and Vue components)
pnpm lint:style
pnpm lint:style:fix

# Formatting (Prettier)
pnpm format

# Unit tests (Vitest + happy-dom)
pnpm test
pnpm test:coverage

# E2E tests (Playwright)
pnpm test:e2e
```

---

## 3. Definition of Done

A task or pull request is complete ONLY when ALL of the following criteria are met:

1. `pnpm typecheck` exits `0` with zero TypeScript compiler errors.
2. `pnpm lint` and `pnpm lint:style` exit `0` with zero linting errors or warnings.
3. `pnpm test` exits `0` with all unit tests passing.
4. If modifying routes, pages, or components: relevant E2E tests in `tests/e2e/` pass (`pnpm test:e2e`).
5. All code adheres to [STYLES.md](./STYLES.md) and architectural patterns in [ARCHITECTURE.md](./ARCHITECTURE.md).
6. Git commit messages follow the repository standard: concise first line, optional blank line, descriptive bullet points.

---

## 4. Code & Commit Conventions

- **Naming**:
  - Variables and functions: `camelCase` (descriptive).
  - Classes and Vue Components: `TitleCase` / `PascalCase`.
  - Enums and constants: `UPPER_SNAKE_CASE`.
- **Comments**:
  - Do not state the obvious.
  - Explain *why* (rationale, non-trivial algorithms, or constraints), not *what*.
- **Commits**:
  - First line concise (< 72 chars).
  - Multi-line description if necessary to document reasoning.

---

## 5. When Blocked (Escalation & Safety Rules)

- **Never**:
  - Delete tests or disable lint rules to force a build to pass.
  - Manually edit files in `content/` to fix crawler output issues — fix the collector/parser in `utils/sources/` instead.
  - Modify `pnpm-lock.yaml` manually or force downgrade major dependencies.
- **If stuck**:
  - If tests fail after 2 attempts, inspect the test mock or DOM state and report exact test assertion output.
  - If a source scraping selector breaks, check the source URL structure or debug with a dedicated test in `tests/unit/sources/`.

---

## 6. Hierarchical AGENTS.md Navigation

Directories with specialized AGENTS files inherit and extend this root file:

- **[components/AGENTS.md](./components/AGENTS.md)** — Vue 3 SFC guidelines, props/emits, accessibility, scoped SCSS.
- **[config/AGENTS.md](./config/AGENTS.md)** — Feed/source configuration format (`sources.json`) and crawler rules.
- **[pages/AGENTS.md](./pages/AGENTS.md)** — Nuxt file-based routing, dynamic `[...slug].vue`, Nuxt Content queries.
- **[utils/AGENTS.md](./utils/AGENTS.md)** — Node.js aggregation CLI, source parsers (`rssSource`, `htmlSource`, `directSource`), file helpers.
- **[tests/AGENTS.md](./tests/AGENTS.md)** — Vitest unit and Playwright E2E test organization and practices.

---

## 7. Reference Documents

- **[ARCHITECTURE.md](./ARCHITECTURE.md)** — Comprehensive architecture, tech stack versions, directory map, data flow.
- **[STYLES.md](./STYLES.md)** — Detailed code style, SCSS guidelines, Prettier/ESLint rules, accessibility standards.
- **[docs/](./docs/)** — Project roadmap, feature checklists, and technical exploration documents.
