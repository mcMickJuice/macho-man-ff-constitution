var webpack = require('webpack')
var path = require('path');

var babelQuery = {
    cacheDirectory: true,
    presets: ['stage-0', 'es2015', 'react']
}

var featureDir = path.join(__dirname, 'src/features')

module.exports = {
    entry:
    {
        calculator: path.join(featureDir, 'draft-pick-calculator/index.jsx'),
        "championship-belt": path.join(featureDir, 'championship-belt/index.jsx')

    },
    output: {
        filename: '[name].js',
        path: path.join(__dirname, './dist'),
        contentPath: '/dist',
        publicPath: '/'
    },
    resolve: {
        extensions: ['', '.less', '.js', '.jsx']
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                include: path.join(__dirname, 'src'),
                loader: 'babel',
                query: babelQuery
            },
            {
                test: /\.less$/,
                include: path.join(__dirname, './src'),
                loader: 'style!css!less'
            }
        ]
    },
    devtool: 'cheap-eval-source-map'
}