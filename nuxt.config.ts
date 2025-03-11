// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: true,
  // Build settings
  app: {
    // baseURL: '/',
    head: {
      title: 'Site Aggregator',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Content aggregation system' }
      ]
    }
  },

  // // Module configuration
  // modules: [
  //   '@nuxt/content'
  // ],

  // Style configuration
  css: [
    '~/assets/styles/main.scss'
  ],

  // Runtime configuration
  runtimeConfig: {
    public: {
      baseURL: (process.env.NODE_ENV == 'production') ? '/' : 'http://localhost:3000'
    }
  },

  // Build optimization
  nitro: {
    static: true,
    compressPublicAssets: true,
    prerender: {
      routes: ['/']
    }
  },

  // TypeScript settings
  typescript: {
    strict: true,
    typeCheck: true,
    tsConfig: {
    compileOnSave: true,
      compilerOptions: {
        target: 'esnext',
        module: 'es6',
        strict: true,
        esModuleInterop: true,
        sourceMap: true,
        types:[
          "node",
          "nuxt",
          "@types/node",
          "vitest"
        ],
      }
    }
  },
  compatibilityDate: '2025-03-08'
})