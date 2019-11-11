const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack')

module.exports = {
  mode: 'development',
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
    publicPath: '/',
  },
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.BannerPlugin('©版权所有,翻版必究 2018-10-24'),
    new MiniCssExtractPlugin({
      filename: '[name].[hash:4].css',
      chunkFilename: '[id].css'
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
  ],
  module: {
    rules: [{
      test: /\.js$/,
      use: 'babel-loader',
      exclude: /node_modules/,
    }, {
      test: /\.css$/,
      use: [{
        loader: MiniCssExtractPlugin.loader,
        options: {
          publicPath: '../',
          hmr: process.env.NODE_ENV === 'development'
        }
      }, 'css-loader']
    }, {
      test: /\.(ttf|svg|woff|eot)$/,
      use: [{
        loader: 'file-loader',
        options: {
          name: '[name].[hash:4].[ext]',
          outputPath: './assets/'
        }
      }]
    }, {
      test: /\.(png|jpg|jpeg|gif)$/,
      use: [{
        loader: 'url-loader',
        options: {
          limit: 8192
        }
      }]
    }, {
      test: /\.xml$/,
      use: ["xml-loader"]
    }]
  },
  devServer: {
    contentBase: './dist',
    port: 8080,
    inline: true
  },
  devtool: 'eval'
}