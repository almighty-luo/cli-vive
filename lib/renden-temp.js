// 根据用户选择渲染模板

const renden = require('ejs').render
const path = require('path')
const MetalSmith = require('metalsmith') //遍历文件
const { dirnameStr, processCwd } = require('../config/config.js')
const noRenden = ['.svg', '.png', '.jpg', '.webp', '.mp3', '.mp4']

function noHas (key, list) {
  return !list.find(e => key.indexOf(e) !== -1)
}
module.exports = async (temData = {}, inDirName, ignores = []) => {
  // 模板所在项目
  const templatePath = path.join(processCwd, 'template')
  // 模板移动的目标目录
  const inDirNamePath = path.join(processCwd, inDirName)
  console.log('输出路径', inDirNamePath)
  MetalSmith(dirnameStr).source(templatePath).destination(inDirNamePath).use((files, metalsmith, done) => {
    // 遍历渲染模版
    let i = 0
    for (const key in files) {
      if (Object.hasOwnProperty.call(files, key) && noHas(key, [... new Set([...noRenden, ...ignores])])) {
        const element = files[key]
        const contents = element.contents.toString()
        element.contents = renden(contents, temData)
        console.log(key)
        console.log(i++)
      }
    }
    console.log(13)
    done()
  })
  .clean(true).build((err) => {
    if (err) return new Error(err)
  })
}