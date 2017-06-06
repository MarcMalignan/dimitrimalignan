var webpack = require('webpack');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');

module.exports = function(env) {
  const config = {
    entry: './app/main.jsx',
    output: {
      path: path.join(__dirname, 'dist'),
      filename: '[hash].bundle.js'
    },
    module: {
      loaders: [
        {
          test: /\.jsx?$/,
          include: path.join(__dirname, 'app'),
          loader: 'babel-loader'
        },
        {
          test: /\.scss$/,
          loader: ExtractTextPlugin.extract([
            'css-loader',
            'sass-loader'
          ])
        }
      ]
    },
    resolve: {
      extensions: ['.js', '.jsx']
    },
    plugins: [
      new CleanWebpackPlugin(['dist']),
      new HtmlWebpackPlugin({
        template: 'index.ejs'
      }),
      new ExtractTextPlugin({
        filename: '[hash].bundle.css',
        allChunks: true
      })
    ]
  };

  if(env === 'production') {
    config.devtool = 'source-map';
  } else {
    config.devtool = 'eval';
  }

  return config;
};
