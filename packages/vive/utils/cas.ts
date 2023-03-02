import { cac } from "cac"
import { version } from "../config/config"
class Cas {
	public parse
	readonly version: string
	constructor() {
		const cli = cac()
		cli.command("create", "创建项目：vive create xxx")
		cli.option("--p <p>", "指定模板路径: vive create xxx --p xxx/sss", {
			default: "template"
		})
		cli.option("--log <log>", "日志打印方式: 仅支持log和txt两种", {
			default: "log"
		})
		cli.help()
		cli.version(version)
		const parse = cli.parse()
		this.parse = parse
		this.version = version
	}
}

export default Cas
