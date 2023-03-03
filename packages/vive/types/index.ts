import type { Text } from "./type"
export interface Option {
	cmdPath: string
	project: string
	logType: "log" | "txt"
	templatePath: string
}

export interface SelecItem {
	type: string
	tip: string
	values?: string | boolean | Array<number>
}

export interface LogColor {
	red?: Text
	green?: Text
	yellow?: Text
	black?: Text
	white?: Text
}
