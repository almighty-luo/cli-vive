const path = require('path')

// 获取当前命令行路径
exports.processCwd = process.cwd()

// 获取项目根目录
exports.dirnameStr = path.resolve(__dirname, '..')