import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'
import pluginReact from 'eslint-plugin-react'
import reactHooksPlugin from 'eslint-plugin-react-hooks'
import eslintReactRefresh from 'eslint-plugin-react-refresh'
import eslintPluginPrettier from 'eslint-plugin-prettier'
import eslintConfigPrettier from 'eslint-config-prettier'

/** @type {import('eslint').Linter.Config[]} */
export default [
  {files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'], ...pluginReact.configs.flat.recommended},
  {languageOptions: {globals: globals.browser, parserOptions: pluginReact.configs.recommended.parserOptions}},
  {ignores: ['node_modules', 'build', 'src/index.d.ts']},
  {
    rules: {
      ...eslintConfigPrettier.rules
    }
  },
  {
    plugins: {
      'react-hooks': reactHooksPlugin,
      'react-refresh': eslintReactRefresh,
      prettier: eslintPluginPrettier
    }
  },
  {
    settings: {
      react: {
        version: 'detect'
      }
    }
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  eslintConfigPrettier
]
