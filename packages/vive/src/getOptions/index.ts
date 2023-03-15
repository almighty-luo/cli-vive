import Cas from "../../utils/cas"
import { processCwd, getOptionOfFile, getDefaultOptionOfFile } from "../../utils"
import type { Option, CasOption, UserCliConfigJson, DefalueCliConfigJson } from "../../types"

export async function getOptions(): Promise<Option | Error> {
	/* 读取用户指令 */
	const cas: Cas = new Cas()
	const args = cas.parse.args as Array<string>
	const options = cas.parse.options as CasOption

	/* 项目名称 */
	if (!args.length) return new Error("请输入项目名称")
	const project = args[0]
	project

	/* 获取当前路径 */
	const cmdPath: string = processCwd()
	cmdPath

	/* 获取用户配置文件内容 */
	const userCliConfigJson: UserCliConfigJson = await getOptionOfFile()

	/* 获取脚手架默认配置 */
	const defaultCliConfigJson: DefalueCliConfigJson = await getDefaultOptionOfFile()
	/* 获取文件打印类型 */
	const logType: "log" | "txt" = options.log || userCliConfigJson.logType || defaultCliConfigJson.logType
	logType
	/* 获取模板项目路径 */
	const templatePath: string = options.p || userCliConfigJson.templateDir || defaultCliConfigJson.templateDir
	templatePath
	/*  */
	return new Error("请输入")
}
