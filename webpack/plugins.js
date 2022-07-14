const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require("dotenv-webpack");

module.exports = (rootDirectory, webappDirectory) => {
  return [
    new HtmlWebpackPlugin({
      template: path.join(webappDirectory, "index.html"),
      cache: false,
    }),
    new CopyPlugin({
      patterns: [
        {
          from: path.join(webappDirectory, "public"),
          to: path.join(rootDirectory, "dist"),
        },
      ],
    }),
    new Dotenv(),
  ];
};
