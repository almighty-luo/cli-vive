const path = require("path")

// 获取当前命令行路径
export const processCwd = process.cwd()

// 获取项目根目录
export const dirnameStr = path.resolve(__dirname, "..")
