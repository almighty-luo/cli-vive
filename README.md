### cli-vive用途

 cli-vive可以理解为代码生成器，用户可自行配置下载源，自己编写下载模板项目

#### 使用说明  

第一步下载脚手架

```js
npm i cli-vive -g
```

第二步
创建一个新文件夹后，在新文件下面创建一个cli.config.json配置文件（如果不创建，则会下载默认官网模板）
"type":表示下载方式，支持git、http、local、none四种方案

        git：表示会使用本地git进行获取git仓库信息，所以需要本地安装并且配置好git信息

        http: 会使用http请求去获取下载信息
            { //响应字段示例
                res: [
                    {
                        type: "http",
                        name: "模板项目1名称",
                        dowmTempInfo: {
                            type: "http",
                            dowmTempUrl: "http://xxx" // 下载的文件必须是经过zip打包后的文件
                        }
                    }
                ]
            }

        local: 本地配置用户选择信息和模板下载源
            使用本地配置用户选择信息和模板下载源时，需要在userSelectList中配置好，具体使用下面提供示例。
        
        none: 直接跳过用户选择信息这一步，进入下载模板阶段。
```js
//使用git示例
{
    "type": "git",
    "url": "git@github.com:almighty-luo/template.git"
}
// 使用http版示例
{
    "type": "http",
    "url": "http://xxx"
}
// 使用配置数据
/* 
    使用配置数据的时候，需要在userSelectList里面的url提供相关模板的下载地址
*/
{
    "type": "local",
    "userSelectList": [
        {
            "name": "模板项目1",
            "type": "http"
            "dowmTempUrl": "http://xxx"
        },
        {
            "name": "模板项目1",
            "type": "git"
            "dowmTempUrl": "git://xxx"
        }
    ]
}

// 不使用选择项目，直接提供下载模板
{
    "type": "none"
}
```

下载模板下载方式和类型配置
下载模板方式支持三类: git、http、local
    注意：当选择local时，需要把模板文件放置在新建文件夹下，并且模板文件的文件夹名为template
```js
{
    "dowmTempInfo": {
        "type": "git",
        "dowmTempUrl": "git:xxx"
    }
}
```

### 模板项目的配置规则
配置文件夹：
    需要在模板文件的根目录下添加cli.config文件夹用来管理配置文件

当检索到模板文件的时候，会去搜索模板文件cli.config文件夹下的.template.json文件，里面涉及到了整个项目需要使用到的数据
```js
{
    "isSetUserSelect": true //提供的数据是否由用户选择
    "data": {
        "selectData": ["axios", "vuex", "eslint"] // 提供给用户选择的数据
    }
}

```
生命周期：
    在cli.config中添加一个.func.js文件
```js
// 你可以在相应的生命周期去对文件的增删改查
module.exports = {
  // 刚刚下载完模板，还没有移动到新建目录下
  beforeUserTem (cliGloble, inDirName) {
    // cliGloble中包含fse、path函数库
    // inDirName用户创建项目的名称
    console.log('beforeUserTem', cliGloble)
  },
  // 已经移动到新建目录下和用户已经选择完毕，但是还未开始渲染
  beforeRendenTem (handleFunc, inDirName, selectData) {
    // selectData用户选择的数据
  },
  // 渲染完毕
  mouthedRendenTem (handleFunc, inDirName, selectData) {

  }
}
```

注意：这里有个注意的点，当你的模板项目中的package.json也写上ejs语法时，会导致node的require导入func.js发生错误，这是因为require时，会先检查离他最近的package.json文件来判断是使用那种模块方式，这是如果package.json发生错误，则导入失败，所以一般都在cli.congif文件下执行npm init -y新建一个package.json文件。

第四步选配置项

定义模板

首先模板渲染引擎使用ejs进行，可以参考ejs官网了解语法。

.template.json文件提供了该模板仓（可参考模板仓库https://github.com/almighty-luo/template ）库可以选择集成那些配置（例如集成：axios,vuex等）


