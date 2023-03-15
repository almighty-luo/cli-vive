import Central from "../central"

export interface CasOption {
	p: string
	log: "log" | "txt"
	out?: string
	httpAddress?: string
	gitAddres: string
}

/* 中心数据初始化配置数据 */
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

/* 用户提供配置文件数据 */
export interface UserCliConfigJson {
	download?: "git" | "http" | "local"
	address?: string
	configuration?: Array<{ name?: string; type?: "git" | "http" | "local"; address?: string }>
	logType?: "txt" | "log"
	templateDir?: string
}

/* 脚手架默认提供配置文件数据 */
export interface DefalueCliConfigJson {
	download: "git"
	address: string
	logType: "log"
	templateDir: string
}
