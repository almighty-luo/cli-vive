import Cas from "../../utils/cas"
import { processCwd, getOptionOfFile, getDefaultOptionOfFile, typeHttpDownload } from "../../utils"
import type { Option, CasOption, UserCliConfigJson, DefalueCliConfigJson } from "../../types"

/* 处理用户下载 */
const handCasdownload = async (
	options: CasOption,
	userCliConfigJson: UserCliConfigJson,
	defaultCliConfigJson: DefalueCliConfigJson
): Promise<{ type: string; address: string }> => {
	const { http: httpAddress, git: gitAddres } = options
	console.log("options", httpAddress, gitAddres)
	if (gitAddres) {
		//用户输入git方式
		return {
			type: "git",
			address: gitAddres
		}
	} else if (httpAddress) {
		//用户输入http方式
		const { address, type } = await typeHttpDownload(httpAddress, {})
		return {
			type,
			address
		}
	}
	const { download, address } = userCliConfigJson
	const url = address || defaultCliConfigJson.address
	if (download) {
		switch (download) {
			case "git":
				return {
					type: download,
					address: url
				}
			case "http":
				//用户输入http方式
				return await typeHttpDownload(url, {})
			default:
				break
		}
	}
	return {
		type: defaultCliConfigJson.download,
		address: defaultCliConfigJson.address
	}
}

export async function getOptions(): Promise<Option | Error> {
	/* 读取用户指令 */
	const cas: Cas = new Cas()
	const args = cas.parse.args as Array<string>
	const options = cas.parse.options as CasOption
	console.log("options", options)
	/* 项目名称 */
	if (!args.length) return new Error("请输入项目名称")
	const project = args[0]

	/* 获取当前路径 */
	const cmdPath: string = processCwd()

	/* 获取用户配置文件内容 */
	const userCliConfigJson: UserCliConfigJson = await getOptionOfFile()

	/* 获取脚手架默认配置 */
	const defaultCliConfigJson: DefalueCliConfigJson = await getDefaultOptionOfFile()
	/* 获取文件打印类型 */
	const logType: "log" | "txt" = options.log || userCliConfigJson.logType || defaultCliConfigJson.logType
	/* 获取模板项目路径 */
	const templatePath: string = options.p || userCliConfigJson.templateDir || defaultCliConfigJson.templateDir

	/* 获取输出文件路径 */
	const outPath: string = options.out || userCliConfigJson.outPath || project

	/* 确定下载方式和地址 */
	const { type, address } = await handCasdownload(options, userCliConfigJson, defaultCliConfigJson)
	console.log({
		cmdPath,
		project,
		logType,
		templatePath,
		outPath,
		type,
		address
	})
	return {
		cmdPath,
		project,
		logType,
		templatePath,
		outPath,
		type,
		address
	}
}
