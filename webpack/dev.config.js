const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./base.config.js');
const WebpackNotifierPlugin = require('webpack-notifier');

module.exports = merge(baseConfig, {
  devtool: 'eval-source-map',
  devServer: {
    contentBase: path.resolve(__dirname, '../src'),
  },
  module: {
    rules: [
      {
        test: /\.(css||scss)$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              config: {
                path: path.resolve(__dirname, '../postcss.config.js'),
              },
            },
          },
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    new WebpackNotifierPlugin(),
  ],
});
