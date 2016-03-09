var path = require('path');
var node_modules_dir = path.resolve(__dirname, 'node_modules');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var config = {
  entry: './app/main.js',

  output: {
    publicPath: '/'
  },

  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: [node_modules_dir],
      loader: 'babel'
    }, {
      test: /\.styl$/,
      loader: ExtractTextPlugin.extract("style", "css!autoprefixer!stylus?paths=./app/assets/styles")
    }, {
      test: /.*\.(gif|png|jpe?g|svg)$/i,
      loaders: [
        'url?limit=1'
      ]
    }, {
      test: /\.(woff|woff2|ttf|eot)$/,
      loader: 'url?limit=100000'
    }, {
      test: /\.json$/,
      loader: 'json'
    }],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Courage',
      template: 'app/index.html'
    }),
    new ExtractTextPlugin('style.css', {
      allChunks: true
    })

  ]
};

module.exports = config;
