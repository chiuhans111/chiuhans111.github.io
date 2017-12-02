watchFilePlugin = require("watchfile-webpack-plugin");
const ClosureCompiler = require('google-closure-compiler-js').webpack;
const path = require('path');
var webpack = require('webpack')
module.exports = {
  entry: path.join(__dirname, 'dummy'),
  output: {
    filename: 'dummy_2.js',
    path: path.resolve(__dirname, '')
  },

  devServer: {
    publicPath: '/'
  }, plugins: [
    new watchFilePlugin({ watchFolder: "./demo/", watchExtension: "md" })
  ],
};