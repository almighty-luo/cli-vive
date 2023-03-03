import { red, green, yellow, black, white } from "ansis/colors"
import type { Text } from "../types/type"
class Log {
	public red = red
	public green = green
	public yellow = yellow
	public black = black
	public white = white
	/* 错误 ---红色 */
	logRed(text: Text) {
		console.log(`${red}${text}`)
		return this
	}
	/* 警告 ---黄色 */
	logYellow(text: Text) {
		console.log(`${yellow}${text}`)
		return this
	}
	/* 成功 ---绿色 */
	logGreen(text: Text) {
		console.log(`${green}${text}`)
		return this
	}
	/* 区分 ---黑色 */
	logBlack(text: Text) {
		console.log(`${black}${text}`)
		return this
	}
	/* 白色 */
	logWhite(text: Text) {
		console.log(`${white}${text}`)
		return this
	}
	/* 原生log */
	log(text: Text) {
		console.log(text)
		return this
	}
}

export default Log
