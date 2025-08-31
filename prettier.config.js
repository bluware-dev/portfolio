/**
 * @see https://prettier.io/docs/configuration
 * @type {import("prettier").Config}
 */
const config = {
	plugins: ['prettier-plugin-tailwindcss'],
	// Minimal
	trailingComma: 'es5',
	singleQuote: true,
	useTabs: true,
	tabWidth: 4,
	semi: true,
};

export default config;
