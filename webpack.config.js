/**
 * Created by xingbozhang on 17/4/18.
 */

var path = require('path')
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
        test: /\.css$/,
        use: [
          {loader: 'style-loader'},
          {loader: 'css-loader'},
        ],
      },
      {
        test: /\.csv$/,
        use: [
          {loader: 'csv-loader'},
        ],
      },
    ]
  },
}
