import { cac } from "cac"
import { version } from "../config/config"
import { templateDir, logType } from "../cli.config.json"
class Cas {
	public parse
	readonly version: string
	constructor() {
		const cli = cac()
		cli.command("create", "创建项目：vive create xxx")
		cli.option("--p <p>", "指定模板路径: vive create xxx --p xxx/sss", {
			default: templateDir
		})
		cli.option("--log <log>", "日志打印方式: 仅支持log和txt两种", {
			default: logType
		})
		cli.option("--out <outPath>", "输出项目地址")
		cli.option("--http <httpAddress>", "提供http接口地址")
		cli.option("--git <gitAddress>", "提供git clone地址")
		cli.help()
		cli.version(version)
		const parse = cli.parse()
		this.parse = parse
		this.version = version
	}
}

export default Cas
