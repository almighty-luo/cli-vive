// 根据用户选择下载模板
const fs = require('fs')
const path = require('path')
const download = require('download-git-repo')
const { hasConfig } = require('./utils')
const { processCwd, dirnameStr } = require('./config')
console.log('dirnameStr', dirnameStr)
/* 
  git: git仓库的类型
  gitUserName: 用户名
  projectName: 项目地址
*/
let git, gitUserName, projectName

if (hasConfig) {
  git = require(`${processCwd}/cli.config.json`).git
  gitUserName = require(`${processCwd}/cli.config.json`).gitUserName
  projectName = require(`${processCwd}/cli.config.json`).projectName
}

git = git || 'github.com'
gitUserName = gitUserName || 'almighty-luo'
projectName = projectName || 'template'

function getGitTem (name) {
  return new Promise(resolve => {
    const projecUrl = path.join(dirnameStr, 'projec')
    try {
      function removeDir (dir) {
        let files = fs.readdirSync(dir)
        for (var i = 0; i < files.length; i++) {
          let newPath = path.join(dir, files[i]);
          let stat = fs.statSync(newPath)
          if (stat.isDirectory()) {
            //如果是文件夹就递归下去
            removeDir(newPath);
          } else {
            //删除文件
            fs.unlinkSync(newPath);
          }
        }
        fs.rmdirSync(dir)//如果文件夹是空的，就将自己删除掉
      }
      removeDir(projecUrl)
    } catch (error) {
    } 
    download(`${git}:${gitUserName}/${projectName}#${name}`, projecUrl, { clone: true }, err => {
      if (err) {
        throw Error(err)
      } else {
        resolve(projecUrl) 
      }
    })
  })
}

module.exports = getGitTem
