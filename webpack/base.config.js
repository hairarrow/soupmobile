const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const baseMeta = [
  {
    name: 'description',
    content: 'Soup Kitchen Description'
  },
  {
    'http-equiv': 'Content-Type',
    content: 'text/html',
    charset: 'utf-8',
  },
  {
    property: 'og:url',
    content: 'http://www.soupmobile.org/',
  },
  {
    property: 'og:title',
    content: 'SoupMobile: Feeding and Sheltering the Homeless',
  },
  {
    property: 'og:description',
    content: 'SoupMobile is a non-profit, mobile soup kitchen feeding, sheltering, and caring for the homeless in Dallas. When Jesus said "Feed MY Sheep", we believe that He also meant love, compassion and shelter.',
  },
  {
    property: 'og:image',
    content: 'http://c1940652.r52.cf0.rackcdn.com/54e7a950ff2a7c55b6002b24/fb-preview-logo.jpg',
  },
]

const defaultHtml = {
  inject: false,
  template: require('html-webpack-template'),
  appMountId: 'app',
  meta: baseMeta,
  mobile: true,
  baseHref: 'http://www.soupmobile.org/',
  devServer: 'localhost:8080',
  googleAnalytics: {
    trackingId: 'UA-39322755-1',
    pageViewOnLoad: true,
  }
}

const htmlWebpackConfig = [
  new htmlWebpackPlugin(Object.assign({}, defaultHtml, {
    filename: 'index.html',
    title: 'Soup Mobile | Home',
    chunks: 'index',
  })),
  new htmlWebpackPlugin(Object.assign({}, defaultHtml, {
    filename: 'about.html',
    title: 'Soup Mobile | About',
    chunks: 'about',
  })),
];

module.exports = {
  context: path.resolve(__dirname, '../src'),
  entry: {
    index: './index.js',
    about: './about.js',
  },
  output: {
    path: path.resolve(__dirname, '../assets'),
    filename: '[name].bundle.[chunkhash].js',
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
  plugins: [
    ...htmlWebpackConfig,
    new CleanWebpackPlugin(
      ['assets/*.*'],
      {
        root: path.resolve(__dirname, '../'),
        exclude: ['.git/'],
        verbose: true,
      },
    ),
  ],
};
