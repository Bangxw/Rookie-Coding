const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const webpack = require('webpack')

module.exports = {
  mode: 'development',
  entry: './src/js/index.js',
  output: {
    filename: '[name].bundle.js',
    publicPath: '/',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new ExtractTextPlugin('css/[name]-[hash:8].css'),
    // new HtmlWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Output Management',
      template: './src/template.html', //源模板文件
      filename: 'index.html',
      showErrors: true,
      inject: true,
      // chunks: ['index'],
      favicon: './src/images/favicon.ico',
      hash: true,
      minify: {
        caseSensitive: false, //是否大小写敏感
        removeComments: true, // 去除注释
        removeEmptyAttributes: true, // 去除空属性
        collapseWhitespace: true //是否去除空格
      }
    }),
    new CleanWebpackPlugin(['dist']),
    new webpack.BannerPlugin('©版权所有,翻版必究 2018-10-24')
  ],
  module: {
    rules: [
      {
        test: /\.(html|htm)$/,
        use: ['html-loader']
      },
      {
        test: /\.css$/,
        // use: ["style-loader","css-loader"]
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader'
        })
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|ico)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: '10240',
              name: 'img/[name].[hash:8].[ext]'
            }
          }
        ]
      },
      {
        test: /\.(ttf|eot|otf|woff|woff2)$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: 'font/[name].[hash:8].[ext]'
          }
        }]
      },
      {
        test: /\.xml$/,
        use: ['xml-loader']
      }
    ]
  },
  devServer: {
    // contentBase: './dist',
    port: 8080,
    inline: true
  }
}
