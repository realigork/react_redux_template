const path = require('path');
const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const DEFAULT_PORT = 3000;

const app = express();
const config = require('../webpack.config.dev.js');
const compiler = webpack(config);

// Tell express to use the webpack-dev-middleware and use the webpack.config.js
// configuration file as a base.
app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath
}));

// Use the hot middleware for instant reloading
app.use(webpackHotMiddleware(compiler));

// Data route
app.get('/getData', function(req, res) {
  const dataPath = path.join(__dirname, '/../locales/en/data.json');
  const data = require(dataPath);
  res.status(200).json(data);
});

app.listen(process.env.PORT || DEFAULT_PORT, function () {
  return console.log('Example app listening on port 3000!');
});
