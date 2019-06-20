# Webpacke笔记

## Ⅰ. 菜鸟入门

### 目录

1. [概念](#一、概念)
2. [起手](#二、起手)
3. [Webpack配置文件](#三、webpack配置文件)
4. [Loader](#四、Loader)
   - [babel](#1.babel)
   - [处理html](#2.处理html)
   - [加载css](#3.加载css)
   - [加载图片](#4.加载图片)
   - [加载xml数据](#6.加载xml数据)
5. [插件](#五、插件)
   - [html-webpack-plugin](#1.html-webpack-plugin)
   - [clean-webpack-plugin](#2.clean-webpack-plugin)
   - [版权申明](#3.版权申明)
6. [开发](#六、开发)
   - [使用观察者模式](#1.使用观察者模式)
   - [webpack-dev-server](#2.webpack-dev-server)
   - [使用Source Map](#3.使用Source-Map)

### 一、概念

![logo](lib/what-is-webpack.png)

> WEBPACK是一个现代Javascript的静态资源打包器(module bundler)、模块打包机

- 做什么: 分析你的项目结构，找到Javascript模块以及其他的一些浏览器不能直接运行的拓展语言(Scss,TypeScript等)，并将其转换和打包为合适的格式供浏览器使用
- 怎么做: 把你的项目当做一个整体，通过一个给定的主文件(如:main.js)，webpack将从这个文件开始找到你的项目的所有依赖文件，使用loaders处理他们，最后打包为一个(或多个)浏览器可识别的Javascript文件

**参考链接**:

- [Webpack官网](https://webpack.docschina.org)
- [入门webpack](https://www.jianshu.com/p/42e11515c10f)

### 二、起手

**环境**:

- node@8.11.4
- npm@5.6.0
- webpack@4.22.0: `npm i -D webpack`

```js
// 目录结构：
|— webpack-demo
  |— assets             // 其他资源
  |— dist               // 编译过后的文件
  |— node_modules       // 项目依赖
  |— src                // 源文件
   — .gitignore         // git上传忽略项
   — webpack.config.js  // 配置文件
   — package.json

$ mkdir webpack-demo && cd webpack-demo  // 不能使用大写，不能使用包名
$ npm init (-y)                          // 生成package.json文件，'-y'省了你一路狂按enter
$ npm install --save-dev webpack         // 安装webpack到开发环境里(devDependicies)
$ npm install --save-dev webpack-cli     // 使用webpack 4+版本，需要安装cli，否则编译报错
```

### 三、webpack配置文件

**新建webpack.config.js**: `touch webpack.config.js`

```js
/* 配置webpack.config.js */
const path = require('path')
module.exports = {
  // webpack4+版本必须有mode这个属性，否则编译的时候会发出警告
  // 属性值包含：production | development | none
  mode: 'development',
  // 入口，可以配置多个entry: ["./app/entry1", "./app/entry2"]
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),  // 输出路径，__dirname是当前文件的绝对路径
    filename: '[name].bundle.js'            // 输出文件名
    publicPath:  '/'                        // 指定静态资源的位置
  }
}

/* 终端运行 */
node_modules\.bin\webpack --config webpack.config.js
npm run build //webpack.json中加上, "scripts": {"start": "webpack"}
```

### 四、Loader

> Loader让webpack能够非javascript文件转换为webpack能够处理的有效模块(webpack自身只能处理Javascript)

#### 1.babel

> Bebel是一个使用广泛的ES6转码器，可以ES6代码转化为ES5代码，实现浏览器兼容

Babel5的时代，babel属于全家桶型，只要安装babel就会安装bebel相关的所有工具
Babel6移除全家桶安装，拆分为单独模块，例如：babel-core、babel-cli、bebel-node、babel-polyfill

- babel-loader: 让webpack知道如何运行babel
- babel-core: 让库知道如何解析代码
- babel-preset-env: 根据环境转换代码，解析ES6

```js
// install
$ npm install babel-loader@8.0.0-beta.0 @babel/core @babel/preset-env

// configuration
module: {
  rules: [{
    test: /\.js$/,
    exclude: /(node_modules|bower_components)/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env']
      }
    }
  }]
}
```

#### 2.处理html

```js
$ npm i --save-dev html-loader

rules: [
  {
    test: /\.(html|htm)$/,
    use: ["html-loader"]
  }
]
```

#### 3.加载css

```js
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

#### 4.加载图片

```js
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

#### 5.加载字体

```js
$ npm i --save-dev file-loader

rules: [
  {
    test: /\.(ttf|eot|otf|woff|woff2)$/,
    use: ["file-loader"]
  }
]
```

#### 6.加载xml数据

```js
$ npm i --save-dev xml-loader

rules: [
  {
    test: /\.xml$/,
    use: ["xml-loader"]
  }
]
```

### 五、插件

#### 1.html-webpack-plugin

> 生成一个自动引用打包后的js文件的html

```js
$ npm install --save-dev html-webpack-plugin

const HtmlWebpackPlugin = require('html-webpack-plugin')
plugins: [
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

#### 2.clean-webpack-plugin

> 清理残余文件

```js
$ npm install --save-dev clean-webpack-plugin

const CleanWebpackPlugin = require('clean-webpack-plugin')
plugin: [
  new CleanWebpackPlugin(['dist']),
]
```

#### 3.版权申明

```js
const webpack = require('webpack');

plugin: [
  new webpack.BannerPlugin(banner)
]
```

### 六、开发

#### 1.使用观察者模式

```js
"scripts": {
  "watch": "webpack --watch" //webpack编译代码时，不会退出命令行，也就是说修改文件会自动重新编译
}
```

#### 2.webpack-dev-server

```js
$ npm install --save-dev webpack-dev-server

"scripts": {
  "start": "webpack-dev-server --open"
}

devServer: {
  contentBase: './dist',    //默认webpack-dev-server会为根文件夹提供本地服务器，如果想为另外一个目录下的文件提供本地服务器，应该在这里设置其所在目录（本例设置到“public"目录）
  port: 8080,
  inline: true    //自动刷新
}
```

#### 3.使用Source-Map

> 配合devtool, 生成Source Maps(使调试更容易)

- **source-map**: 最完整的source map,会减慢打包速度
- **cheap-module-source-map**: 不带映射的map,只能对应到具体的行，不能对应到具体的列
- **eval-source-map**: 使用eval打包源文件模块，生成干净完整的source map
- **cheap-module-eval-source-map**: 最快的打包方法
- **inline-source-map**

### npm常用包简介

- babel: Babel主要用于将ECMAScript 2015+代码转换为向后兼容的JavaScript代码
- babel-core: babel-core是作为babel的核心存在，babel的核心api都在这个模块里面，比如：transform
- babel-loader
- babel-plugin-transform-runtime
- babel-preset-es2015
- babel-runtime
- babel-cli: babel-cli是一个通过命令行对js文件进行换码的工具
- css-loader
- extract-text-webpack-plugin
- file-loader
- html-webpack-plugin
- style-loader
- url-loader
- vue-hot-reload-api
- vue-loader
- vue-style-loader
- vue-template-compiler
- webpack
- webpack-dev-server
- webpack-merge