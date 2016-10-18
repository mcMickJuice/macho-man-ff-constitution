var webpack = require('webpack');
var baseWebpack = require('./webpack.config')

var config = {
    //YOU NEED TO CONCAT THE PLUGINS HERE!
    // resolve: {
    //     alias:
    //include minified versions of react and the like! 
    // }
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify("production")
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ]
}


config.plugins = (baseWebpack.plugins || []).concat(config.plugins);


module.exports = Object.assign(baseWebpack, config)