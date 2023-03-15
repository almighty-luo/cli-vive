// 调度中心模块,负责公共数据和方法
import type { Option, SelecItem } from "../types"
class Central {
	/* 模板项目中提供给用户选择的数据 */
	public selectDataList?: Array<SelecItem>
	/* 用户选择的数据 */
	public selectData?: object
	/*  用户指定启动模板项目路径 */
	public templatePath: string
	/* 删除文件路径或文件类型 */
	public deletePropsList: Array<string> = []
	/* 填充数据 */
	public renderData?: object

	/* 当前执行脚手架命令的终端路径 */
	readonly cmdPath: string
	/* 用户创建的文件名称或路径 */
	readonly project: string
	/* 日志模式 */
	readonly logType: "log" | "txt"

	/* 忽略文件或文件路径或文件类型 */
	private _renderignore = ["*.svg", "*.png", "*.jpg", "*.webp", "*.mp4", "*.mp3"]
	/* 指定二次移动时,不需要处理的文件 */
	private _moveignore: Array<string> = []

	/* 初始化 */
	constructor(option: Option) {
		const { cmdPath, project, logType, templatePath } = option
		this.cmdPath = cmdPath
		this.project = project
		this.logType = logType
		this.templatePath = templatePath
	}

	get renderignore(): Array<string> {
		return this._renderignore
	}

	pushRenderignore(args: Array<string>): Array<string> {
		this._renderignore.push(...args)
		return this._renderignore
	}

	get moveignore(): Array<string> {
		return this._moveignore
	}

	pushMoveignore(args: Array<string>): Array<string> {
		this._moveignore.push(...args)
		return this._moveignore
	}
}

export default Central
