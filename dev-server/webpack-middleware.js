var webpack = require('webpack')
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackDevConfig = require('../webpack.dev.config');


module.exports = function(app) {
  var compiler = webpack(webpackDevConfig);
  var publicPath = webpackDevConfig.output.publicPath;
    //only pass to middleware if route matches publicPath
  app.use(publicPath,webpackDevMiddleware(compiler, {
    publicPath: '', //express strips publicPath from req.path...so webpack will consider bundle at root
    stats: {colors: true}  
  }))
}