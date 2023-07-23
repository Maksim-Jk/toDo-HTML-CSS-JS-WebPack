const HtmlWebpackPlugin = require("html-webpack-plugin");
const common = require('./webpack.common.js')
const path = require("path");
const { default: merge } = require("webpack-merge");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = merge(common, {
  mode: "production",
  output: {
    filename: "main.[contenthash].js",
    path: path.resolve(__dirname, "./dist/"),
    assetModuleFilename: "images/[name].[hash][ext]",
    clean: true
  },
});
