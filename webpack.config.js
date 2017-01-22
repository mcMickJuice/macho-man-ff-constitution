var webpack = require('webpack')
var path = require('path');
var CleanWebpackPlugin = require('clean-webpack-plugin')

var featureDir = path.join(__dirname, 'src/features')
var srcDir = path.join(__dirname, 'src')
var distDir = path.join(__dirname, 'dist');

module.exports = {
    entry:
    {
        calculator: path.join(featureDir, 'draft-pick-calculator/index.jsx'),
        "championship-belt": path.join(featureDir, 'championship-belt/index.jsx')

    },
    output: {
        filename: '[name].js',
        path: distDir,
        publicPath: distDir
    },
    resolve: {
        // extensions: ['', '.less', '.js', '.jsx']
        extensions: ['.less', '.js', '.jsx'] //removed empty extension webpack 2 change
    },
    module: {
        // loaders: [
        rules: [
            {
                test: /\.jsx?$/,
                include: path.join(__dirname, 'src'),
                // loader: 'babel',
                loader: 'babel-loader',
                // query: babelQuery
                options: {
                    cacheDirectory: true,
                    presets: ['es2015', 'react'],
                    plugins: ['transform-object-rest-spread']
                }
            },
            {
                test: /\.less$/,
                include: path.join(__dirname, './src'),
                // loader: 'style!css!less'
                use: [
                    "style-loader",
                    "css-loader",
                    "less-loader"
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new webpack.optimize.CommonsChunkPlugin('common')
    ]
}