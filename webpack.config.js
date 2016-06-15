var path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
var values = require('postcss-modules-values');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var devConfig = {
	entry: './src',
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'bundle.js'
	},
	module: {
	    loaders: [
	    	{
	    		test: /\.(jsx|js)$/,
	    		loader: 'babel',
	    		exclude: /node_modules/
	    	},
	    	{
		        test: /\.css$/,
		        // loader: "style-loader!css-loader?modules"
		        // loader: "style-loader!css-loader?modules&localIdentName=[path][name]---[local]---[hash:base64:5]"
		        // loader: "style-loader!css-loader?modules!postcss-loader"
		        loader: ExtractTextPlugin.extract("style-loader", "css-loader")
		    }
	    ]
    },
    postcss: [
		values
	],
	resolve: {
		extensions: ['', '.js', '.jsx', '.css', '.scss']
	},
    plugins:[
    	new HtmlWebpackPlugin(),
    	new ExtractTextPlugin('app.css', {
            allChunks: true
        }),
    ]

}

module.exports = devConfig;