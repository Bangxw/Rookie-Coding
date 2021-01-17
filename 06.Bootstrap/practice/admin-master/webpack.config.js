const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

module.exports = {
  mode: 'development',
  entry: {
    // 单页面需要用到的资源
    commonAssets: path.resolve(__dirname, './src/assets/common.assets.js'),
  },
  output: {
    publicPath: '/'
  },
  plugins: [
    new webpack.ProvidePlugin({ // bootstrap v4依赖的资源
      $: "jquery",
      Popper: ['popper.js', 'default'],
    }),
    new HtmlWebpackPlugin({
      title: 'Hello World APP',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        minifyCSS: true,
      },
      filename: 'index.html',
      template: './src/app.html',
    }),
    new HtmlWebpackPlugin({
      filename: 'forms-basic.html',
      template: './src/forms-basic.html',
      chunks: ['commonAssets'],
    }),
    new HtmlWebpackPlugin({
      filename: 'forms-advanced.html',
      template: './src/forms-advanced.html',
      chunks: ['commonAssets'],
    })
  ],
  module: {
    rules: [{
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    }, {
      test: /\.(sa|sc|c)ss$/,
      use: [{
        loader: "style-loader"
      }, {
        loader: 'css-loader'
      }, {
        loader: 'sass-loader'
      }]
    }, {
      test: /\.(ttf|eot|otf|woff|woff2)$/,
      use: [{
        loader: 'file-loader',
        options: {
          name: '[name].[hash:4].[ext]',
          outputPath: './assets/'
        }
      }]
    }, {
      test: /\.(html|htm)$/i,
      use: 'html-withimg-loader', // 解析 html中的图片资源
    }, {
      test: /\.(png|gif|svg|jpg|jpeg)$/,
      use: [{
        loader: 'file-loader',
        options: {
          esModule: false
        }
      }]
    }]
  },
  devServer: {
    contentBase: './dist',
    port: 8800,
    inline: true
  },
}