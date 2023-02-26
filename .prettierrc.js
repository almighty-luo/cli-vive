module.exports = {
	printWidth: 120, // 80 每行代码长度
	tabWidth: 4, // 2 每个 tab 相当于多少个空格
	semi: false, // 句尾添加分号
	useTabs: true, // false 是否使用 tab 进行缩进
	singleQuote: false, // true 使用单引号
	trailingComma: "all", //多行时尽可能打印尾随逗号
	semi: false, // true 声明结尾使用分号
	trailingComma: "none", // none 多行抵用拖尾逗号
	bracketSpacing: true, // true 对象字面量的大括号间使用空格
	jsxSingleQuote: false,
	jsxBracketSameLine: false, // false 多行 jsx 中的 > 放在最后一行，而不是另起一行
	arrowParens: "avoid", // avoid 只有一个参数是否带圆括号
	vueIndentScriptAndStyle: true, // vue文件的script标签和Style标签下的内容需要缩进
	singleAttributePerLine: false, // 在 HTML、Vue 和 JSX 中每行强制执行单个属性
	embeddedLanguageFormatting: "auto" // 控制 Prettier 是否格式化文件中嵌入的引用代码
}
