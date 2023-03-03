/*
 * @Description: 生命周期类
 * @Author: skygray
 * @Date: 2023-03-02 10:51:27
 * @LastEditTime: 2023-03-03 16:11:24
 * @LastEditors: skygray
 */
import Central from "../../../central"
import { getLifeCycle, ILifeCycleCollect } from "./getLifeCycle"

class LifeCycle {
	/* 读取完配置文件后 */
	private _beforeCreate?: (central: Central) => void
	/* 未开始移动文件 */
	private _beforeMove?: (central: Central) => void
	/* render和移动文件完成 */
	private _moved?: (central: Central) => void

	constructor() {
		this.init()
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

	/* 查找文件夹中自定义生命周期函数并初始化 */
	@getLifeCycle
	private async init(lifeCycle?: ILifeCycleCollect): Promise<void> {
		if (!lifeCycle) return
		const { beforeCreate, beforeMove, moved } = lifeCycle
		this._beforeCreate = beforeCreate
		this._beforeMove = beforeMove
		this._moved = moved
	}
}

export default LifeCycle
