// 根据用户选择渲染模板

const cons = require('consolidate')
const renden = require('ejs').render
const ncp = require('ncp').ncp
const findRemoveSync = require('find-remove')
const path = require('path')
const MetalSmith = require('metalsmith') //遍历文件
const { dirnameStr } = require('./config')
module.exports = async (selecData = [], temData = []) => {
  const data = {}
  temData.forEach(item => {
    data[item] = selecData.find(ele => ele === item) ? true : false
  })
  MetalSmith(dirnameStr).source('./projec').destination('./build').use((files, metalsmith, done) => {
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
    const deleteArr = require('../build/.deleteFunc')(selecData)
    deleteArr.forEach(async (item, index) => {
      const result = await findRemoveSync(path.join(dirnameStr, '/build', item.path), { files: item.name })
      if (index === deleteArr.length - 1) {
        console.log(process.cwd())
        ncp(path.join(dirnameStr, '/build'), process.cwd(), (err) => {
          if (err) new Error(err)
          console.log('创建成功')
        })
      }
    })
  })
}