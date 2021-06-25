// eslint-disable-next-line @typescript-eslint/no-var-requires

module.exports = {
	publicPath: "./",
	outputDir: 'note',
	assetsDir: 'static',
	// filenameHashing: true,
	productionSourceMap: false,

	devServer: {
		headers: {
			'Access-Control-Allow-Origin': '*',
		},
		hot: true,
		port: 6683,
	}
}
