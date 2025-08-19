/**
 * @see https://prettier.io/docs/configuration
 * @type {import("prettier").Config}
 */
const config = {
	useTabs: true,
	tabWidth: 4,
	semi: true,
	singleQuote: true,
	trailingComma: 'es5',
	plugins: ['prettier-plugin-tailwindcss'],
};

export default config;
