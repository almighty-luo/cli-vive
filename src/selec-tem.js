// 用户来选择配置数据

const inquirer = require('inquirer')



module.exports = async (data) => {
  let arr = [
    {
      type: 'checkbox',
      name: 'selecData',
      message: '请选择模板',
      choices: data
    }
  ]
  const seData = await inquirer.prompt(arr)
  return seData
}