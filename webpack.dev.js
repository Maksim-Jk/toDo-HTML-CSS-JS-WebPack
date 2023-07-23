const HtmlWebpackPlugin = require("html-webpack-plugin");
const common = require('./webpack.common.js')
const { default: merge } = require("webpack-merge");
const path = require("path");

module.exports = merge(common, {
  mode: "development",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    assetModuleFilename: "images/[name][ext]",
  }
});
