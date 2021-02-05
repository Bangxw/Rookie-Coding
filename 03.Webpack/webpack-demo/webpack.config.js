const path = require('path')

// 向外暴露一个打包的配置对象； node语法
module.exports = {
  // webpack4+版本必须有mode这个属性，否则编译的时候会发出警告
  // 属性值包含：production | development | none
  mode: 'development',
  // 入口，可以配置多个entry: ["./app/entry1", "./app/entry2"]
  // webpack 4+版本，可以省略 entry, output（默认打包入口，src/index.js; 默认输出路径：dist/main.js）
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),  // 输出路径，__dirname是当前文件所在目录的绝对路径
    filename: '[name].bundle.js',           // 输出文件名
    publicPath:  '/',                       // 指定静态资源的位置
  }
}