module.exports = (options) => ({
  entry: './index.js',
  output: options.output,
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  },
  plugins: options.plugins || []
});
