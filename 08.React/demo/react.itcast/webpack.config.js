const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin') // 在内存中生成index页面的插件

const htmlPlugin = new HtmlWebpackPlugin({
  template: path.join(__dirname, './src/index.html'), // 源文件
  filename: 'index.html' // 生成的内存中首页的名称
})

// 向外暴露一个打包的配置对象； node语法
module.exports = {
  mode: 'development',
  plugins: [
    htmlPlugin
  ]
};
