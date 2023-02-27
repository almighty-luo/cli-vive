import download from "./download/index"
import handleTemplate from "./handleTemplate/index"
import deleteFile from "./deleteFlie/index"
/* 入口文件 */
async function main() {
	/* 读取配置文件 */
	const downloadCentral = await download()
	const handleTemplateCentral = await handleTemplate(downloadCentral)
	deleteFile(handleTemplateCentral)
}

main()

export {}
