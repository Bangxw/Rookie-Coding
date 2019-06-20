# VUE-CLI

> Vue cli致力于将vue生态中的工具基础标准化。它确保各种构建工具能够基于智能的默认配置即可平稳衔接，让你专注于撰写应用上。

## @cli2

***

## @cli3

***

### CLI系统组件

- **CLI (@vue/cli)**
  - 用 _vue create_ 快速构建新项目脚手架
  - 用 _vue serve_ 构建新想法原型
  - 用 _vue ui_ 用图形化界面管理你所有的项目
- **CLI服务 (@vue/cli-service)**
  - 构建于webpack和webpack-dev-server之上
- **CLI插件 (@vue/cli-plugin-)**

### 安装使用

> 1. vue-cli包名改为@vue/cli, 如果全局安装了旧版本 vue-cli, 先通过 **npm uninstall vue-cli -g**卸载
> 2. node版本要求 ^8.9

``` bash
#install vue cli3
npm install -g @vue/cli

#create a project
vue create hello-world

# Project setup
npm install

# compiles and hot-reloads for development
npm run serve

# Compiles and minifies for production
npm run build

# Run your tests
npm run test

# Lints and fixes files
npm run lint

# Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
```

### 配置（配置vue.config.js）

**环境变量相关**:

- 开发环境（development）
- 测试环境（production）
- 发布环境（release）

``` bash
# 1.跟目录新建环境变量文件
touch .env.development | .env.production | .env.release

#.env.development
NODE.ENV=development
VUE_APP_xxx=xxx
...

#.env.production
NODE_ENV=production
VUE_APP_xxx=xxx
outputDir=dist

#.env.release
NODE_ENV=production
VUE_APP_xxx=xxx
outputDir=release

# 2.package.json配置
"scripts": {
  "serve": "vue-cli-service serve",
  "build": "vue-cli-service build",                     //打包测试版本
  "release": "vue-cli-service build --mode release",    //打包正式版本
  "lint": "vue-cli-service lint"
}
```

**配置文件**：

``` bash
# 1.跟目录新建vue.config.js
touch vue.config.js

# 2.插件安装
npm install --save-dev uglifyjs-webpack-plugin compression-webpack-plugin

# 3.vue.config.js
const path = require('path')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')               // 去console插件
const CompressionWebpackPlugin = require('compresstion-webapck-plugin') // gzip压缩插件

let resolve = (dir) => {
  return path.join(__direname, dir)
}

module.exports = {
  baseUrl: '/',                                                         // Default: '/', 基本路径, 相当于webpack的output.publicPath
  baseUrl: process.env.NODE_ENV === 'production'
    ? '/production-sub-path/'
    : '/'
  outputDir: process.env.outputDir,                                     // Default: 'dist', 输出环境目录, 相当于webpack的output.path(构建时目录会被清除，使用--no-clean规避,文件没有修改就不会重新构建)
  filenameHashing: false,                                               // 文件名用hash
  pages: {
    index: {
      entry: 'src/index/main.js',                                       // page入口
      template: 'public/index.html',                                    // 模板来源
      filename: 'index.html',                                           // 在dist/index.html的输出
      title: 'Index Page',                                              // 使用title选项时，template中的title标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
      chunks: ['chunk-verdors', 'chunk-common', 'index']                // 页面包含的块
    }，
    subpage: 'src/subpage/main.js'
  }
  assetsDir: '',                                                        // 用于嵌套生成的静态资源(js, css, img, fonts)的目录(相对于outputDir)
  indexPath: 'index.html',                                              // index.html的输出路径(相对于outputDir)
  pages: undefined,                                                     // 以多页面模式构建应用程序
  lintOnSave: true,                                                     // eslint-loader 是否在保存的时候检查  需要安装@vue/cli-plugin-eslint
  runtimeCompiler: false                                                // 是否使用包含运行时编译器的vue核心的构建
  transpileDependencies: [],                                            // 默认情况下bebel-loader忽略其中的所有文件 node_modules
  productionSourceMap: true,                                            // 生产环境sourceMap
  chainWebpack: config => {                                             // 项目目录别名配置alias
    config.reslove.alias
      .set('@', reslove('src'))
      .set('assets', reslove('src/assets'))
      .set('components', reslove('src/components'))
  },
  devServer: {
    host: '0.0.0.0',
    port: 8080,
    https: false,
    hotOnly: false,
    proxy: null,                                                        // 设置代理，string | object
    before: app => {}
  },
  configureWebpack: config => {                                         // webpack相关配置
    let plugins = [
      new UglifyJsPlugin([
        uglifyOptions: {
          compress: {
            warnings: false,
            drop_debugger: true,
            drop_console: true
          }
        }
      ]),
      new CompressionWebpackPlugin({
        asset: '[path].gz[query]',
        algorithm: 'gzip',
        test: new RegExp(
          '\\.(' +
          ['js', 'css'].join('|') +
          ')$'
        ),
        threshold: 10240,
        minRatio: 0.8
      })
    ]
  }，
  css: {                                                                // css相关配置
    modules: false,                                                     // 启用css modules
    extract: true,                                                      // 是否使用css分离插件
    sourceMap: false,                                                   // 开启css source maps?
    loaderOptions: {}                                                   // css预设器配置项
  },
  parallel: require('os').cpus().length > 1,                            // enabled by default if the machine has more than 1 cores
  pwa: {},                                                              // PWA插件相关配置
  pluginOptions: {}                                                     // 第三方插件配置
  ...
}
```