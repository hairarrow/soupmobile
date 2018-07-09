const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

const htmlWebpackConfig = [
  new htmlWebpackPlugin({
    template: path.resolve(__dirname, '../src/index.html'),
    filename: 'index.html',
    inject: 'body',
  }),
  new htmlWebpackPlugin({
    template: path.resolve(__dirname, '../src/about.html'),
    filename: 'about.html',
    inject: 'body',
    chunks: ['about'],
  }),
]

module.exports = {
  context: path.resolve(__dirname, '../src'),
  entry: {
    index: './index.js',
    about: './about.js',
  },
  output: {
    path: path.resolve(__dirname, '../assets'),
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
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: 'file-loader',
      }
    ],
  },
  performance: {
    maxEntrypointSize: 500000,
    maxAssetSize: 500000,
  },
  plugins: [ ...htmlWebpackConfig ],
};
