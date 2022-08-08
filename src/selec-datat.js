// 放回用户选择的数据
const { Command } = require('commander')
const program = new Command()
const packageJson = require('../package.json')
const inquirer = require('inquirer')
const axios = require('axios')
const { processCwd } = require('./config')
let userData = {}
const { hasConfig } = require('./utils')
// 获取配置文件里的请求地址
let configUrl
if (hasConfig) configUrl = require(`${processCwd}/cli.config.json`).url
const url = configUrl || 'https://api.github.com/repos/almighty-luo/template/branches'
function getDataOfUrl () {
  return new Promise((resole, reject) => {
    program
      .version(packageJson.version)
      .command('create') 
      .argument('<name>')
      .argument('[path]')
      .action(async (name, path) => {
        userData.name = name
        userData.path = path
        const { data } = await axios.get(url)
        let arr = [
          {
            type: 'checkbox',
            name: 'template',
            message: '请选择模板',
            type: 'list',
            choices: data.map(item => item.name)
          }
        ]
        const { template } = await inquirer.prompt(arr)
        if (template) resole(template)
        reject(template)
      })
    program.parse()
  })
}

function getUserData () {
  return getDataOfUrl()
}
module.exports = getUserData