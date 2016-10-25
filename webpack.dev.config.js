var webpack = require('webpack');
var baseWebpackConfig = require('./webpack.config');

var config = {
    //hot module loading

    devtool: 'source-map'
}

baseWebpackConfig = Object.assign(baseWebpackConfig, config);
baseWebpackConfig.output.publicPath = '/dist'

module.exports = baseWebpackConfig