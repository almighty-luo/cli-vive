import download from "./download/index"
import handleTemplate from "./handleTemplate/index"
import deleteFile from "./deleteFlie/index"
import Central from "../central"
/* 入口文件 */
async function main() {
	/* 读取配置文件 */
	const downloadCentral: Central = await download()
	const handleTemplateCentral: Central = await handleTemplate(downloadCentral)
	deleteFile(handleTemplateCentral)
}

main()

export {}
