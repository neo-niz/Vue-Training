// eslint.config.js
import { defineConfig, globalIgnores } from 'eslint/config'
import globals from 'globals'
import js from '@eslint/js'
import pluginVue from 'eslint-plugin-vue'
import pluginPrettier from 'eslint-plugin-prettier'
import prettier from 'eslint-config-prettier'

export default defineConfig([
  // Files ESLint should lint
  {
    files: ['**/*.{js,jsx,ts,tsx,vue}'],
  },

  // Ignore build and test output
  globalIgnores(['**/dist/**', '**/node_modules/**', '**/coverage/**']),

  // Global language options
  {
    languageOptions: {
      globals: globals.browser,
    },
  },

  // JavaScript recommended rules
  js.configs.recommended,

  // Vue 3 recommended rules
  ...pluginVue.configs['flat/recommended'],

  // Prettier plugin (integrate Prettier with ESLint)
  {
    plugins: {
      prettier: pluginPrettier,
    },
    rules: {
      'prettier/prettier': 'error',
    },
  },

  // Disable ESLint rules that conflict with Prettier formatting
  prettier,
])
