// import download from "./download/index"
// import handleTemplate from "./handleTemplate/index"
// import deleteFile from "./deleteFlie/index"
// import Central from "../central"
// import Log from "../utils/log"
import type { Option } from "../types"
import { getOptions } from "../src/getOptions"

/* 入口文件 */
async function main() {
	const option: Option | Error = await getOptions()
	console.log(option)
	// if (!args.length) return new Error("请输入创建项目名称")
	/* 读取配置文件 */
	// const downloadCentral: Central = await download(args[0], options.p, options.log)
	// const handleTemplateCentral: Central = await handleTemplate(downloadCentral)
	// deleteFile(handleTemplateCentral)
}

main()

export {}
