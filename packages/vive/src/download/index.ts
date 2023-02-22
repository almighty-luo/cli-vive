const Central = require('../../central/index')
// 模板下载模块
function download() {
	return new Promise((resolve, reject) => {
		const central = new Central()
		console.log(resolve, reject, central)
		resolve(central)
	})
}
module.exports = download
