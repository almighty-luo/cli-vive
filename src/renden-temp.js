// 根据用户选择渲染模板

const cons = require('consolidate')
const renden = require('ejs').render
const ncp = require('ncp').ncp
const findRemoveSync = require('find-remove')
const MetalSmith = require('metalsmith') //遍历文件
const fs = require('fs')
module.exports = async (selecData = []) => {
  const data = {}
  selecData.forEach(item => {
    data[item] = true
  })
  MetalSmith(__dirname.slice(0, -4)).source('./projec').destination('./build').use((files, metalsmith, done) => {
    for (const key in files) {
      if (Object.hasOwnProperty.call(files, key)) {
        const element = files[key];
        const contents = element.contents.toString()
        element.contents = renden(contents, data)
      }
    }
    done()
  }).clean(true).build((err) => {
    const deleteArr = require('../build/.deleteFunc')(selecData)
    deleteArr.forEach(async (item, index) => {
      const result = await findRemoveSync(__dirname.slice(0, -4) + '/build' + item.path, { files: item.name })
      if (index === deleteArr.length - 1) {
        console.log(`${__dirname.slice(0, -4)}/build`)
        console.log(process.cwd())
        ncp(`${__dirname.slice(0, -4)}/build`, process.cwd(), (err) => {
          console.log(err)
        })
      }
    })
    
  })
}