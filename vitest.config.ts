import { defineConfig } from 'vitest/config';
import { fileURLToPath } from 'node:url';

export default defineConfig({
  test: {
    environment: 'happy-dom',
    include: ['tests/unit/**/*.test.ts'],
  },
  resolve: {
    alias: {
      '@appTypes': fileURLToPath(new URL('./types', import.meta.url)),
      '@sources': fileURLToPath(new URL('./utils/sources', import.meta.url)),
    },
  },
});
