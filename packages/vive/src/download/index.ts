import Central from "../../central/index"
import { getOptionOfFile } from "../../utils"
import type { Option } from "../../types/index"

// 模板下载模块

async function download(project: string, logType: string, templatePath: string): Promise<Central> {
	const obj: Option = {
		cmdPath: "",
		logType: logType === "txt" ? "txt" : "log",
		templatePath,
		project
	}
	/* 获取配置数据 */
	const cliConfigJson = await getOptionOfFile()
	cliConfigJson
	return new Promise((resolve, reject) => {
		const central = new Central(obj)
		resolve(central)
		reject(central)
	})
}
export default download
