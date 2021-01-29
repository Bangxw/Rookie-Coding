const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }, {
      test: /\.css$/,
      use: [{
        loader: MiniCssExtractPlugin.loader,
        options: {
          publicPath: './',
        }
      }, {
        loader: 'css-loader'
      }]
    }, {
      test: /\.scss$/,
      include: [path.resolve(__dirname, 'src')],   // 限制打包范围，提高打包速度
      use: [{
        loader: MiniCssExtractPlugin.loader,
      }, {
        loader: 'css-loader'
      }, {
        loader: 'sass-loader',
      }]
    }, {
      test: /\.(png|gif|svg|jpg|jpeg)/,
      use: [{
        loader: 'url-loader',
        options: {
          outputPath: './assets/images/',
          name: '[name].[ext]',
          limit: '10240'
        }
      }]
    }]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].bundle.css'
    })
  ]
}