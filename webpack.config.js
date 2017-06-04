var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');

module.exports = {
  entry: [
    './app/js/main.js',
    './app/sass/main.scss'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: path.join(__dirname, 'app/js'),
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
  plugins: [
    new ExtractTextPlugin({
      filename: 'bundle.css',
      allChunks: true
    })
  ]
};
