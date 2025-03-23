import { createConfigForNuxt } from '@nuxt/eslint-config'

export default createConfigForNuxt({
    features: {
        stylistic: {
            semi: true,
            indent: 2,
            quotes: 'single',
            arrowParens: true,
            commaDangle: 'only-multiline'
        }
      }
})
// Override some rules in a specific config, based on their name
.override('nuxt/typescript', {
    rules: {
      // ...Override rules, for example:
    //   '@typescript-eslint/ban-types': 'off'
    }
  })