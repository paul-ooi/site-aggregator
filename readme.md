# Site Aggregator

A lightweight content aggregation system that collects, stores, and displays articles from web URLs and RSS feeds, hosted on GitHub Pages as a Progressive Web Application.

## Tech Stack

- **Framework**: Nuxt.js 3
- **Language**: TypeScript
- **Styling**: SCSS
- **Build Tool**: Vite
- **Deployment**: GitHub Pages

## Features

- **Multi-source Collection**
  - Direct URL scraping
  - RSS feed monitoring
  - Scheduled content updates

- **Storage & Deployment**
  - Flat file storage using Markdown
  - Automated GitHub Pages deployment
  - GitHub Actions for build and collection
  - Content deduplication

- **User Features**
  - Browser-based favorites storage
  - Reading history
  - Custom tags and categories
  - Personalized feed settings

## Project Structure

```plaintext
site-aggregator/
├── .github/
│   └── workflows/
│       ├── build-deploy.yml
│       └── collect-content.yml
├── src/
│   ├── components/     # Vue components
│   ├── composables/    # Nuxt composables
│   ├── pages/         # Route pages
│   ├── collectors/    # Content collectors
│   ├── storage/       # Storage handlers
│   ├── client/        # Browser utils
│   └── utils/         # Helper functions
├── types/            # TypeScript declarations
├── config/          # Configuration files
├── content/         # Stored articles
├── public/         # Static assets
├── nuxt.config.ts  # Nuxt configuration
├── tsconfig.json   # TypeScript configuration
└── package.json
```

## GitHub Actions Workflows
- Collect content
- Build and deploy to Github Pages

## Configuration
- Collection of RSS Feeds to check for content
- Independent article URLs to gather content from and use as reference for original source content

## Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Test GitHub Actions locally
act -j build-and-deploy
```

## Browser Storage Integration
- Local Storage for customized experience for users
```javascript
// filepath: src/client/storage.js
export class LocalStorageManager {
  constructor(storageKey = 'site-aggregator') {
    this.storageKey = storageKey;
  }

  saveFavorite(article) {
    const favorites = this.getFavorites();
    favorites.unshift({
      id: article.id,
      title: article.title,
      addedAt: new Date().toISOString(),
      tags: []
    });
    localStorage.setItem(`${this.storageKey}_favorites`, JSON.stringify(favorites));
  }

  getFavorites() {
    return JSON.parse(localStorage.getItem(`${this.storageKey}_favorites`) || '[]');
  }
}
```

## Deployment

The site is automatically deployed to GitHub Pages when:
- Changes are pushed to the main branch
- Content collection workflow runs
- Manual workflow dispatch is triggered
