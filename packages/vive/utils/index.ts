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

export default {
	hasOptionFile,
	getOptionOfFile,
	processCwd,
	outputFile
}
