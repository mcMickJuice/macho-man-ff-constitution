const express = require('express');
const webpackConfig = require('./webpack.admin')
const webpackMiddleware = require('../dev-server/webpack-middleware')

const app = express();

webpackMiddleware(app, webpackConfig)

app.use(express.static(__dirname))

const serverInstance = app.listen(8080, err => {
  /*eslint-disable no-console */
  if (err) {
    console.log('an error has occurred', err);
    return;
  }

  serverInstance.keepAliveTimeout = 0;

  console.log('Admin app started at 8080');
});
