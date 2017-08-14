const webpackBaseConfig = require('./webpack.config');
const merge = require('webpack-merge')
const webpack = require('webpack')

var webpackDev = {
  devtool: 'cheap-module-source-map',
  output: {
    publicPath: '/dist'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
}

const webpackConfig = merge(webpackDev, webpackBaseConfig)

const middlewareClients = ['webpack/hot/dev-server', 'webpack-hot-middleware/client']
Object.keys(webpackConfig.entry).forEach(key => {
  const entryArr = webpackConfig.entry[key]

  webpackConfig.entry[key] = [...middlewareClients,...entryArr]
})

module.exports = webpackConfig