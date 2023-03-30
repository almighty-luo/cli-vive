import { outputFileSync, pathExistsSync } from "fs-extra"
import axios, { AxiosResponse } from "axios"
import type { Answers } from "inquirer"
import { join } from "path"
import Loading from "../utils/loading"
import Inquirer from "../utils/inquirer"
import type { UserCliConfigJson, DefalueCliConfigJson } from "../types"
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

/* 获取用户配置文件 */
export async function getOptionOfFile(): Promise<UserCliConfigJson> {
	const filePath = join(processCwd(), "cli.config.json")
	const option: UserCliConfigJson = await (hasOptionFile(filePath) ? import(filePath) : import("../cli.config.json"))
	return option
}

/* 获取系统默认配置文件 */
export async function getDefaultOptionOfFile(): Promise<DefalueCliConfigJson> {
	const option: DefalueCliConfigJson = (await import("../cli.config.json")) as DefalueCliConfigJson
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

export function loading(text = "加载中...") {
	return new Loading(text)
}

/**
 * @description: 除去不需处理的文件(文件名或文件后缀)
 * @return boolean
 * @param {string} key
 * @param {Array} renderIgnoreList
 */
export function noHas(key: string, renderIgnoreList: Array<string>): boolean {
	if (renderIgnoreList.includes(key)) return true //判断文件名
	return renderIgnoreList.includes(key.substring(key.lastIndexOf("."))) //判断文件后缀
}

/* 递归处理http方式获取 */
export async function typeHttpDownload(
	url: string,
	answers: Answers
): Promise<{ type: "git" | "http"; address: string }> {
	const loading = new Loading("正在获取下一个选择项")
	const { data } = await axios.post<
		unknown,
		AxiosResponse<{ inquirerData?: Answers; type: "http"; address: string }>
	>(url, answers)
	loading.close()
	const { inquirerData, type, address } = data
	if (inquirerData) {
		const inquirer: Inquirer = new Inquirer(inquirerData)
		const inquirerInputData = (await inquirer.prompt()) as Answers
		return await typeHttpDownload(address, inquirerInputData)
	} else {
		return {
			type,
			address
		}
	}
}
export default {
	hasOptionFile,
	getOptionOfFile,
	processCwd,
	outputFile,
	formatDate,
	loading,
	typeHttpDownload
}
