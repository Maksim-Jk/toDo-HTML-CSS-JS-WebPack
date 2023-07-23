const HtmlWebpackPlugin = require("html-webpack-plugin");
const common = require("./webpack.common.js");
const { default: merge } = require("webpack-merge");
const path = require("path");

module.exports = merge(common, {
  mode: "development",
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "docs"),
    assetModuleFilename: "images/[name][ext]",
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
});
