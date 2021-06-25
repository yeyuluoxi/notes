// eslint-disable-next-line @typescript-eslint/no-var-requires
const {name} = require('./package');

module.exports = {
	publicPath: "./",
	outputDir: 'F:/myself/electron/note',
	assetsDir: 'static',
	filenameHashing: true,
	productionSourceMap: false,

	devServer: {
		headers: {
			'Access-Control-Allow-Origin': '*',
		},
		hot: true,
		port: 6683,
	},
	configureWebpack: {
		output: {
			library: `${name}-[name]`,
			libraryTarget: 'umd',// 把微应用打包成 umd 库格式
			jsonpFunction: `webpackJsonp_${name}`,
		},
	}
}
