const download = require('./download/index')
const handleTemplate = require('./handleTemplate/index')
const deleteFile = require('./deleteFlie/index')
/* 入口文件 */
async function main() {
	/* 读取配置文件 */
	const downloadCentral = await download()
	const handleTemplateCentral = await handleTemplate(downloadCentral)
	deleteFile(handleTemplateCentral)
}

main()

export {}
