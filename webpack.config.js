const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const path = require('path');

module.exports = (env) => {
  const title = 'Dimitri Malignan';
  const themeColor = '#223f6b';

  const config = {
    entry: './app/main.jsx',
    output: {
      path: path.join(__dirname, 'dist'),
      filename: '[hash].bundle.js',
    },
    module: {
      loaders: [
        {
          test: /\.jsx?$/,
          include: path.join(__dirname, 'app'),
          loader: 'babel-loader',
        },
        {
          test: /\.scss$/,
          loader: ExtractTextPlugin.extract([
            'css-loader',
            'sass-loader',
            'postcss-loader',
          ]),
        },
        {
          test: /\.(jpe?g|svg)$/,
          loader: 'file-loader',
          options: {
            name: '[path][name].[ext]',
          },
        },
      ],
    },
    resolve: {
      extensions: ['.js', '.jsx'],
    },
    plugins: [
      new CleanWebpackPlugin(['dist']),
      new HtmlWebpackPlugin({
        template: 'index.ejs',
      }),
      new ExtractTextPlugin({
        filename: '[hash].bundle.css',
        allChunks: true,
      }),
      new FaviconsWebpackPlugin({
        title,
        background: themeColor,
        logo: './images/favicon.png',
        prefix: 'images/favicons-[hash]/',
        inject: true,
        icons: {
          android: true,
          appleIcon: true,
          appleStartup: false,
          coast: false,
          favicons: true,
          firefox: false,
          opengraph: false,
          twitter: false,
          yandex: false,
          windows: false,
        },
        emitStats: false,
        persistentCache: false,
      }),
      new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    ],
  };

  if (env === 'production') {
    config.devtool = 'source-map';
  } else {
    config.devtool = 'eval';
    config.devServer = {
      historyApiFallback: true,
    };
  }

  return config;
};
