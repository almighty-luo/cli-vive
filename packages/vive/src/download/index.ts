import Central from "../../central/index"
import { getOptionOfFile } from "../../utils"
import type { Option } from "../../types/index"

// 模板下载模块
const obj: Option = {
	cmdPath: "",
	project: "",
	logType: "log",
	templatePath: ""
}
async function download(): Promise<Central> {
	/* 获取用户输入指令 */

	/* 获取配置数据 */
	const cliConfigJson = await getOptionOfFile()
	console.log(cliConfigJson)
	return new Promise((resolve, reject) => {
		const central = new Central(obj)
		console.log(resolve, reject, central)
		resolve(central)
	})
}
export default download
