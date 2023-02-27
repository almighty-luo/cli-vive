import Central from "../../central/index"
import type { IOption } from "../../types/index"

// 模板下载模块
const obj: IOption = {
	cmdPath: "",
	project: "",
	logType: "log",
	templatePath: ""
}
function download(): Promise<Central> {
	return new Promise((resolve, reject) => {
		const central = new Central(obj)
		console.log(resolve, reject, central)
		resolve(central)
	})
}
export default download
