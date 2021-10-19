/* eslint-disable linebreak-style */
/* eslint-disable import/no-extraneous-dependencies */
const { merge } = require('webpack-merge')
// eslint-disable-next-line import/extensions
const common = require('./webpack.common.js')
// eslint-disable-next-line import/order
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = merge(common, {
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
          },
        ],
      },
      {
        test: /\.js$/,
        exclude: '/node_modules/',
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: `[name].[${Math.random()}].css`,
    }),
  ],
})
