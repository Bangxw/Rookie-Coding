const path = require('path')
const Webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

console.log('😁😁 Hello~鸭')

let htmlWebpackPluginConfig = function (file, chunks) {
  return {
    filename: file.replace(/app\.html/, 'index.html'),
    template: file === 'app.html' ? './src/app.html' : './src/pages/' + file,
    chunks: chunks,
    title: 'Admin Master',
    inject: true,
    mdnAssets: {
      src: [
        "https://cdn.bootcdn.net/ajax/libs/jquery/3.5.1/jquery.min.js",
        "https://cdn.bootcdn.net/ajax/libs/twitter-bootstrap/4.5.3/js/bootstrap.min.js",
        "//at.alicdn.com/t/font_1862331_du2ytcslobb.js",
      ],
      href: [
        'https://cdn.bootcdn.net/ajax/libs/twitter-bootstrap/4.5.3/css/bootstrap.min.css',
      ]
    },
  }
}

module.exports = {
  mode: 'development',
  entry: {
    app: path.resolve(__dirname, './src/app.js')
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/',
    filename: './[name].bundle.js'
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
    }, {
      test: /\.css$/,
      exclude: path.resolve(__dirname, '../node_modules'),
      use: [{
        loader: MiniCssExtractPlugin.loader,
      }, {
        loader: 'css-loader'
      }]
    }, {
      test: /\.scss$/,
      // include: [path.resolve(__dirname, 'src')],   // 限制打包范围，提高打包速度
      exclude: path.resolve(__dirname, './node_modules'),
      use: [{ // 当配置MinCssExtractPlugin.loader后，style-loader 就无需配置，原因看各自作用
        loader: MiniCssExtractPlugin.loader,  // 将处理后的CSS代码提取为独立的CSS文件，可以只在生产环境中配置，但我喜欢保持开发环境与生产环境尽量一致
      }, {
        loader: "css-loader"    // CSS加载器，使webpack可以识别css文件
      }, {
        loader: "sass-loader",       // 编译sass，webpack默认使用node-sass进行编译，所以需要同时安装 sass-loader 和 node-sass
        options: {      // loader 的额外参数，配置视具体 loader 而定
          sourceMap: true, // 要安装resolve-url-loader，当此配置项启用 sourceMap 才能正确加载 Sass 里的相对路径资源，类似background: url(../image/test.png)
        }
      }]
    }, {
      test: /\.(png|gif|svg|jpg|jpeg)$/,
      use: [{
        loader: 'file-loader',
        options: {
          esModule: false,
          outputPath: './assets/images/',
          name: '[name].[ext]',
        }
      }]
    }, {
      test: /\.(ttf|eot|otf|woff|woff2)$/,
      use: [{
        loader: 'file-loader',
        options: {
          name: '[name].[hash:4].[ext]',
          outputPath: './assets/fonts/'
        }
      }]
    }],
  },
  plugins: [
    // remove/clean your build folder(s).
    new CleanWebpackPlugin(),

    // 全局暴露统一入口
    new Webpack.ProvidePlugin({
      $: "jquery",
      Popper: ['popper.js', 'default'], // bootstrap v4依赖的资源
    }),
    // 使用了mini-css-extract-plugin的loader必须配合plugin部分一起使用。否则会报错
    new MiniCssExtractPlugin({
      filename: './assets/css/main.css'
    }),
    // 自动生成html模板
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: './src/app.html',
      title: 'Admin Master',
    }),
    new HtmlWebpackPlugin(htmlWebpackPluginConfig('app.html')),
    new HtmlWebpackPlugin(htmlWebpackPluginConfig('forms-basic.html', ['app'])),
    new HtmlWebpackPlugin(htmlWebpackPluginConfig('forms-advanced.html', ['app'])),
  ],
  devServer: {
    contentBase: './dist',
    port: 8800,
    inline: true
  },
  // 不打包jQuery.js 我们通过在模板页面直接用script引入
  externals: /^(jquery|\$)$/i
}