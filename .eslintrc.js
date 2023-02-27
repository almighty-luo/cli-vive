module.exports = {
	root: true,
	env: {
		node: true,
		es2021: true,
	},
	parser: "@typescript-eslint/parser",
	extends: [
		"plugin:@typescript-eslint/recommended",
		"plugin:prettier/recommended",
	],
	plugins: ["prettier"],
	parserOptions: {
		ecmaVersion: 2020,
	},
	rules: {
		"@typescript-eslint/no-inferrable-types": 0,
		"@typescript-eslint/no-var-requires": 0,
		"no-var": 2,
		eqeqeq: [
			"error",
			"always",
			{
				null: "ignore",
			},
		],
		"arrow-body-style": 0,
		"class-methods-use-this": 0,
		"func-names": 0,
		"multiline-comment-style": 0,
		// 禁用 console
		"no-console": 0,
		// 禁止不必要的括号 //(a * b) + c;//报错
		// 'no-extra-parens': [2, 'functions'],
		// 禁用一成不变的循环条件
		"no-unmodified-loop-condition": 2,
		// 禁止将变量初始化为 undefined
		"no-undef-init": 2,
		// 禁止不必要的 .call() 和 .apply()
		"no-useless-call": 2,
		"prettier/prettier": 0,
		"space-before-function-paren": "off",
		// 禁用行尾空格
		"no-trailing-spaces": 2,
	},
}
