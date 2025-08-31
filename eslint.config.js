import js from '@eslint/js';
import { defineConfig, globalIgnores } from 'eslint/config';
import prettier from 'eslint-config-prettier';
import importPlugin from 'eslint-plugin-import';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import globals from 'globals';

export default defineConfig([
	globalIgnores(['dist']),
	{
		files: ['**/*.{js,jsx}'],
		extends: [
			js.configs.recommended,
			reactHooks.configs['recommended-latest'],
			reactRefresh.configs.vite,
			prettier,
		],
		plugins: {
			import: importPlugin,
		},
		languageOptions: {
			globals: globals.browser,
			parserOptions: {
				ecmaVersion: 'latest',
				ecmaFeatures: { jsx: true },
				sourceType: 'module',
			},
		},
		rules: {
			'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],

			// Asegurar tabs = 4
			indent: ['error', 'tab', { SwitchCase: 1 }],
			'no-mixed-spaces-and-tabs': ['error', 'smart-tabs'],

			// Imports
			'import/order': [
				'error',
				{
					groups: [
						['builtin', 'external'], // react, libs
						['internal'], // @/...
						['parent', 'sibling', 'index'],
					],
					pathGroups: [
						{
							pattern: '@/**/templates/**',
							group: 'internal',
							position: 'after',
						},
						{
							pattern: '@/**/hooks/**',
							group: 'internal',
							position: 'after',
						},
						{
							pattern: '@/**/context/**',
							group: 'internal',
							position: 'after',
						},
					],
					pathGroupsExcludedImportTypes: ['builtin'],
					'newlines-between': 'always',
					alphabetize: { order: 'asc', caseInsensitive: true },
				},
			],
		},
	},
]);
