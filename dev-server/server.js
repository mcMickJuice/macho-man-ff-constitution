var express = require('express')
var webpackMiddleware = require('./webpack-middleware');
var proxy = require('express-http-proxy');
var url = require('url');

var clientDevServer = express();
var jekyllServer = express();

var clientCodePort = process.env.CLIENT_PORT;
var jekyllPort = process.env.JEKYLL_PORT;

var jekyllProxy = proxy(`http://localhost:${jekyllPort}`, {
    intercept: (rsp, data, req, res, callback) => {
        //for index routes, webrick/jekyll server is returning 301 with trailing backslash
        //intercept these 301s and replace jekyll server port with client code port 
        if (res.statusCode === 301 && res.getHeader('location').indexOf(`:${jekyllPort}/`)) {
            res.setHeader('location', `http://localhost:${clientCodePort}${url.parse(rsp.headers.location).path}`);
        }
        callback(null, data);
    }
});

webpackMiddleware(clientDevServer);

//anything that passes through webpackMiddleware will arrive here
clientDevServer.all('/*', jekyllProxy)

clientDevServer.listen(clientCodePort, () => console.log(`Access local app at http://localhost:${clientCodePort}`))
jekyllServer.listen(jekyllPort, () => console.log(`jekyll port listening at http://127.0.0.1:${jekyllPort}.`))