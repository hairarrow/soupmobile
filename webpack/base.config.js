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
  googleAnalytics: {
    trackingId: 'UA-39322755-1',
    pageViewOnLoad: true,
  },
}

const htmlWebpackConfig = [
  new htmlWebpackPlugin(Object.assign({}, defaultHtml, {
    title: 'Soup Mobile | Home',
    filename: 'index.html',
    chunks: ['index'],
  })),
  new htmlWebpackPlugin(Object.assign({}, defaultHtml, {
    filename: 'about.html',
    title: 'Soup Mobile | About',
    chunks: ['about'],
  })),
    new htmlWebpackPlugin(Object.assign({}, defaultHtml, {
      filename: 'about/faq.html',
      title: 'Soup Mobile | About: Frequently Asked Questions',
      chunks: ['aboutFaq'],
    })),
    new htmlWebpackPlugin(Object.assign({}, defaultHtml, {
      filename: 'about/in-the-news.html',
      title: 'Soup Mobile | About: In The News',
      chunks: ['aboutNews'],
    })),
      new htmlWebpackPlugin(Object.assign({}, defaultHtml, {
        filename: 'in-the-news/tv.html',
        title: 'Soup Mobile | About: In The News, TV',
        chunks: ['newsTv'],
      })),
      new htmlWebpackPlugin(Object.assign({}, defaultHtml, {
        filename: 'in-the-news/radio.html',
        title: 'Soup Mobile | About: In The News, Radio',
        chunks: ['newsRadio'],
      })),
      new htmlWebpackPlugin(Object.assign({}, defaultHtml, {
        filename: 'in-the-news/print.html',
        title: 'Soup Mobile | About: In The News, Print',
        chunks: ['newsPrint'],
      })),
    new htmlWebpackPlugin(Object.assign({}, defaultHtml, {
      filename: 'about/financials.html',
      title: 'Soup Mobile | About: In The News',
      chunks: ['aboutFinancials'],
    })),
    new htmlWebpackPlugin(Object.assign({}, defaultHtml, {
      filename: 'about/contact-us.html',
      title: 'Soup Mobile | About: In The News',
      chunks: ['aboutContact'],
    })),
  new htmlWebpackPlugin(Object.assign({}, defaultHtml, {
    filename: 'our-partners.html',
    title: 'Soup Mobile | Our Partners',
    chunks: ['partners'],
  })),
  new htmlWebpackPlugin(Object.assign({}, defaultHtml, {
    filename: 'volunteer.html',
    title: 'Soup Mobile | Volunteer',
    chunks: ['volunteer'],
  })),
  new htmlWebpackPlugin(Object.assign({}, defaultHtml, {
    filename: 'missions.html',
    title: 'Soup Mobile | Our Missions',
    chunks: ['missions'],
  })),
    new htmlWebpackPlugin(Object.assign({}, defaultHtml, {
      filename: 'our-missions/mission-one.html',
      title: 'Soup Mobile | Mission One',
      chunks: ['missionsOne'],
    })),
    new htmlWebpackPlugin(Object.assign({}, defaultHtml, {
      filename: 'our-missions/mission-two.html',
      title: 'Soup Mobile | Mission Two',
      chunks: ['missionsTwo'],
    })),
    new htmlWebpackPlugin(Object.assign({}, defaultHtml, {
      filename: 'our-missions/mission-three.html',
      title: 'Soup Mobile | Mission Three',
      chunks: ['missionsThree'],
    })),
    new htmlWebpackPlugin(Object.assign({}, defaultHtml, {
      filename: 'our-missions/mission-four.html',
      title: 'Soup Mobile | Mission Four',
      chunks: ['missionsFour'],
    })),
  new htmlWebpackPlugin(Object.assign({}, defaultHtml, {
    filename: 'donate-your-car.html',
    title: 'Soup Mobile | Donate Your Car',
    chunks: ['donateCar'],
  })),
  new htmlWebpackPlugin(Object.assign({}, defaultHtml, {
    filename: 'amazon-smile.html',
    title: 'Soup Mobile | Amazon Smile',
    chunks: ['amazonSmile'],
  })),
  new htmlWebpackPlugin(Object.assign({}, defaultHtml, {
    filename: 'store.html',
    title: 'Soup Mobile | Store',
    chunks: ['store'],
  })),
];

module.exports = {
  context: path.resolve(__dirname, '../src'),
  entry: {
    index: './entries/index.js',
    about: './entries/about.js',
    partners: './entries/ourPartners.js',
    aboutFaq: './entries/aboutFaq.js',
    aboutNews: './entries/aboutNews.js',
    aboutFinancials: './entries/aboutFinancials.js',
    aboutContact: './entries/aboutContact.js',
    volunteer: './entries/volunteer.js',
    missions: './entries/missions.js',
    missionsOne: './entries/missionsOne.js',
    missionsTwo: './entries/missionsTwo.js',
    missionsThree: './entries/missionsThree.js',
    missionsFour: './entries/missionsFour.js',
    donateCar: './entries/donateCar.js',
    amazonSmile: './entries/amazonSmile.js',
    store: './entries/store.js',
  },
  output: {
    path: path.resolve(__dirname, '../assets'),
    filename: '[name].bundle.[hash].js',
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
