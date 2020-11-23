const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'production',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 8080,
    open: true,
    stats: {
    performance: false,
    warningsCount: false
    },
  }
};
