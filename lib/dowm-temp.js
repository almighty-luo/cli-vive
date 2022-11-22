// 根据用户选择下载模板
const fse = require('fs-extra')
const path = require('path')
const { simpleGit } = require('simple-git')
const { processCwd } = require('../config/config.js')
// 定义存放模板项目路径
const templatePath = path.join(processCwd, 'template')
// 定义解析zip压缩包路劲
const temZip = path.join(templatePath, 'tem.zip')
const { getfileByUrl, ungzip } = require('./utils')

function getGitTem (templateOption) {
  const { type, url, inDirName } = templateOption
  return new Promise(async resolve => {
    if (type === 'git') {
      const options = {
        baseDir: templatePath,
        binary: 'git',
        maxConcurrentProcesses: 6,
        trimmed: false,
      }
      const git = simpleGit(options)
      try {
        await git.checkout('origin/' + url, ['-d']) // 切换分支
      } catch (err) {
        console.log(err)
      }
    } if (type === 'http') {
     const isDown = await getfileByUrl(url, temZip)
     if (isDown) ungzip(temZip, templatePath)
    }
    resolve(inDirName)
  })
}

module.exports = getGitTem
