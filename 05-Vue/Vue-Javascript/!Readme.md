# Vue.js 官方文档

## 起步

$ mkdir Vue-Javascript && cd Vue-Javascript
$ touch !Readme.md

** 安装依赖 **
$ npm init -y
$ npm install webpack webpack-cli --save-dev

** 设置生产模式和开发模式并打包 **
$ webpack
"script": {
    "start": "webpack --mode development",
    "build": "webpack --mode production"
}

** 配置webpack-dev-server **
$ npm install webpack-dev-server --save-dev
"script": {
    "start": "webpack-dev-server --mode development --open",
    "build": "webpack --mode production"
}

** 加入Vue **
$ npm install vue
$ npm install vue-loader
$ npm install vue-template-comiler

** 解析css **
$ npm install css-loader

## 利用官方命令行工具快速搭建

** 安装 **
$ npm install --global vue-cli
$ vue init webpack Vue-Javascript

** 增加lodash **
$ npm i --save lodash