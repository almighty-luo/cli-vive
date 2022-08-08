const fs = require('fs')
const path = require('path')
const { processCwd } = require('./config')
// 判断是否有配置文件
let hasConfig
try {
  hasConfig = fs.statSync(`${processCwd}/cli.config.json`)
  hasConfig = true
} catch (error) {
  if (error) hasConfig = false
}

// 根据模板里的信息，提供给用户选择配置数据
function findSelectData (url) {
  return require(path.join(url, '.template.json'))
}

module.exports = { hasConfig, findSelectData }