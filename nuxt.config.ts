// https://nuxt.com/docs/api/configuration/nuxt-config
import { fileURLToPath } from 'node:url';
import { globSync } from 'glob';

// prep content files for prerendering
const contentFiles = globSync('./content/**/*.md').map((path) =>
  path.slice(7, -3).replace(/\d+\./g, '').replace(/\\/g, '/')
);
console.log('Content files found:', contentFiles);

export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,

  alias: {
    // must prefix with ~ to avoid conflicting with nuxt aliases
    '~components': fileURLToPath(new URL('./components', import.meta.url)),
    '~composables': fileURLToPath(new URL('./composables', import.meta.url)),
    '~images': fileURLToPath(new URL('./assets/images', import.meta.url)),
    '~styles': fileURLToPath(new URL('./assets/styles', import.meta.url)),
    '~scripts': fileURLToPath(new URL('./assets/scripts', import.meta.url)),
    '~types': fileURLToPath(new URL('./types', import.meta.url)),
  },
  // Build settings
  app: {
    // baseURL: '/site-aggregator',
    head: {
      title: 'Site Aggregator',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Content aggregation system' },
      ],
    },
  },
  // Module configuration
  modules: ['@nuxt/eslint', '@nuxt/content'],

  // Style configuration
  css: ['~/assets/styles/main.scss'],

  // Runtime configuration
  runtimeConfig: {
    public: {
      baseURL: process.env.NODE_ENV == 'production' ? '/site-aggregator/' : 'http://localhost:3000',
    },
  },

  // Build optimization
  nitro: {
    static: true,
    compressPublicAssets: true,
    prerender: {
      routes: ['/', 'articles', ...contentFiles],
      crawlLinks: true,
    },
    timing: true,
    hooks: {
      'rollup:before': (nitro) => {
        console.log('Starting build process...');
      },
      'prerender:routes': (routes) => {
        console.log('Routes to prerender:', routes);
      },
    },
  },

  // TypeScript settings
  typescript: {
    strict: true,
    typeCheck: true,
    tsConfig: {
      compileOnSave: true,
      compilerOptions: {
        target: 'esnext',
        module: 'esnext',
        strict: true,
        esModuleInterop: true,
        sourceMap: true,
        types: ['node', 'nuxt', '@types/node', 'vitest'],
      },
    },
  },

  compatibilityDate: '2025-03-08',
});
