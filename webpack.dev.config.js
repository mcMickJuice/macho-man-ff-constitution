var webpack = require('webpack');
var baseWebpackConfig = require('./webpack.config');

var config = {
    //hot module loading
    devtool: 'source-map'
}

module.exports = Object.assign(baseWebpackConfig, config);