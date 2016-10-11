var webpack = require('webpack')
var path = require('path');
var CleanWebpackPlugin = require('clean-webpack-plugin')
var CopyWebpackPlugin = require('copy-webpack-plugin');

var babelQuery = {
    cacheDirectory: true,
    presets: ['stage-0', 'es2015', 'react']
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
        contentPath: distDir,
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
    devtool: 'cheap-eval-source-map',
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new webpack.optimize.CommonsChunkPlugin('common.js'),
        new CopyWebpackPlugin([
            {
            context: srcDir,
            from: '*.html',
            to: distDir
        },
        {
            from: 'assets',
            to: path.join(distDir, 'assets'),
            toType: 'dir'
        },
        {
            from: 'site.css',
            to: distDir
        }
        ])
    ]
}