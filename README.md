### sixi-cli主要用于生成项目

用户可自行配置下载源，自己编写下载模板项目

####使用说明

第一步拉取项目

```js
git clone xxxx

项目拉取后在该项目目录下执行
npm link
```

第二步
项目拉取后在该项目目录下执行
```js
npm link

接着执行下面查看版本

my-cli -V

```

第三步

新创建一个文件夹，然后在该文件夹下执行脚手架命令

```js
my-cli create newTem

```

第四步选配置项

自定义配置项目

了解
cli.config.json

说明：该文件用于指定下载模板的仓库地址（如果没有则使用默认的）
拿我上面拉取模板作为例子，如果我在‘newTem’项目中创建cli.config.json文件，并且有git、gitUserName、projectName这三个属性（git代表git地址，gitUserName代表用户名称，projectName代表仓库名称）用于调用github等开源项目的api来获取模板仓库信息。

定义模板

首先模板渲染引擎使用ejs进行，可以参考ejs官网了解语法。

同时需要有两个文件，.deleteFunc.js和.template.json（可参考模板仓库https://github.com/almighty-luo/template）
.deleteFunc.js文件中的方法会放回项目生成后，最后需要删除的模板文件
.template.json文件提供了该模板仓库可以选择集成那些配置（例如集成：axios,vuex等）


