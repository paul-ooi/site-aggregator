import { createConfigForNuxt } from '@nuxt/eslint-config';

export default createConfigForNuxt({
  features: {
    stylistic: {
      semi: true,
      indent: 2,
      quotes: 'single',
      arrowParens: true,
      commaDangle: 'only-multiline',
    },
  },
});
