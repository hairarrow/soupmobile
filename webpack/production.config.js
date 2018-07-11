const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./base.config.js');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = merge(baseConfig, {
  module: {
    rules: [
      {
        test: /\.(css||scss)$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader',
            {
              loader: 'postcss-loader',
              options: {
                config: {
                  path: path.resolve(__dirname, 'postcss.config.js'),
                },
              },
            },
            'sass-loader',
          ],
        }),
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin({
      filename: '[name].bundle.[chunkhash].css',
      allChunks: true,
    }),
  ],
});
