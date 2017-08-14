var webpack = require('webpack')
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware')
var webpackDevConfig = require('../webpack.dev.config');


module.exports = function(app) {
  var compiler = webpack(webpackDevConfig);
    //only pass to middleware if route matches publicPath
  app.use(webpackDevMiddleware(compiler, {
    publicPath: '/dist',
    stats: {colors: true}  
  }))

  app.use(webpackHotMiddleware(compiler))
}