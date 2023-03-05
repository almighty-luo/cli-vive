import { join } from "path"
import { red, green, yellow, black, white } from "ansis/colors"
import type { Text } from "../types/type"
import { outputFile, formatDate } from "../utils"
import Central from "../central"
class Log {
	public red = red
	public green = green
	public yellow = yellow
	public black = black
	public white = white
	public central: Central
	private _logNum = 0
	constructor(central: Central) {
		this.central = central
	}
	/* 错误 ---红色 */
	public logRed(text: Text) {
		console.log(`${red}${text}`)
		return this
	}
	/* 警告 ---黄色 */
	public logYellow(text: Text) {
		console.log(`${yellow}${text}`)
		return this
	}
	/* 成功 ---绿色 */
	public logGreen(text: Text) {
		console.log(`${green}${text}`)
		return this
	}
	/* 区分 ---黑色 */
	public logBlack(text: Text) {
		console.log(`${black}${text}`)
		return this
	}
	/* 白色 */
	public logWhite(text: Text) {
		console.log(`${white}${text}`)
		return this
	}
	/* 原生log */
	public log(text: Text) {
		console.log(text)
		return this
	}
	/* 获取日志方式 */
	public isLogOutFife() {
		return this.central.logType === "txt"
	}
	/* 输入到txt文件 */
	public outLogTxt(text: Text) {
		const { cmdPath, project } = this.central
		const file = join(cmdPath, project, "log.txt")
		const content = `${this._logNum++}. ${text} --${formatDate(new Date())}\r`
		outputFile(file, content)
	}
}

export default Log
