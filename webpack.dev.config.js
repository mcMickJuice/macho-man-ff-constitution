var webpack = require('webpack');
var baseWebpackConfig = require('./webpack.config');

var config = {
    devtool: 'source-map'
}

baseWebpackConfig = Object.assign(baseWebpackConfig, config);
baseWebpackConfig.output.publicPath = '/dist'

module.exports = baseWebpackConfig