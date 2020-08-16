const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const webpack = require('webpack');
const path = require('path');

module.exports = env => {
  const title = 'Dimitri Malignan';
  const themeColor = '#223f6b';

  const config = {
    entry: './app/main.jsx',
    output: {
      path: path.join(__dirname, 'dist'),
      publicPath: '/',
      filename: '[name]-[hash:6].bundle.js',
      chunkFilename: '[name]-[hash:6].bundle.js',
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          include: path.join(__dirname, 'app'),
          loader: 'babel-loader',
        },
        {
          test: /\.scss$/,
          use: ['style-loader', 'css-loader', 'sass-loader'],
        },
        {
          test: /\.(jpe?g|svg)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: 'images/[name]-[hash:6].[ext]',
              },
            },
          ],
        },
      ],
    },
    resolve: {
      extensions: ['.js', '.jsx'],
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: 'index.ejs',
      }),
      new FaviconsWebpackPlugin({
        title,
        background: themeColor,
        logo: './images/favicon.png',
        prefix: 'images/favicons/[hash:6]/',
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
      contentBase: path.resolve(__dirname, 'dist'),
      compress: true,
      hot: true,
      historyApiFallback: true,
    };
    // config.plugins.push(new BundleAnalyzerPlugin());
  }

  return config;
};
