const path = require('path')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const SitemapPlugin = require('sitemap-webpack-plugin').default

const routes = require('./src/router/routes')

const paths = routes.filter(route => route.path !== '*').map(route => {
  return {
    path: route.path,
    lastmod: new Date().toISOString(),
    priority: 0.5,
    changefreq: 'daily'
  }
})

const localhost = 'http://localhost:8080'
const url = 'https://evevides-cleaning-service.netlify.app/'
const baseUrl = process.env.NODE_ENV === 'production' ? url : localhost

module.exports = {
  // publicPath: process.env.NODE_ENV === 'development' ? '/' : '/projects/cleaning-service',
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: [path.resolve(__dirname, './src/styles/global.scss')]
    }
  },
  configureWebpack: {
    plugins: [
      new BundleAnalyzerPlugin({
        analyzerMode: 'json'
      }),
      new SitemapPlugin({
        base: baseUrl,
        paths,
        options: {
          filename: 'sitemap.xml',
          lastmod: true
        }
      })
    ]
  }
}
