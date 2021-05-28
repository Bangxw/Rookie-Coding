const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.[hash:4].js', // 根据hash值生成不同的文件名，多次版本的迭代，可以有效的避免缓存问题
    publicPath: './'	// 默认配置会出现资源引用错误
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin(),
    new MiniCssExtractPlugin({	// 使用了mini-css-extract-plugin的loader必须配合plugin部分一起使用。否则会报错
      filename: '[name].bundle.[hash:4].css'  // 自定义css文件 
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [{
          // loader: 'style-loader',
          loader: MiniCssExtractPlugin.loader,
        }, {
          loader: 'css-loader'
        }],
      },
      {
        test: /\.s[ac]ss$/,
        include: [path.resolve(__dirname, 'src')],   // 限制打包范围，提高打包速度
        use: [{ 	// 当配置MinCssExtractPlugin.loader后，style-loader 就无需配置
          loader: MiniCssExtractPlugin.loader,  // 将处理后的CSS代码提取为独立的CSS文件
        }, {
          loader: "css-loader"    // CSS加载器，使webpack可以识别css文件
        }, {
          loader: "sass-loader"		// 编译sass，webpack默认使用node-sass进行编译，所以需要同时安装 sass-loader 和 node-sass
        }]
      },
      {
        test: /\.(png|gif|svg|jpg|jpeg)$/,
        use: [{
          loader: 'url-loader',
          options: {
            name: '[name].[hash:4].[ext]',
            limit: '10240'
          }
        }]
      },
      {
        test: /\.(ttf|eot|otf|woff|woff2)$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[hash:4].[ext]',
            outputPath: './assets/'
          }
        }] 
      }
    ]
  },
  devServer: {
    contentBase: './dist',    //默认webpack-dev-server会为根文件夹提供本地服务器，如果想为另外一个目录下的文件提供本地服务器，应该在这里设置其所在目录（本例设置到“public"目录）
    port: 8080,
    openPage: 'index.html',
    open: true,
    hot: true,
    hotOnly: true,
    publicPath: '/'
  }
}