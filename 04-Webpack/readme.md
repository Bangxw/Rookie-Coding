# Webpack Demo

## Ⅰ、菜鸟入门

### 一、概念

![logo](basal/assets/what-is-webpack.png)

> WEBPACK是一个现代Javascript的静态资源打包器(module bundler)、模块打包机
- 它做的事情: 分析你的项目结构,找到Javascript模块以及其他的一些浏览器不能直接运行的拓展语言(Scss,TypeScript等),并将其转换和打包为合适的格式供浏览器使用
- 它工作方式: 把你的项目当做一个整体,通过一个给定的主文件(如:index.js),webpack将从这个文件开始找到你的项目的所有依赖文件,使用loaders处理他们,最后打包为一个(或多个)浏览器可识别的Javascript文件
- 为什么要用它: 牛逼呗

**参考链接**:

- [Webpack官网](https://webpack.docschina.org)
- [入门webpack](https://www.jianshu.com/p/42e11515c10f)
- [Webpack文档高级配置](https://www.jianshu.com/p/777f1a044e3c)

### 二、起手

``` dir
# 目录结构
.
|— Basic    //入门
  |— assets             //其他资源
  |— dist               //编译过后的文件
  |— node_modules       //项目依赖
  |— src                //源文件
   — .gitignore         //git上传忽略项
   — webpack.config.js  //配置文件
   — package.json
  ...

# 环境，node、npm、webpack先安装到位
node@8.11.4
npm@5.6.0
webpack@4.22.0

# 先搞个小项目
$ mkdir webpack-demo && cd webpack-demo
$ npm init (-y)  //生成package.json文件，(-y)省了你一路狂按enter
$ npm install --save-dev webpack    //安装webpack到开发环境里(devDependicies)
$ npm install --save-dev webpack-cli    //使用webpack 4+版本，需要安装cli
```

### 三、webpack配置

``` code
# 新建webpack.config.js
$ touch webpack.config.js
$ node_modules\.bin\webpack --config webpack.config.js
$ npm run build //配置文件中加上,"scripts": {"start": "webpack"}

# webpack的配置中主要的两个配置key是，entry和output
{
  entry: [String | Array | Object], // 入口模块
  output: {
      path: String,      // 输出路径
      filename: String   // 输出名称或名称 pattern
      publicPath: String // 指定静态资源的位置
      ...                // 其他配置
  }
}

# 多个入口文件
{
  entry: ['./src/index.js', './vendor/bootstrap.min.js'],
  output: {
    path: './dist',
    filename: "index.js"
  }
}
```

### 四、loader

> Loader让webpack能够处理那些非javascript文件(webpack自身只能处理Javascript), loader可以将所有类型文件转换为webpack能够处理的有效模块

#### babel

> babel可以帮你转换代码，解决浏览器兼容问题
- babel-loader: 让webpack知道如何运行babel
- babel-core: 让库知道如何解析代码
- babel-preset-env: 根据环境转换代码，解析ES6

#### 处理html

```install and config
$ npm i --save-dev html-loader

rules: [
  {
    test: /\.(html|htm)$/,
    use: ["html-loader"]
  }
]
```

#### 加载css

``` install and config
$ npm install --save-dev style-loader css-loader
$ npm install --save-dev extract-text-webpack-plugin    //将css和style分离,webpack 4要使用最新版本(extract-text-webpack-plugin@next)

const ExtractTextPlugin = require('extract-text-webpack-plugin')
rules: [
  {
    test: /\.css$/,
    // use: ["style-loader","css-loader"]
    use: ExtractTextPlugin.extract({
      callback: 'style-loader',
      use: 'css-loader'
    })
  }
]
plugin: [
  new ExtractTextPlugin('[name]-[hash].css')
]
```

#### 加载图片

```install and config
$ npm i --save-dev url-loader

rules: [
  {
    test: /\.(png|gif|svg|jpg)$/,
    use: [{
        loader: 'url-loader',
        options: {
            limit: '10240'
        }
    }]
  }
]
```

#### 加载字体

```install and config
$ npm i --save-dev file-loader

rules: [
  {
    test: /\.(ttf|eot|otf|woff|woff2)$/,
    use: ["file-loader"]
  }
]
```

#### 加载xml数据

```install and config
$ npm i --save-dev xml-loader

rules: [
  {
    test: /\.xml$/,
    use: ["xml-loader"]
  }
]
```

### 五、插件

** HtmlWebpackPlugin **

```config
$ npm install --save-dev html-webpack-plugin //生成一个自动引用打包后的js文件的html

const HtmlWebpackPlugin = require('html-webpack-plugin')
plugin: [
  new HtmlWebpackPlugin({
    title: 'Output Management',   //网页title
    template: './src/template.html',   //源模板文件
    filename: './index.html',
    showErrors: true,
    inject:  'body',    //true|body|head|false JavaScript资源位置，false所有静态资源css和JavaScript都不会注入到模板文件中
    chunks: ['index'],
    favicon: './src/favicon.ico',
    hash: true,
    minify:{
      caseSensitive: false, //是否大小写敏感
      removeComments:true, // 去除注释
      removeEmptyAttributes:true, // 去除空属性
      collapseWhitespace: true //是否去除空格
    }
  })
]
```

** 清理残余文件 **

```config
$ npm install --save-dev clean-webpack-plugin

const CleanWebpackPlugin = require('clean-webpack-plugin')
plugin: [
  new CleanWebpackPlugin(['dist']),
]
```

** 版权申明插件 **

```config
const webpack = require('webpack');
plugin: [
  new webpack.BannerPlugin(banner)
]
```

### 六、开发

#### 使用Source Map

** 配合devtool, 生成Source Maps(使调试更容易) **

- source-map    //最完整的source map,会减慢打包速度
- cheap-module-source-map   //不带映射的map,只能对应到具体的行，不能对应到具体的列
- eval-source-map   //使用eval打包源文件模块，生成干净完整的source map
- cheap-module-eval-source-map  //最快的打包方法
- inline-source-map

#### 选择一个开发工具

** 使用观察者模式 **

```config
"scripts": {
  "watch": "webpack --watch" //webpack编译代码时，不会退出命令行，也就是说修改文件会自动重新编译
}
```

** 使用webpack-dev-server **

```config
$ npm install --save-dev webpack-dev-server

"scripts": {
    "start": "webpack-dev-server --open"
}

devServer: {
  contenBase: './dist',    //默认webpack-dev-server会为根文件夹提供本地服务器，如果想为另外一个目录下的文件提供本地服务器，应该在这里设置其所在目录（本例设置到“public"目录）
  port: 8080,
  inline: true    //自动刷新
}
```

## Ⅱ、手撕vue-cli,站在巨人的肩膀敲代码

[vue-cli](../05-Vue/vue-cli)