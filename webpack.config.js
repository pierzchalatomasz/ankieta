var webpack = require('webpack');

module.exports = {
  entry: './app/src/index.js',
  output: {
    path: __dirname,
    filename: './app/dist/index.js'
  },
  module: {
    loaders: [
      // Transpile any JavaScript file:
      { test: /\.js$/, loader: 'webpack-traceur?experimental' },
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({ minimize: true })
  ]
};