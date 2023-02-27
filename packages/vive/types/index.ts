export interface IOption {
	cmdPath: string
	project: string
	logType: "log" | "txt"
	templatePath: string
}

export interface ISelecItem {
	type: string
	tip: string
	values?: string | boolean | Array<number>
}
