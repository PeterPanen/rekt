module.exports = {
  entry: './demo/app.js',
  output: {
    path: './demo',
    publicPath: '/',
    filename: 'app.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  },
  devtool: '#source-map'
};
