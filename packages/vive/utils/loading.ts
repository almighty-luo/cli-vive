/* 打印loading */
import ora from "ora"
import type { Ora } from "ora"
import { Color } from "ora"
class Loading {
	public ora
	public title
	public spinner: Ora
	private _colorYellow = "yellow"
	private _colorBule = "bule"
	constructor(title: string) {
		this.ora = ora
		this.title = title
		this.spinner = ora()
		this.start(title)
	}
	/* 开启 */
	public start(title: string): void {
		this.spinner = this.ora(title).start()
		const type = false
		setTimeout(() => {
			this.spinner.color = (type ? this._colorBule : this._colorYellow) as Color
		}, 500)
	}

	/* 关闭 */
	public close(): void {
		this.spinner.stop()
	}
}

export default Loading
