# Site Aggregator

A lightweight content aggregation system that collects, stores, and displays articles from web URLs and RSS feeds, hosted on GitHub Pages as a Progressive Web Application.

## Tech Stack

- **Framework**: Nuxt.js 3
- **Language**: TypeScript
- **Styling**: SCSS
- **Build Tool**: Vite
- **Deployment**: GitHub Pages

## Project and Developer Information

[Development Guide](/docs/development.md)
[Roadmap](/docs/project-roadmap.md)

## Features

See [Work in Progress](/docs/feature-list.md)

## Project Structure

```plaintext
site-aggregator/
├── .output/
    └── public/     # public output files
├── .github/
│   └── workflows/
│       ├── build-deploy.yml
│       └── collect-content.yml
├── components/     # Vue components
├── composables/    # Nuxt composables
├── pages/         # Route pages
├── collectors/    # Content collectors
├── storage/       # Storage handlers
├── docs/          # Project Documents
├── client/        # Browser utils
├── utils/         # Helper functions
├── types/            # TypeScript declarations
├── config/          # Configuration files
├── content/         # Stored articles
├── public/         # Static assets
├── nuxt.config.ts  # Nuxt configuration
├── tsconfig.json   # TypeScript configuration
└── package.json
```
