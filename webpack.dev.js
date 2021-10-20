/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
/* eslint-disable import/no-extraneous-dependencies */
const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')

module.exports = merge(common, {
  mode: 'development',
  // devServer: {
  //   contentBase: path.resolve(__dirname, 'dist'),
  // },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
        ],
      },
    ],
  },
})
