import { red, green, yellow } from "ansis/colors"
/**
 *
 */
class Log {
	/* 错误 */
	red(text: string) {
		console.log(red(text))
		return this
	}
	/* 警告 */
	yellow(text: string) {
		console.log(yellow(text))
		return this
	}
	/* 成功 */
	green(text: string) {
		console.log(green(text))
		return this
	}
}

export default Log
