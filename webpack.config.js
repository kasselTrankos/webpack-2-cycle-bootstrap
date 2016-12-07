const path = require('path'),
  webpack = require('webpack'),
  HtmlWebpackPlugin = require('html-webpack-plugin'),
  BrowserSyncPlugin = require('browser-sync-webpack-plugin'),
  UglifyJsPlugin = require('webpack-uglify-js-plugin'),
  browserSync = [
    new BrowserSyncPlugin({
      host: 'localhost',
      port: 3002,
      proxy: 'http://localhost:5001/'
    }, {
      reload: false
    })
  ]
module.exports = {
  entry: [
      'webpack-dev-server/client?http://localhost:5001',
      'webpack/hot/dev-server',
      'bootstrap-loader',
      './app/index.js'],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, "dist"),
    publicPath: 'http://localhost:5001/'
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
    hot:true,
    port:5001,
    compress: true,
    chunks:false,
    historyApiFallback: true,
    stats: { color: true }
  },
  devtool:'source-map',
  plugins: [new HtmlWebpackPlugin({
    title: 'My App',
    template:'index.template.ejs',
    inject:'body',
    filename: 'index.html'
  }),
  new webpack.HotModuleReplacementPlugin(),
  ...browserSync
  /*,
    new UglifyJsPlugin({
      cacheFolder: path.resolve(__dirname, 'dist/'),
      sourceMap: true
    })*/]
};
