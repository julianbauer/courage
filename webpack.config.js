var path = require('path');
var node_modules_dir = path.resolve(__dirname, 'node_modules');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var config = {
    entry: ['webpack/hot/dev-server', path.resolve(__dirname, 'app/main.js')],

    output: {
        path: path.resolve(__dirname, 'build'),
				'publicPath': '/',
        filename: 'bundle.js'
    },

    module: {
        loaders: [{
            test: /\.jsx?$/,
						exclude: [node_modules_dir],
            loader: 'babel'
				}, {
						test: /\.styl$/,
						loader: ExtractTextPlugin.extract("style-loader", "css-loader!autoprefixer-loader!stylus-loader?paths=./app/assets/styles")
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
        title: 'Courage'
      }),
      new ExtractTextPlugin('style.css', {
          allChunks: true
      })

    ]
};

module.exports = config;
