const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

module.exports = {
    devServer: {
        historyApiFallback: true,
        contentBase: path.resolve(__dirname, './dist'),
        open: true,
        compress: true,
        hot: true,
        port: 8082,
        host: '0.0.0.0'
    },
    // input
    entry: {
        main: path.resolve(__dirname, './src/index.js'),
    },
    mode: "development",
    devtool: 'source-map',
    // output
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].bundle.js',
    },
    // plugins
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './src/index.html'), // шаблон
            filename: 'index.html', // название выходного файла
        }),
        // применять изменения только при горячей перезагрузке
        new webpack.HotModuleReplacementPlugin(),
    ]
}