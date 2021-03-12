module.exports = {
  publicPath: './',
  productionSourceMap: false, // 不产出 .map 文件

  outputDir: '../diary',
  devServer: {
    proxy: {
      '^/api': {
        target: 'http://localhost/diary-portal',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      },
    }
  }
}