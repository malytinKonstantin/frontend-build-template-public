const path = require('path')
const merge = require('webpack-merge')
const common = require('./common')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = merge(common, {
  mode: 'development',

  output: {
    filename: 'js/[name].[hash].js',
    chunkFilename: 'js/[name].chunk.[hash].js',
  },

  devtool: 'source-map',

  devServer: {
    historyApiFallback: true,
    host: 'localhost',
    port: 8081,
    hot: true,
    watchOptions: {
      ignored: /node_modules/,
    },
  },
})
