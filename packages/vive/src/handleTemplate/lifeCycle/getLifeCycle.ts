/*
 * @Description:获取生命周期函数（装饰器模式）
 * @Author: skygray
 * @Date: 2023-03-02 10:54:59
 * @LastEditTime: 2023-03-03 15:48:49
 * @LastEditors: skygray
 */
import { join } from "path"
import Central from "../../../central"
import { processCwd } from "../../../utils"

/* 生命周期函数集 */
export interface ILifeCycleCollect {
	beforeCreate: (central: Central) => void
	beforeMove: (central: Central) => void
	moved: (central: Central) => void
}

/* 获取配置生命周期函数 */
export function getLifeCycle(_target: unknown, _methodName: string, descriptor: PropertyDescriptor): void {
	/* 源函数 */
	const _origin = descriptor.value
	descriptor.value = async function (lifeCycleData: ILifeCycleCollect) {
		const lifeCycleFun = await import(join(processCwd(), "template", "cli.config", ".func.js"))
		lifeCycleData = lifeCycleFun
		_origin.call(this, lifeCycleData)
	}
}
