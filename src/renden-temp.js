// 根据用户选择渲染模板

const renden = require('ejs').render
const path = require('path')
const MetalSmith = require('metalsmith') //遍历文件
const { dirnameStr, processCwd } = require('../config/config.js')
module.exports = async (selectData = [], temData = [], inDirName) => {
  const data = {}
  // 模板所在项目
  const templatePath = path.join(processCwd, 'template')
  // 模板移动的目标目录
  const inDirNamePath = path.join(processCwd, inDirName)
  temData.forEach(item => {
    data[item] = selectData.find(ele => ele === item) ? true : false
  })
  MetalSmith(dirnameStr).source(templatePath).destination(inDirNamePath).use((files, metalsmith, done) => {
    // 遍历渲染模版
    for (const key in files) {
      if (Object.hasOwnProperty.call(files, key)) {
        const element = files[key];
        const contents = element.contents.toString()
        element.contents = renden(contents, data)
      }
    }
    done()
  })
  .clean(true).build((err) => {
    if (err) return new Error(err)
  })
}