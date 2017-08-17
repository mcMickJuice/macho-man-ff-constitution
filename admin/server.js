const express = require('express');
const webpackConfig = require('./webpack.admin');
const webpackMiddleware = require('../dev-server/webpack-middleware');
const dataService = require('./data-service');
const bodyParser = require('body-parser');

const app = express();

webpackMiddleware(app, webpackConfig);

app.use(express.static(__dirname));

app.use(bodyParser.json());

app.get('/api/teams', (req, res) => {
  dataService.getActiveTeams().then(teams => {
    res.send(teams);
  });
});

//add new result
app.post('/api/result', (req, res) => {
  dataService.addResult(req.body).then(() => {
    res.send('result added');
  });
});

const serverInstance = app.listen(8080, err => {
  /*eslint-disable no-console */
  if (err) {
    console.log('an error has occurred', err);
    return;
  }

  serverInstance.keepAliveTimeout = 0;

  console.log('Admin app started at 8080');
});
