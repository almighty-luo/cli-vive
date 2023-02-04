module.exports = {
	root: true,
	env: {
		node: true,
		es2021: true
	},
	parser: '@typescript-eslint/parser',
	extends: ['plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended'],
	plugins: ['prettier'],
	parserOptions: {
		ecmaVersion: 2020
	},
	rules: {
		'@typescript-eslint/no-inferrable-types': 0,
		'no-var': 2,
		eqeqeq: [
			'error',
			'always',
			{
				null: 'ignore'
			}
		],
		'prettier/prettier': 2
	}
}
