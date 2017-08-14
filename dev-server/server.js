var express = require('express');
var webpackMiddleware = require('./webpack-middleware');
var proxy = require('express-http-proxy');
var url = require('url');

var clientDevServer = express();

var clientCodePort = process.env.CLIENT_PORT;
var jekyllPort = process.env.JEKYLL_PORT;

var jekyllProxy = proxy(`http://localhost:${jekyllPort}`, {
  userResDecorator: (proxyResp, proxyRespData, userReq, userResp) => {
    //for index routes, webrick/jekyll server is returning 301 with trailing backslash
    //intercept these 301s and replace jekyll server port with client code port
    if (
      userResp.statusCode === 301 &&
      userResp.getHeader('location').indexOf(`:${jekyllPort}/`)
    ) {
      userResp.setHeader(
        'location',
        `http://localhost:${clientCodePort}${url.parse(
          proxyResp.headers.location
        ).path}`
      );
    }
    return proxyRespData;
  }
});

webpackMiddleware(clientDevServer);

//anything that passes through webpackMiddleware will arrive here
clientDevServer.all('/*', jekyllProxy);

/* eslint-disable no-console */
var clientServerInstance = clientDevServer.listen(clientCodePort, () => {
  clientServerInstance.keepAliveTimeout = 0;
  console.log(`Access local app at http://localhost:${clientCodePort}`);
});
/* eslint-enable no-console */
