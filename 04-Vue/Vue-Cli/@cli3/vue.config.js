module.exports = {
  baseUrl: process.env.NODE_ENV === 'production'
  ? '/production-sub-path/'
  : '/',
  outputDir: process.env.outputDir,
  assetsDir: 'assets',
  indexPath: 'index.html',
  filenameHashing: true,
  pages: {
    index: {
      entry: 'src/index.js',
      template: 'public/index.html',
      title: 'Index.Page'
    }
  }
}