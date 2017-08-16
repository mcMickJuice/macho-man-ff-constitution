var webpack = require('webpack')
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware')

module.exports = function(app, config) {
  var compiler = webpack(config);
    //only pass to middleware if route matches publicPath
  app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
    stats: {colors: true}  
  }))

  app.use(webpackHotMiddleware(compiler))
}