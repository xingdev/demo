/**
 * Created by xingbozhang on 17/4/18.
 */

var path = require('path')

var WebpackConfig = function () {

}

module.exports = {
  entry: './app/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/assets/'
  },
  module: {
    rules: [
      {
        test: /\.less$/,
        use: [
          {loader: 'style-loader'},
          {loader: 'css-loader'},
          {loader: 'less-loader'},
        ],
      },
    ]
  },
}

function getWebpackConfig (config) {
  return function (webpackConfig) {
    return {
      entry: './app/index.js',
      output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/assets/'
      },
      module: {
        rules: [
          {
            test: /\.less$/,
            use: [
              {loader: 'style-loader'},
              {loader: 'css-loader'},
              {loader: 'less-loader'},
            ],
          },
        ]
      },
    }
  }
}

getWebpackConfig(config)(webpackConfig)
