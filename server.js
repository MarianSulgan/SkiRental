import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import proxyMiddleware from 'http-proxy-middleware';

import express from 'express';
import path from 'path';
import http from 'http';
import bodyParser from 'body-parser';
import webpackConfig from './webpack.config';
import { SERVER_URL } from './src/config';

const isProduction = process.env.NODE_ENV === 'production';
const isDeveloping = !isProduction;

const app = express();


// Webpack dev server
if (isDeveloping) {
  const WEBPACK_PORT = 3001;
  const compiler = webpack(webpackConfig);
  app.use(webpackMiddleware(compiler, {
    publicPath: webpackConfig.output.publicPath,
    stats: {
      colors: true,
      hash: false,
      timings: true,
      chunks: false,
      chunkModules: false,
      modules: false
    }
  }));

  app.use(webpackHotMiddleware(compiler));
  app.listen(WEBPACK_PORT, 'localhost', function (err, result) {
    if (err) {
      console.log(err);
    }

    console.log('WebpackDevServer listening at localhost:'+WEBPACK_PORT);
  });
}

//  RESTful API
const publicPath = path.resolve(__dirname);
// app.use(proxyMiddleware('/api', { target: SERVER_URL, pathRewrite: { '^/api': '' }, changeOrigin: true }));
// app.use(['/api', '/oauth', '/assets'], proxyMiddleware({target: SERVER_URL, changeOrigin: true}));
app.use(bodyParser.json({ type: 'application/json' }))
app.use(express.static('static'));

const port = isProduction ? (process.env.PORT || 80) : 3000;

// this is necessary to handle URL correctly since client uses Browser History
app.get('*', function (request, response){
  response.sendFile(path.resolve(__dirname, '', 'index.html'))
})

// We need to use basic HTTP service to proxy
// websocket requests from webpack
const server = http.createServer(app);

server.listen(port, function (err, result) {
  if(err){
    console.log(err);
  }
  console.log('Server running on port ' + port);
}); 