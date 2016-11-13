'use strict';

const ExtractTextPlugin = require('extract-text-webpack-plugin');

const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: [
    'babel-polyfill',
    path.join(__dirname, 'src/index.js')
  ],
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false,
        screw_ie8: true
      }
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    })
  ],
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
      }, {
        test: /\.less?$/,
        loader: 'style!css!less'
      },
      {
        test: /\.css?$/,
          loaders: ['style', 'raw']
      },
      {
        test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)$/,
        loader: 'url',
        query: {
          limit: 10240
        }
      }
    ]
  }
};
