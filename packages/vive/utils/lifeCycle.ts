import { join } from "path"
import Central from "../central"
import { LifeCycleCollect } from "../types"
class LifeCycle {
	/* 读取完配置文件后 */
	private _beforeCreate?: (central: Central) => void
	/* 未开始移动文件 */
	private _beforeMove?: (central: Central) => void
	/* render和移动文件完成 */
	private _moved?: (central: Central) => void

	constructor(central: Central) {
		this.init(central)
	}

	get beforeCreate() {
		return this._beforeCreate
	}

	get beforeMove() {
		return this._beforeMove
	}

	get moved() {
		return this._moved
	}
	/* 获取读取的生命周期 */
	private async getLifeCycle(central: Central): Promise<LifeCycleCollect | null> {
		let res = null
		const templatePath: string = central.templatePath
		const cmdPath: string = central.cmdPath
		const lifeCycleFuncPath = join(cmdPath, templatePath, "cli.config", ".func.js") //获取模板定义生命周期文件地址
		try {
			const lifeCycleFunc = await import(lifeCycleFuncPath)
			if (lifeCycleFunc) res = lifeCycleFunc
		} catch (error) {
			console.log("没有生命周期文件或文件导出错误", error)
		}
		return res
	}
	/* 查找文件夹中自定义生命周期函数并初始化 */
	private async init(central: Central): Promise<void> {
		const lifeCycle = await this.getLifeCycle(central)
		if (!lifeCycle) return
		const { beforeCreate, beforeMove, moved } = lifeCycle
		this._beforeCreate = beforeCreate
		this._beforeMove = beforeMove
		this._moved = moved
	}
}

export default LifeCycle
