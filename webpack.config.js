const path = require('path');
const webpack = require('webpack');

module.exports = {
  devtool: process.env.NODE_ENV === 'production' ? 'none' : 'source-map',
  entry: ['./client/index'],
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        type: 'javascript/auto',
      },
      {
        test: /\.mjs$/,
        include: /node_modules/,
        type: 'javascript/auto',
      },
    ],
  },
  resolve: {
    mainFields: ['module', 'main', 'browser'],
    extensions: ['.js'],
  },
  plugins: [
    process.env.NODE_ENV !== 'production' && new webpack.HotModuleReplacementPlugin()
  ].filter(Boolean),
  devServer: {
    hot: true,
    contentBase: path.join(__dirname, 'dist')
  }
};
