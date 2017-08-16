var webpack = require('webpack');
var path = require('path');

var srcDir = path.join(__dirname, 'src/');

module.exports = {
  entry: {
    admin: [
      'webpack/hot/dev-server',
      'webpack-hot-middleware/client',
      path.join(srcDir, 'index.jsx')
    ]
  },
  output: {
    filename: '[name].js',
    path: srcDir,
    publicPath: '/'
  },
  resolve: {
    extensions: ['.less', '.js', '.jsx']
  },
  devtool: 'cheap-module-source-map',

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
      }
    ]
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
};
