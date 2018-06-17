const path = require('path');
const PATH_SRC = path.join(__dirname, 'client/src');
const PATH_DIST = path.join(__dirname, 'client/dist');

module.exports = {
  mode: 'development',
  entry: PATH_SRC + '/app.js',
  output: {
    path: PATH_DIST,
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: [
          path.resolve(__dirname, 'node_modules')
        ],
        loader: 'babel-loader',
        options: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
}