const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'none',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [{
      // test: /\.js$/,
      // exclude: /(node_modules|bower_components)/,
      // use: {
      //   loader: 'babel-loader',
      //   options: {
      //     presets: ['@babel/preset-env']
      //   }
      // }
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'ECMAScript6 学习',
      template: './src/app.html',
    })
  ],
  devServer: {
    port: 5656,
    inline: true
  }
}