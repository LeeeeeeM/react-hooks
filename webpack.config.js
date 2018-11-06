const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
module.exports = {
    entry: './src/index',
    module: {
        rules: [{
            test: /\.js$/,
            use: 'babel-loader',
            exclude: '/node_modules'
        }, {
            test: /\.jsx$/,
            use: 'babel-loader',
            exclude: '/node_modules'
        }]
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname + '/public/js')
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    devServer: {
        hot: true,
        inline: true,
        progress: true,
        compress: true,
        host: '0.0.0.0',
        disableHostCheck: true,
        port: '8091'
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            inject: true
        }),
        new webpack.HotModuleReplacementPlugin() 
    ]
}
