const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const styleLoaders = require("./loaders/style");
const babel = require("./loaders/babel");
const svg = require("./loaders/svg");
const gql = require("./loaders/gql");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");

const env = process.env.NODE_ENV;
const twainLicenseKey = process.env.TWAIN_LICENSE_KEY;
const isDev = env !== "production";

const config = {
  entry: [
    // "@babel/polyfill",
    "regenerator-runtime/runtime",
    "abort-controller/polyfill",
    "core-js/proposals/promise-all-settled",
    "core-js/features/array/flat.js",
    "core-js/features/string/replace-all.js",
    "whatwg-fetch",
    path.join(__dirname, "..", "..", "src", "index.tsx")
  ],

  output: {
    path: path.join(__dirname, "..", "..", "dist")
  },

  module: {
    rules: [
      babel,
      svg,
      gql,
      ...styleLoaders,
      {
        loader: "webpack-ant-icon-loader",
        enforce: "pre",
        options: {
          chunkName: "antd-icons"
        },
        include: [require.resolve("@ant-design/icons/lib/dist")]
      }
    ]
  },

  resolve: {
    extensions: [".tsx", ".ts", ".js", ".jsx", ".json"]
  },

  plugins: [
    new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /ru/),
    new webpack.DefinePlugin({
      isDev: JSON.stringify(isDev),
      twainLicenseKey: JSON.stringify(twainLicenseKey)
    }),
    new MiniCssExtractPlugin({
      filename: "css/[name].[hash].css",
      chunkFilename: "css/[name].[hash].css"
    }),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "src/template/index.html",
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true
      }
    }),
    // new CopyPlugin([
    //   { from: 'src/template/css', to: 'css' },
    //   { from: 'src/template/js', to: 'js' },
    // ]),
    new CleanWebpackPlugin()
  ],

  optimization: {
    splitChunks: {
      chunks: "all",
      minChunks: 2,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: "~",
      automaticNameMaxLength: 30,
      name: true,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: 1
        },
        default: {
          minChunks: 2,
          priority: 0,
          reuseExistingChunk: true
        }
      }
    }
  }
};

module.exports = config;
