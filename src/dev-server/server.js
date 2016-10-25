var express = require('express')
var webpackMiddleware = require('./webpack-middleware');
var proxy = require('express-http-proxy');
var url = require('url');

var app = express();
var app1 = express();

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

webpackMiddleware(app);

//anything that passes through webpackMiddleware will arrive here
app.all('/*', jekyllProxy)

app.listen(clientCodePort, () => console.log(`app listening on port ${clientCodePort}`))
app1.listen(jekyllPort, () => console.log(`jekyll port listending on ${jekyllPort}`))