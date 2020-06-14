const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
	entry: __dirname + "/src/index.js",
	output: {
		path: __dirname + '/dist',
		filename: 'bundle.js',
		publicPath: '/'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				use: 'babel-loader',
				exclude: [
					/node_modules/
				]
			},
			{
				test: /\.(sass|scss)$/,
				use: [
				  {
					  loader: "style-loader"
				  },
          {
					  loader: "css-loader"
				  },
          {
					  loader: "sass-loader"
				  },
        ]
			},
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: __dirname + "/public/index.html",
			inject: 'body'
		}),
	],
	devServer: {
		contentBase: './public',
		port: 7700,
	}
};

module.exports = config;
