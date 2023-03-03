import { red, green, yellow, black, white } from "ansis/colors"
// import { LogColor } from "../types"
// import type { Text } from "../types/type"
console.log(red)
class Log {
	public red = red
	public green = green
	public yellow = yellow
	public black = black
	public white = white
	/* 错误 ---红色 */
	// get red(text: Text | LogColor) {
	// 	// let show
	// 	// if (typeof text !== "object") {
	// 	// }
	// 	// show = red(text)
	// 	console.log(text)
	// 	return this
	// }
	// /* 警告 ---黄色 */
	// yellow(text: Text | LogColor) {
	// 	// console.log(yellow(text))
	// 	return this
	// }
	// /* 成功 ---绿色 */
	// green(text: Text | LogColor) {
	// 	// console.log(green(text))
	// 	return this
	// }
	// /* 区分 ---黑色 */
	// black(text: Text | LogColor) {
	// 	// console.log(black(text))
	// 	return this
	// }
	// /* 原生log */
	// white(text: Text | LogColor) {
	// 	// console.log(white(text))
	// 	return this
	// }
}

export default Log
