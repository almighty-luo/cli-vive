import { accessSync } from "fs"
import { join } from "path"

/* 获取当前执行命令路径 */
export function processCwd(): string {
	return process.cwd()
}

/* 判断是否有配置文件 */
export function hasOptionFile(path: string): boolean {
	try {
		accessSync(path)
	} catch (error) {
		return false
	}
	return true
}

/* 获取配置 */
export async function getOptionOfFile() {
	const filePath = join(processCwd(), "cli.config.json")
	const option: object = await (hasOptionFile(filePath) ? import(filePath) : import("../cli.config.json"))
	return option
}

export default {
	hasOptionFile,
	getOptionOfFile,
	processCwd
}
