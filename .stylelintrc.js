/** @type {import('stylelint').Config} */
export default {
  // Start with a recommended base configuration
  extends: [
    'stylelint-config-standard',
    'stylelint-config-standard-scss', // For standard CSS rules
    'stylelint-config-recommended-scss', // Uncomment if you're using SCSS
  ],
  rules: {
    // Your custom rules or overrides go here
    'block-no-empty': true, // Example: disallow empty blocks
    'max-nesting-depth': 3, // Example: limit nesting depth
    // 'selector-class-pattern': '^[a-z][a-zA-Z0-9]+$', // Example: BEM-like class pattern
  },
  overrides: [
    {
      files: ['*.vue', '**/*.vue'],
      extends: ['stylelint-config-recommended-vue/scss', 'stylelint-config-standard-vue', 'stylelint-config-html/vue'],
      // rules: require("./vue-specific-rules"),
    },
  ],
  // ignoreFiles: ['node_modules/**', 'dist/**'], // Optional: specify files/folders to ignore
};
