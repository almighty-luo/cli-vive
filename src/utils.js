const fs = require('fs')
const extract = require('extract-zip')
const path = require('path')
const request = require("request")

const { processCwd } = require('../config/config.js')
// 判断是否有配置文件
let hasConfig
try {
  hasConfig = fs.statSync(path.join(processCwd, 'cli.config.json'))
  hasConfig = true
} catch (error) {
  if (error) hasConfig = false
}

// 根据模板里的信息，提供给用户选择配置数据
function findSelectData () {
  return require(path.join(processCwd, 'template', 'config', '.template.json'))
}

function findFunc () {
  return require(path.join(processCwd, 'template', 'config', '.func.js'))
}
/**
 * 
 * @param {*} url  网络文件url地址
 * @param {*} dir 下载到的目录
 */
 function getfileByUrl(url,dir){
  return new Promise((resolve, reject) => {
    let stream = fs.createWriteStream(dir);
    request(url).pipe(stream).on("close", function (err) {
        if (err) reject(false)
        resolve(true)
    })
  })
}

//解压zip
async function ungzip(source, target) {
  try {
    await extract(source, { dir: target })
    fs.unlinkSync(source)
  } catch (err) {
    if (err) console.log('解压zip包失败')
  }
}

module.exports = { hasConfig, findSelectData, getfileByUrl, ungzip, findFunc }