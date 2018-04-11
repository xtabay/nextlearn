const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: { main: './src/index.js' },
    output: {
        path: path.resolve(__dirname, 'public/build'),
        filename: 'main.js'
    },
    module: {
        rules: [
        {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader"
            }
        },
        {
            test: /\.css$/,
            use: [
              MiniCssExtractPlugin.loader,
              "css-loader"
            ]
        },
            {
                test: /\.svg$/,
                loader: 'svg-inline-loader'
            }   
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        }),
        new HtmlWebpackPlugin({
            inject: false,
            hash: true,
            template: './public/index.html'
        })
    ]
};