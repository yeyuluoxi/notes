module.exports = {
	root: true,
	env: {
		node: true,
		browser: true,
		es6: true
	},
	plugins: ['vue', '@typescript-eslint'],
	// parser: '@typescript-eslint/parser',
	parser: 'vue-eslint-parser',

	// @typescript-eslint/parser
	'extends': [
		//'plugin:vue/vue3-essential',
		'plugin:vue/vue3-recommended',
		'eslint:recommended',
		'@vue/typescript/recommended'
	],
	parserOptions: {
		"parser": "babel-eslint",
		"ecmaVersion": 2020,
		"sourceType": "module"
	},
	rules: {
		'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		"no-irregular-whitespace": "off",
		"no-mixed-spaces-and-tabs": 0
	}
}
