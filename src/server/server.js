const fs = require('fs');
const path = require('path');
const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const app = express();
const config = require('../../webpack.config.dev.js');
const compiler = webpack(config);

const DEFAULT_PORT = 3000;
const DIST_DIR = path.join(__dirname, 'dist')
const HTML_FILE = path.join(DIST_DIR, 'index.html');
const isDevelopment = process.env.NODE_ENV !== 'production';

// Tell express to use the webpack-dev-middleware and use the webpack.config.js
// configuration file as a base.
app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath
}));

// Use the hot middleware for instant reloading
app.use(webpackHotMiddleware(compiler));

// Data route
app.get('/getData', function(req, res) {
  var dataPath = path.join(__dirname, '/../../locales/en/data.json');
  var data = require(dataPath);
  res.status(200).json(data);
});

// Serve the files from the port.
app.listen(process.env.PORT || DEFAULT_PORT, function () {
  console.log('Example app listening on port 3000!\n');
});






// const Server = require('./server.js')
// const port = (process.env.PORT || 8000)
// const app = Server.app()

// if (process.env.NODE_ENV !== 'production') {
//   const webpack = require('webpack')
//   const webpackDevMiddleware = require('webpack-dev-middleware')
//   const webpackHotMiddleware = require('webpack-hot-middleware')
//   const config = require('../webpack.deployment.config.js')
//   const compiler = webpack(config)

//   app.use(webpackHotMiddleware(compiler))
//   app.use(webpackDevMiddleware(compiler, {
//     noInfo: true,
//     publicPath: config.output.publicPathdist
//   }))
// }

// app.listen(port)
// console.log(`Listening at http://localhost:${port}`)
