import download from "./download/index"
import handleTemplate from "./handleTemplate/index"
import deleteFile from "./deleteFlie/index"
import Central from "../central"
import Cas from "../utils/cas"
import Log from "../utils/log"
console.log(Log)
/* 入口文件 */
async function main() {
	/* 读取用户指令 */
	const cas = new Cas()
	const args = cas.parse.args as Array<string>
	const options = cas.parse.options as { p: string; log: string }
	if (!args.length) return
	/* 读取配置文件 */
	const downloadCentral: Central = await download(args[0], options.p, options.log)
	const handleTemplateCentral: Central = await handleTemplate(downloadCentral)
	deleteFile(handleTemplateCentral)
}

main()

export {}
