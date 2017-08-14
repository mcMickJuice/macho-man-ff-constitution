var webpack = require('webpack');
var baseWebpack = require('./webpack.config')
var CleanWebpackPlugin = require('clean-webpack-plugin')

var config = {
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({}),
    new CleanWebpackPlugin(['dist']),

  ]
}


config.plugins = (baseWebpack.plugins || []).concat(config.plugins);


module.exports = Object.assign(baseWebpack, config)