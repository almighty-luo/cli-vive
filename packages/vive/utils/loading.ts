import * as ora from "ora"
import { Color } from "ora"
class Loading {
	public ora
	public title
	private _colorYellow = "yellow"
	private _colorBule = "bule"
	constructor(title: string) {
		this.ora = ora
		this.title = title
	}

	public start(title: string) {
		const spinner = this.ora(title).start()
		const type = false
		setTimeout(() => {
			spinner.color = (type ? this._colorBule : this._colorYellow) as Color
		}, 500)
	}
}

export = new Loading("加载中")
