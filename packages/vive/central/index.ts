// 调度中心模块,负责公共数据和方法
import type { IOption, ISelecItem } from "../types/index"
class Central {
	readonly cmdPath: string //当前执行脚手架命令的终端路径
	readonly project: string //用户创建的文件名称或路劲
	readonly logType: string //日志模式
	templatePath: string // 用户指定启动模板项目路径

	/* 忽略文件或文件路径或文件类型 */
	private renderignore = ["*.svg", "*.png", "*.jpg", "*.webp", "*.mp4", "*.mp3"]
	/* 模板项目中提供给用户选择的数据 */
	selectDataList?: ISelecItem[]
	/* 用户选择的数据 */
	selectData?: object
	/* 填充数据 */
	renderData?: object
	/* 指定二次移动时,不需要处理的文件 */
	private moveignore: string[] = []
	/* 删除文件路径或文件类型 */
	deletePropsList: string[]
	/* 初始化 */
	constructor(option: IOption) {
		const { cmdPath, project, logType, templatePath } = option
		this.cmdPath = cmdPath
		this.project = project
		this.logType = logType
		this.templatePath = templatePath
	}

	getRenderignore(): string[] {
		return this.renderignore
	}

	pushRenderignore(args: string[]): string[] {
		this.renderignore.push(...args)
		return this.renderignore
	}

	getMoveignore(): string[] {
		return this.moveignore
	}

	pushMoveignore(args: string[]): string[] {
		this.moveignore.push(...args)
		return this.moveignore
	}
}

module.exports = Central
