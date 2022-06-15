// 入口文件
const getUserData = require('./selec-datat')
const getGitTem = require('./dowm-temp')
const findSelectData = require('./provide-select-data')
const userSetTem = require('./selec-tem')
const rendenTemp = require('./renden-temp')
/* 
  一、识别指令，判断用户行为
    1.查看版本
    2.查看帮助指令
    3.创建模板
  return 用户选择数据
*/

/* 
  二、如果用户是创建模板，那么由第一步返回用户输入的数据，去拉取模板
    1.直接根据数据源去拉取项目
    return 拉取项目后的存放地址
*/

/* 
  三、读取项目中提供的配置，用来提供给用户选择
  return 配置文件中的数据
*/

/* 
  四、提供选择给用户，让用户选择配置项目
  return 用户的选择配置数据
*/

/* 
  五、根据用户的选择配置，reden模板文件
  return 替换后的文件(这里需要把最后的删除文件留到最后也配置出来)
*/

/* 
  六、移动替换后的文件到当前目录，并且删除无用文件
*/
async function init () {
  const userData = await getUserData()
  const temPath = await getGitTem(userData.template[0])
  const templateData = findSelectData(temPath + '\\.template.json')
  console.log(templateData)
  const userSelec = await userSetTem(templateData.data)
  const isRendenTemp = await rendenTemp(userSelec.selecData)
}

init()