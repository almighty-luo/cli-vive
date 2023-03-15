// 处理模板项目模块
import { render } from "ejs"
import { outputFile } from "fs-extra"
import metalSmith from "metalsmith"
import Central from "../../central/index"
import { noHas } from "../../utils"
outputFile
function handleTemplate(central: Central): Promise<Central> {
	return new Promise((resolve, reject) => {
		central
		/* 模板所在项目 */
		const templatePath = central.templatePath
		/* 模板移动的目标目录 */
		const inDirNamePath = "" //TODO:中心数据缺失
		/* 忽略渲染的文件 */
		const renderignore = central.renderignore
		/* 渲染数据 */
		const renderData = central.renderData

		// lifeCycle.beforeCreate
		metalSmith("") //TODO:中心数据缺失
			.source(templatePath)
			.destination(inDirNamePath)
			.use(async (files, metal, done) => {
				for (const key in files) {
					if (Object.hasOwnProperty.call(files, key) && noHas(key, renderignore)) {
						const element = files[key]
						const contents = element.contents.toString()
						/* 判断是否含有模板标识符 */
						if (contents.includes("<%")) {
							const newContents = render(contents, renderData)
							element.contents = Buffer.from(newContents)
						}
					}
				}
				done(null, files, metal)
			})
			.clean(true)
			.build((err: Error | null) => {
				if (err) {
					reject(err)
				} else {
					resolve(central)
				}
			})
	})
}
export default handleTemplate
