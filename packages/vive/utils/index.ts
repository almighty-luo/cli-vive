import { pathExistsSync, outputFileSync } from "fs-extra"
import { join } from "path"

/* 获取当前执行命令路径 */
export function processCwd(): string {
	return process.cwd()
}

/* 判断是否有配置文件 */
export function hasOptionFile(path: string): boolean {
	try {
		if (pathExistsSync(path)) return true
	} catch (error) {
		return false
	}
	return false
}

/* 获取配置 */
export async function getOptionOfFile() {
	const filePath = join(processCwd(), "cli.config.json")
	const option: object = await (hasOptionFile(filePath) ? import(filePath) : import("../cli.config.json"))
	return option
}

export function outputFile(file: string, text: string, flag = "a+"): void {
	outputFileSync(file, text, { flag })
}

// 日期格式化
/**
 * 时间日期转换
 * @param date 当前时间，new Date() 格式
 * @param format 需要转换的时间格式字符串
 * @description format 时间："YYYY-mm-dd HH:MM:SS"
 * @returns 返回拼接后的时间字符串
 */
export function formatDate(date: Date, format = "YYYY-mm-dd HH:MM:SS"): string {
	const opt: { [key: string]: string } = {
		"Y+": date.getFullYear().toString(), // 年
		"m+": (date.getMonth() + 1).toString(), // 月(月份从0开始，要+1)
		"d+": date.getDate().toString(), // 日
		"H+": date.getHours().toString(), // 时
		"M+": date.getMinutes().toString(), // 分
		"S+": date.getSeconds().toString() // 秒
	}
	for (const k in opt) {
		const r = new RegExp("(" + k + ")").exec(format)
		// 若输入的长度不为1，则前面补零
		if (r) format = format.replace(r[1], RegExp.$1.length === 1 ? opt[k] : opt[k].padStart(RegExp.$1.length, "0"))
	}
	return format
}

export default {
	hasOptionFile,
	getOptionOfFile,
	processCwd,
	outputFile,
	formatDate
}
