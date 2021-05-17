const path = require('path')

module.exports = {
  alias: {
    '/@/': path.resolve(__dirname, './src')
  },
  hostname: '0.0.0.0', // 默认是localhost
  port: '8000', // 默认是3000
  open: true, // 浏览器自动打开
  https: false, // 是否开启https
  ssr: false, // 服务端渲染
  base: './', // 生产环境下的公共路径
  outDir: 'dist',
  proxy: {
    '/api': {
      target: 'http://127.0.0.1:7001', // 后端服务实际地址
      changeOrigin: true,
      rewrite: path => path.replace('/^\/api/', '')
    }
  }
}