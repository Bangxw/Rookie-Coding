# webpack

## 在网页中会引用那些常见的静态资源文件？

- js
  - .js .jsx .coffee .ts(Typescript 类c#)
- css
  - .css .less  .sass/.scss(sass废弃了)
- images
  - .jpg .png .gif .bpm .svg
- 字体文件(fonts)
  - .svg .ttf .eot .woff .woff2
- 模板文件
  - .ejs .jade .vue(这是在webpack中定义组件的方式，推荐这么用)

## 网页中引入的静态资源多了以后有什么问题

1. 网页加载很慢，因为我们要发起很多的二次请求
2. 要处理错综复杂的依赖关系

## 如何解决上述两个问题

1. 合并、压缩、精灵图、Base64编码
2. 可以使用之前学过的requresJS、也可以用webpack解决各个包之间的关系

## 什么是webpack

> webpack是前端的一个项目构建工具，给予nodejs开发出来的一个前端工具

## 如何实现

1. 使用Gulp，是基于task任务的
2. 使用webpack, 是基于整个项目进行构建的
   - 借助于webpack这个前端自动化构建工具，可以完美实现资源的合并、打包、压缩、混淆等功能

## webpack的安装方式

1. 运行`npm i webpack -g`全局安装webpack，这样就能在全局使用webpack的命令
2. 在项目根目录中运行 `npm i webpack --save-dev`安装到依赖中