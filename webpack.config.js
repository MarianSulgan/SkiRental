'use strict';

const path = require('path');
const webpack = require('webpack');

module.exports = {
  devtool: '#inline-eval-source-map',
  entry: [
    'babel-polyfill',
    'webpack-hot-middleware/client?path=http://localhost:3000/__webpack_hmr',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: 'http://localhost:3000/dist/'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({'process.env.NODE_ENV': JSON.stringify('development')
    })
  ],
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          plugins: ['transform-runtime'],
          presets: ['es2015', 'stage-0', 'react'],
        }
      },
      {
        test: /\.json?$/,
        loader: 'json'
      },
      {
        test: /\.less?$/,
        loader: 'style!css!less'
      },
      {
        test: /\.css?$/,
        loaders: ['style', 'raw']
      },
      { test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)$/,
        loader: 'url',
        query: {limit: 10240}
      }
    ]
  }
};


