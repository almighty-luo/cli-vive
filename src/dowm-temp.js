// 根据用户选择下载模板
const fs = require('fs')
const path = require('path')
const download = require('download-git-repo')
const { hasConfig } = require('./hasConfig')
/* 
  git: git仓库的类型
  gitUserName: 用户名
  projectName: 项目地址
*/
let git, gitUserName, projectName

if (hasConfig) {
  git = require(`${processCCwd}/cli.config.json`).git
  gitUserName = require(`${processCCwd}/cli.config.json`).gitUserName
  projectName = require(`${processCCwd}/cli.config.json`).projectName
}

git = git || 'github.com'
gitUserName = gitUserName || 'almighty-luo'
projectName = projectName || 'template'

function getGitTem (name) {
  return new Promise(resolve => {
    const dirnameStr = __dirname.slice(0, -4)

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
      removeDir(`${dirnameStr}\\projec`)
    } catch (error) {
    }
    download(`${git}:${gitUserName}/${projectName}#${name}`, dirnameStr + '\\projec', { clone: true }, err => {
      if (err) {
        throw Error(err)
      } else {
        resolve(dirnameStr + '\\projec')
      }
    })
  })
}

module.exports = getGitTem
