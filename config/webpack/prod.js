const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const merge = require('webpack-merge')
const common = require('./common')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const CompressionPlugin = require('compression-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin')
const webpack = require('webpack')

module.exports = merge(common, {
  mode: 'production',

  output: {
    filename: 'js/[name].[hash].js',
    chunkFilename: 'js/[name].chunk.[hash].js',
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: (resourcePath, context) => {
                return path.relative(path.dirname(resourcePath), context) + '/css'
              },
            },
          },
          'css-loader',
        ],
      },
    ],
  },

  plugins: [
    new CompressionPlugin({
      cache: true,
    }),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new LodashModuleReplacementPlugin(),
  ],

  optimization: {
    runtimeChunk: true,
    providedExports: true,
    usedExports: true,
    sideEffects: true,
    minimize: true,
    minimizer: [
      new OptimizeCssAssetsPlugin({ cache: true }),
      new UglifyJsPlugin({ cache: true, parallel: true }),
    ],
  },
})
