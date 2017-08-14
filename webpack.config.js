var webpack = require('webpack')
var path = require('path');

var featureDir = path.join(__dirname, 'src/features')
var distDir = path.join(__dirname, 'dist');

module.exports = {
  entry:
  {
    calculator: [path.join(featureDir, 'draft-pick-calculator/index.jsx')],
    'championship-belt': [path.join(featureDir, 'championship-belt/index.jsx')]

  },
  output: {
    filename: '[name].js',
    path: distDir,
    publicPath: '/dist'
  },
  resolve: {
    extensions: ['.less', '.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: path.join(__dirname, 'src'),
        loader: 'babel-loader',
        options: {
          cacheDirectory: true,
          presets: ['es2015', 'react'],
          plugins: ['transform-object-rest-spread']
        }
      },
      {
        test: /\.less$/,
        include: path.join(__dirname, './src'),
        use: [
          'style-loader',
          'css-loader',
          'less-loader'
        ]
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('common')
  ]
}