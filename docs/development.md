# Developer Guide

## Local Development

```sh
# Install dependencies
pnpm install

# Start development server
pnpm run dev

# Collect data and create markdown files for static site generation
# currently implemented for directSource articles
pnpm run prebuild

# Build for production
pnpm run build
```

## Deployment to Github Pages

The site is automatically deployed to GitHub Pages when:

- Changes are pushed to the `main` branch
- Content collection workflow runs on schedule
