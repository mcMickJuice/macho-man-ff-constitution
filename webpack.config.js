var webpack = require('webpack')
var path = require('path');
var CleanWebpackPlugin = require('clean-webpack-plugin')

var babelQuery = {
    cacheDirectory: true,
    presets: ['es2015', 'react'],
    plugins:['transform-object-rest-spread']
}

var featureDir = path.join(__dirname, 'src/features')
var srcDir = path.join(__dirname, 'src')
var distDir = path.join(__dirname, 'dist');

module.exports = {
    entry:
    {
        // vendor: ['react', 'react-dom'],
        calculator: path.join(featureDir, 'draft-pick-calculator/index.jsx'),
        "championship-belt": path.join(featureDir, 'championship-belt/index.jsx')

    },
    output: {
        filename: '[name].js',
        path: distDir,
        contentPath: distDir
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
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new webpack.optimize.CommonsChunkPlugin('common.js')
    ]
}