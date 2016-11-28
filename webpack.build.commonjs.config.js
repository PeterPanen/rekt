const Webpack = require('webpack');

module.exports = require('./webpack.build.base.config')({
  output: {
    path: './build',
    filename: 'rekt.js',
    libraryTarget: 'commonjs2'
  },
  plugins: [
    new Webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ]
});
