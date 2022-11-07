const fs = require('fs')
const { processCwd } = require('../config/config.js')
// 判断是否有配置文件
let hasConfig
try {
  hasConfig = fs.statSync(`${processCwd}/cli.config.json`)
  hasConfig = true
} catch (error) {
  if (error) hasConfig = false
}

module.exports = { hasConfig }