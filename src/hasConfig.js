const fs = require('fs')
// 判断是否有配置文件
let hasConfig
try {
  hasConfig = fs.statSync(`${processCCwd}/cli.config.json`)
  hasConfig = true
} catch (error) {
  if (error) hasConfig = false
}

module.exports = { hasConfig }