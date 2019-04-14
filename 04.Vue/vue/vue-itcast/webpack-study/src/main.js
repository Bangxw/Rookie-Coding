// 这个main.js 是项目的入口问题

// 1. 导入jquery包

//es6语法 浏览器解析不了
import $ from 'jquery'

$(function() {
  $('li:odd').css('backgroundColor', "lightblue")
  $('li:even').css('backgroundColor', function() {
    return '#' + 'D97634'
  })
})

// webpack能够处理 JS文件的互相依赖关系
// webpack能够处理JS的兼容问题

// 运行命令 webpack ./src/main.js ./dist/bundle.js