const path = require('path');

module.exports = {
  context: path.resolve(__dirname, '../src'),
  entry: {
    index: './index.js',
  },
  output: {
    path: path.resolve(__dirname, '../dist', '../assets'),
    publicPath: '/assets',
    filename: '[name].bundle.js',
  },
  resolve: {
    extensions: ['.js', '.scss'],
    modules: ['node_modules'],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        use: ['babel-loader'],
      },
    ],
  },
  performance: {
    maxEntrypointSize: 500000,
    maxAssetSize: 500000,
  },
};
