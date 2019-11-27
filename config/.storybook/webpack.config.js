const path = require("path");
const styleLoaders = require("../webpack/loaders/style");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const SRC_PATH = path.join(__dirname, "../../src");
const { presets, plugins } = require("../../babel.config");

module.exports = async ({ config }) => {
  config.module.rules.push({
    test: /\.(js|ts|tsx)$/,

    include: [SRC_PATH],

    use: [
      {
        loader: "babel-loader",
        options: {
          presets,
          plugins
        }
      },
      {
        loader: "react-docgen-typescript-loader",
        options: {
          tsconfigPath: path.resolve(__dirname, "../../tsconfig.json")
        }
      }
    ]
  });

  styleLoaders.forEach(l => {
    config.module.rules.push(l);
  });

  config.plugins.push(
    new MiniCssExtractPlugin({
      filename: "css/[name].css",
      chunkFilename: "css/[id].css"
    })
  );

  config.resolve.extensions.push(".ts", ".tsx");

  return config;
};
