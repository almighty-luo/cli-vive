module.exports = {
	root: true,
	env: {
		node: true,
		es2021: true
	},
	parser: '@typescript-eslint/parser',
	extends: ['plugin:@typescript-eslint/recommended', 'prettier', 'plugin:prettier/recommended'],
	plugins: ['prettier'],
	parserOptions: {
		ecmaVersion: 2020
	},
	rules: {
		'@typescript-eslint/no-inferrable-types': 0,
		'@typescript-eslint/no-var-requires': 0,
		'no-var': 2,
		eqeqeq: [
			'error',
			'always',
			{
				null: 'ignore'
			}
		],
		'prettier/prettier': [
			1,
			{
				endOfLine: 'auto',
				// 使用单引号
				singleQuote: true,
				printWidth: 140, // 超过最大值换行
				tabWidth: 2, // tab键宽度，默认为4
				useTabs: true, // 使用tab（制表符）缩进而非空格
				semi: false, // 行末是否加分号
				trailingComma: 'none', // 最后一个对象元素加逗号
				bracketSpacing: true // 对象，数组加空格
			}
		]
	}
}
