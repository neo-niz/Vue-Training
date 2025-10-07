// eslint.config.js
import { defineConfig, globalIgnores } from 'eslint/config'
import globals from 'globals'
import js from '@eslint/js'
import pluginVue from 'eslint-plugin-vue'
import pluginOxlint from 'eslint-plugin-oxlint'
import prettier from '@vue/eslint-config-prettier' // disables conflicting rules

export default defineConfig([
  // Which files ESLint should check
  {
    name: 'app/files-to-lint',
    files: ['**/*.{js,mjs,jsx,vue}'],
  },

  // Which paths to ignore
  globalIgnores(['**/dist/**', '**/dist-ssr/**', '**/coverage/**']),

  // Browser globals
  {
    languageOptions: {
      globals: globals.browser,
    },
  },

  // Core JS recommendations
  js.configs.recommended,

  // Vue 3 recommendations (composition API friendly)
  ...pluginVue.configs['flat/recommended'],

  // Oxlint optional high-performance rules
  ...pluginOxlint.configs['flat/recommended'],

  // Disable ESLint rules that conflict with Prettier
  prettier,
])
