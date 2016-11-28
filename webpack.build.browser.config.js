const path = require('path');
const Webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = require('./webpack.build.base.config')({
  output: {
    path: './build',
    filename: 'rekt.browser.js',
    library: 'Rekt',
    libraryTarget: 'var'
  },
  plugins: [
    new Webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new CopyWebpackPlugin([{
        from: path.resolve(__dirname, 'build/rekt.browser.js'),
        to: path.resolve(__dirname, 'demobrowser/')
    }])
  ]
});
