const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const Dotenv = require('dotenv-webpack')

module.exports = (env = {}) => {
	const {mode = 'development'} = env
	const isProd = mode === 'production'
	const isDev = mode === 'development'

	const getStyleLoaders = preProcessor => {
		const loaders = [{loader: 'style-loader'}, {loader: 'css-loader'}]

		if (preProcessor) {
			loaders.push({loader: 'resolve-url-loader'}, {loader: preProcessor})
		}

		return loaders
	}

	return {
		mode: isProd ? 'production' : isDev && 'development',

		entry: ['./src/index.js'],

		output: {
			clean: true,
			publicPath: '/',
			path: path.resolve(__dirname, 'build'),
			filename: `bundle-${Number(new Date())}.js`,
		},

		devtool: isDev && 'cheap-module-source-map',

		module: {
			rules: [
				{
					test: /\.jsx?$/,
					exclude: /node_modules/,
					use: {
						loader: 'babel-loader',
						options: {
							cacheDirectory: true,
						},
					},
				},
				{
					test: /\.(css)$/,
					use: getStyleLoaders(),
				},
				{
					test: /\.(scss)$/,
					use: getStyleLoaders('sass-loader'),
				},

				{
					test: /\.(png|svg|jpg|jpeg|gif)$/i,
					use: [
						{
							loader: 'file-loader',
							options: {
								outputPath: 'images',
								name: '[name].[ext]',
							},
						},
					],
				},
				{
					test: /\.(woff|woff2|eot|ttf|otf)$/i,
					use: [
						{
							loader: 'file-loader',
							options: {
								outputPath: 'fonts',
								name: '[name].[ext]',
							},
						},
					],
				},
			],
		},

		resolve: {
			extensions: ['*', '.js', '.jsx', '.scss'],
			alias: {
				'@api': path.resolve(__dirname, './src/api'),
				'@assets': path.resolve(__dirname, './src/assets'),
				'@bus': path.resolve(__dirname, './src/bus'),
				'@pages': path.resolve(__dirname, './src/pages'),
				'@redux': path.resolve(__dirname, './src/redux'),
			},
		},

		devServer: {
			hot: true,
			open: true,
			historyApiFallback: true,
			client: {
				overlay: true,
			},
		},

		plugins: [
			new HtmlWebpackPlugin({
				inject: true,
				scriptLoading: 'blocking',
				template: 'public/index.html',
				favicon: 'public/favicon.ico',
			}),
			new Dotenv(),
		],
	}
}
