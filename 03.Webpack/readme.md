# Webpacke笔记

## Ⅰ. 菜鸟入门

### 目录

1. [概念](#一、概念)
2. [起手](#二、起手)
3. [Webpack配置文件](#三、webpack配置)
4. [Loader](#四、Loader)
   - [babel](#1.babel)
   - [加载css](#2.处理css)
   - [加载图片](#3.加载图片)
   - [加载字体](#4.加载字体)
5. [插件](#五、插件)
   - [html-webpack-plugin](#1.html-webpack-plugin)
   - [clean-webpack-plugin](#2.clean-webpack-plugin)
   - [版权申明](#3.版权申明)
6. [开发](#六、开发)
   - [使用观察者模式](#1.使用观察者模式)
   - [webpack-dev-server](#2.webpack-dev-server)
   - [Webpack Devtool](#3.Webpack-Devtool)
7. [常用包](#七、npm常用包简介)

### 一、概念

![logo](lib/what-is-webpack.png)

> WEBPACK是一个现代Javascript的静态资源打包器(module bundler)、模块打包机

- 做什么: 分析你的项目结构，找到Javascript模块以及其他的一些浏览器不能直接运行的拓展语言(Scss,TypeScript等)，并将其转换和打包为合适的格式供浏览器使用
- 怎么做: 把你的项目当做一个整体，通过一个给定的主文件(如:main.js)，webpack将从这个文件开始找到你的项目的所有依赖文件，使用loaders处理他们，最后打包为一个(或多个)浏览器可识别的Javascript文件

#### 参考链接

- [Webpack官网](https://webpack.docschina.org)
- [入门webpack](https://www.jianshu.com/p/42e11515c10f)

### 二、起手

> node 12.11.0 | npm 5.6.0

#### 快速开始

1. **新建目录**: 不要使用大写，也不要使用包名
    - `mkdir webpack-demo && cd webpack-demo`
2. **快速初始化项目**: 生成package.json文件，(-y)省了你一路狂按enter
    - `npm init -y`
3. 在项目根目录创建`src`源代码目录和`dist`产品目录
    - `md src && md dist`
4. 安装`webpack`和`webpack-cli`到开发环境里(devDependicies), 使用webpack 4+版本，需要安装cli，否则编译报错
   - `npm install --save-dev webpack webpack-cli`
5. 注意：在webpack 4.x中，有一个很大的特性，就是约定大于配置，目的是为了尽量减少配置文件的体积，默认约定：
   - 默认的打包入口路径是: `src/index.js`
   - 默认的打包路径是: `dist/main.js`
   - 4.x中新增了`mode`为必选项，可选的值为： `development、production`

```js
/* 项目结构： */
|— webpack-demo
  |— assets             // 其他资源
  |— dist               // 编译过后的文件
  |— node_modules       // 项目依赖
  |— src                // 源文件
   — .gitignore         // git上传忽略项
   — webpack.config.js  // 配置文件
   — package.json
```

#### 备注

1. -S: --save的简写，包会被安装在dependencies
2. -D: --save-dev的简写，包会被安装再devDependencies

### 三、webpack配置

1. 项目根目录新建文件: webpack.config.js
2. 在package.json中加入打包命令：`"scripts": {"build": "webpack"}`
3. 运行命令`npm run build`打包项目,没有配置output的情况下，默认会输出到：dist/main.js
4. 在index.html引用main.js，在浏览器中打开看编译效果

```js
const path = require('path')

// 向外暴露一个打包的配置对象； node语法
module.exports = {
  // webpack4+版本必须有mode这个属性，否则编译的时候会发出警告
  // 属性值包含：production | development | none
  mode: 'development',
  // 入口，可以配置多个entry: ["./app/entry1", "./app/entry2"]
  // webpack 4+版本，可以省略 entry, output
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),  // 输出路径，__dirname是当前文件的绝对路径
    filename: '[name].bundle.js'            // 输出文件名
    publicPath:  '/'                        // 指定静态资源的位置
  }
}
```

### 四、Loader

> Loader让webpack能够非javascript文件转换为webpack能够处理的有效模块(webpack自身只能处理Javascript)

#### 1.babel

> Bebel是一个使用广泛的ES6转码器，可以ES6代码转化为ES5代码，实现浏览器兼容

1. Babel5的时代，babel属于全家桶型，只要安装babel就会安装bebel相关的所有工具
2. Babel6移除全家桶安装，拆分为单独模块，例如：babel-core、babel-cli、bebel-node、babel-polyfill
3. Babel7全部挂在到了@babel下面，并提供多种配置方法
    - .babelrc
    - babel.config.js
    - webpack babel loader

- babel-loader: 让webpack知道如何运行babel
- babel-core: 让库知道如何解析代码
- babel-preset-env: 根据环境转换代码，解析ES6

[Babel Loader](https://github.com/babel/babel-loader)
[Webpack babel-loader](https://www.webpackjs.com/loaders/babel-loader/)

##### Install

> webpack 4.x | babel-loader 8.x | babel 7.x

`npm install -D babel-loader @babel/core @babel/preset-env`

##### Usage

1. 更新webpack.config.js
2. 项目根目录新建 `.babelrc`文件

```js
// webpack.config.js
module.exports = {
  ...
  module: { // 所有第三方 模块的配置规则
    rules: [{
      test: /\.js|jsx$/,
      use: 'babel-loader',
      exclude: /node_modules/
    }]
  }
}

// .babelrc
{
  "presets": ["@babel/preset-env"],
}
```

#### 2.处理css

1. 安装`style-loader css-loader`：此时直接打包，默认会将css和js混合在一起
2. 安装`mini-css-extract-plugin`: 最开始用的比较多的是`extract-text-webpack-plugin`,此插件现在已废弃，而且在使用过程中各种报错，webpack 3依旧可以使用。webpack 4+推荐使用`mini-css-extract-plugin`

```js
// install
npm install --save-dev style-loader css-loader
npm i -D mini-css-extract-plugin

// usage
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

plugins: [
  new MiniCssExtractPlugin({
    filename: '[name][hash:4].css',
    id: '[id].css'
  })
],
module: {
  rules: [{
    test: /\.css$/,
    use: [{
      loader: MiniCssExtractPlugin.loader,
      options: [{
        publicPath: '../',
        hmr: process.env.NODE_ENV === 'development'
      }, 'css-loader']
    }]
  }]
}
```

#### 3.加载图片

```js
// install
npm i --save-dev url-loader

// usage
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

#### 4.加载字体

```js
// install package
npm i --save-dev file-loader

// usage
rules: [
  {
    test: /\.(ttf|eot|otf|woff|woff2)$/,
    use: [{
      loader: 'file-loader',
      options: {
        name: '[name].[hash:4].[ext]',
        outputPath: './assets/'
      }
    }]
  }
]
```

### 五、插件

#### 1.html-webpack-plugin

> 生成一个自动引用打包后的js文件的html

```js
> npm install --save-dev html-webpack-plugin

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
// install
npm install --save-dev clean-webpack-plugin

// usage 3+版本 不用传参，默认就是output配置的目录
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
plugin: [
  new CleanWebpackPlugin(),
]
```

#### 3.版权申明

```js
const webpack = require('webpack');

plugin: [
  new webpack.BannerPlugin('©版权所有,翻版必究 2018-10-24'),
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
// install
npm install --save-dev webpack-dev-server

// usage
"scripts": {
  "start": "webpack-dev-server --open"
}

devServer: {
  contentBase: './dist',    //默认webpack-dev-server会为根文件夹提供本地服务器，如果想为另外一个目录下的文件提供本地服务器，应该在这里设置其所在目录（本例设置到“public"目录）
  port: 8080,
  inline: true    //自动刷新
}
```

#### 3.Webpack-Devtool

[详解webpack devtool](https://segmentfault.com/a/1190000008315937)

1. eval： 生成代码 每个模块都被eval执行，并且存在@sourceURL
2. cheap-eval-source-map： 转换代码（行内） 每个模块被eval执行，并且sourcemap作为eval的一个dataurl
3. cheap-module-eval-source-map： 原始代码（只有行内） 同样道理，但是更高的质量和更低的性能
4. eval-source-map： 原始代码 同样道理，但是最高的质量和最低的性能
5. cheap-source-map： 转换代码（行内） 生成的sourcemap没有列映射，从loaders生成的sourcemap没有被使用
6. cheap-module-source-map： 原始代码（只有行内） 与上面一样除了每行特点的从loader中进行映射
7. source-map： 原始代码 最好的sourcemap质量有完整的结果，但是会很慢

关键字解析：

- eval： 使用eval包裹模块代码
- source-map： 产生.map文件
- cheap： 不包含列信息（关于列信息的解释下面会有详细介绍)也不包含loader的sourcemap
- module： 包含loader的sourcemap（比如jsx to js ，babel的sourcemap）
- inline： 将.map作为DataURI嵌入，不单独生成.map文件（这个配置项比较少见）

##### ①.eval

> 可以设断点调试，不显示列信息，每个js模块代码用eval()执行，并且在生成的每个模块代码尾部加上注释，如WEBPACK FOOTER；module id（模块在数组中的索引） ；sourceURL（原js路径）。不会生成.map文件

##### ②.source-map

> 可以设断点调试，不显示列信息，生成相应的.Map文件，并在合并后的代码尾部加上注释//# sourceMappingURL=**.js.map ，可以看到模块代码并没有被eval()包裹，此种模式并没有将调试信息放入打包后的代码中，保持了打包后代码的简洁性

##### ③.eval-source-map

> 不能设断点调试，不显示列信息，可以用手动加入debugger调试;参考第一种eval模式，跟eval不一样的是其用base64存储map信息，不会生成.Map文件，Map信息以Base64格式存放在每个模块代码的尾部

##### ④.cheap-source-map

> 可以设断点调试，不显示列信息，生成相应的.Map文件，可参考source-map，不包含 loader 的 sourcemap

##### ⑤.cheap-module-source-map

> - A SourceMap without column-mappings. SourceMaps from loaders are simplified to a single mapping per line.
> - 不包含列信息，同时 loader 的 sourcemap 也被简化为只包含对应行的。最终的 sourcemap 只有一份，它是 webpack 对 loader 生成的 sourcemap 进行简化，然后再次生成的。

##### ⑥.cheap-module-eval-source-map

> - A SourceMap is added as DataUrl to the JavaScript file.
> - 可以设断点调试，不显示列信息，并在合并后的代码尾部以base64加入map信息

##### ⑦.hidden-source-map

> - Same as source-map but doesn’t add a reference comment to the bundle.
> - 跟source-map 一样，只不过不在打包后的文件中加入注释，断点要在打包好的js中加

### 七、npm常用包简介

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
