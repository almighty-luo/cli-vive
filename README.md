### sixi-cli主要用于生成项目

用户可自行配置下载源，自己编写下载模板项目

#### 使用说明

第一步

```js
npm i cli-vive
```

第二步
创建一个新文件夹后，在新文件下面创建一个cli.config.json配置文件（如果不使用，这会使用默认的配置）
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
            "name": "模板项目1"，
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
```js
{
    "dowmTempInfo": {
        "type": "git",
        "dowmTempUrl": "git:xxx"
    }
}
```

type支持"git"、"http",如果不填，则需要在新建文件下面添加一个template文件，再手动把模板项目放入该目录下
第三步

模板项目配置
当检索到模板文件的时候，会去搜索模板文件跟目录下的.template.json文件，里面涉及到了整个项目需要使用到的数据
```js
{
    "isSetUserSelect": true //提供的数据是否由用户选择
    "data": {
        "selectData": ["axios", "vuex", "eslint"] // 提供给用户选择的数据
    }
}
```

第四步选配置项



定义模板

首先模板渲染引擎使用ejs进行，可以参考ejs官网了解语法。

同时需要有两个文件，.deleteFunc.js和.template.json（可参考模板仓库https://github.com/almighty-luo/template ）
.deleteFunc.js文件中的方法会放回项目生成后，最后需要删除的模板文件
.template.json文件提供了该模板仓库可以选择集成那些配置（例如集成：axios,vuex等


