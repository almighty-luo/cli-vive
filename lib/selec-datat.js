// 返回用户选择的数据
const { Command } = require('commander')
const fse = require('fs-extra')
const path = require('path')
const program = new Command()
const packageJson = require('../package.json')
const inquirer = require('inquirer')
const axios = require('axios')
const { simpleGit } = require('simple-git')
const { processCwd } = require('../config/config.js')
let cliConfigData = require('../config/cli.config.json')
const { hasConfig } = require('./utils')
const templatePath = path.join(processCwd, 'template')
function getDataOfUrl () {
  return new Promise((resole, reject) => {
    program
      .version(packageJson.version)
      .command('create') 
      .argument('<name>')
      .argument('[path]')
      .action(async (name) => {
        let choicesData, url, dowmTempType, dowmTempUrl
        fse.ensureDirSync(path.join(processCwd, name))
        fse.ensureDirSync(templatePath)
        if (hasConfig) { //有配置文件
          // type git
          // type http
          // type local
          // type none || undefind
          cliConfigData = require(`${processCwd}/cli.config.json`)
          if (!cliConfigData.dowmTempInfo && !cliConfigData.dowmTempInfo.type) return new Error('必须输入模板下载源')
          dowmTempType = cliConfigData.dowmTempInfo.type
          switch (cliConfigData.type) {
            case 'git':
              const remote = cliConfigData.url
              try {
                await simpleGit().clone(remote, templatePath).cwd({ path: templatePath })
              } catch (err) {
                // console.log(err)
              }
              const options = {
                baseDir: templatePath,
                binary: 'git',
                maxConcurrentProcesses: 6,
                trimmed: false,
              }
              const git = simpleGit(options)
              const { all = [] } = await git.branch({'-r': true}) //仅查询远程分支名称
              choicesData = all.map(item => {
                return {
                  name: item.split('/').pop()
                }
              })
              break;
            case 'http':
              url = cliConfigData.url
              const { data } = await axios.get(url)
              choicesData = data
              break;
            case 'local':
              choicesData = cliConfigData.userSelectList
              break;
            default:
              dowmTempUrl = cliConfigData.dowmTempInfo.dowmTempUrl
              break;
          }
        } else {
          url = cliConfigData.url
          dowmTempType = cliConfigData.dowmTempInfo.type
          const { data } = await axios.get(url)
          try {
            await simpleGit().clone(cliConfigData.dowmTempInfo.dowmTempUrl, templatePath).cwd({ path: templatePath })
          } catch (err) {
            // console.log(err)
          }
          choicesData = data
        }
        if (cliConfigData.type !== 'none') {
          let arr = [
            {
              type: 'checkbox',
              name: 'template',
              message: '请选择模板',
              type: 'list',
              choices: choicesData.map(item => item.name)
            }
          ]
          const { template } = await inquirer.prompt(arr)
          choicesData.forEach(element => { 
            if (element['name'] === template) {
              dowmTempInfo = element
              dowmTempType = element.dowmTempInfo && element.dowmTempInfo.type
            }
          })
          switch (dowmTempType) {
            case 'git': //模板下载源git
              dowmTempUrl = template
              break;
            case 'http': //模板下载源使用http
              dowmTempUrl = cliConfigData.dowmTempInfo.dowmTempUrl + '#' + template
              break;
            default:
              break;
          }
        }
        const templateOption = {
          type: dowmTempType, // git http none
          url: dowmTempUrl,
          inDirName: name //保持文件名称  
        }
        resole(templateOption)
        reject(false)
      })
    program.parse()
  })
}

function getUserData () {
  return getDataOfUrl()
}
module.exports = getUserData