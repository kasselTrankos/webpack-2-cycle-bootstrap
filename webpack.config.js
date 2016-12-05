const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('webpack-uglify-js-plugin');
module.exports = {
  entry: [
      'bootstrap-loader', 
      './app/index.js'],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, "dist")
  },
  module: {
    loaders: [
      { test: /\.js$/,
        loaders: [
          'babel-loader',
        ],
        exclude: /node_modules/
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 5001,
    publicPath:'/',
    stats: { color: true },
  },
  devtool:'source-map',
  plugins: [new HtmlWebpackPlugin({
    title: 'My App',
    template:'index.template.ejs',
    inject:'body',
    filename: 'index.html'
  })/*,
    new UglifyJsPlugin({
      cacheFolder: path.resolve(__dirname, 'dist/'),
      sourceMap: true
    })*/]
};
