const webpack = require('webpack');
const path = require('path');

const config = {
  entry: './react-client/src/index.jsx',
  output: {
    path: path.resolve(__dirname, 'react-client/dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  mode: 'production'
};

module.exports = config;
