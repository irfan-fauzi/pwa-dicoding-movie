/* eslint-disable linebreak-style */
/* eslint-disable no-trailing-spaces */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable linebreak-style */
const { merge } = require('webpack-merge')
// eslint-disable-next-line import/extensions
const common = require('./webpack.common.js')

module.exports = merge(common, {
  mode: 'development',
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
