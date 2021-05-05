const path = require('path')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = {
  // publicPath: process.env.NODE_ENV === 'development' ? '/' : '/projects/cleaning-service',
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: [path.resolve(__dirname, './src/styles/global.scss')]
    }
  },
  configureWebpack: {
    plugins: [new BundleAnalyzerPlugin()]
  }
}
