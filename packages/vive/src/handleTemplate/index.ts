// 处理模板项目模块
import Central from "../../central/index"
import { outputFile } from "fs-extra"
console.log(outputFile)
function handleTemplate(central: Central): Promise<Central> {
	return new Promise((resolve, reject) => {
		console.log(central)
		console.log(resolve, reject)
	})
}
export default handleTemplate
