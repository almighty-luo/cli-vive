import Central from "../central"

export interface CasOption {
	p: string
	log: string
	out?: string
	httpAddress?: string
	gitAddres: string
}
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

/* 生命周期函数集 */
export interface LifeCycleCollect {
	beforeCreate: (central: Central) => void
	beforeMove: (central: Central) => void
	moved: (central: Central) => void
}
