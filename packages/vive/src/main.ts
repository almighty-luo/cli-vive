const { hasOptionFile } = require('../utils')

/* 入口文件 */
function main(): void {
	/* 读取配置文件 */
	const optionData = hasOptionFile()
	console.log(optionData)
}

main()

export {}
