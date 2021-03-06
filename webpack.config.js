//html-webpack-plugin :webpack插件
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');
const base = require('./webpack.config.base.js')

module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    ...base,
    plugins: [
        ...base.plugins,
        new MiniCssExtractPlugin({
            // 类似于 webpackOptions.output 中的选项
            // 所有选项都是可选的
            filename: '[name].[chunkhash].css',
            chunkFilename: '[id].css',
        }),
    ],
    module: {
        rules: [
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: ["file-loader"]
            },
            {
                test: /\.styl$/,
                loader: ["style-loader", "css-loader", "stylus-loader"]
            },
            {
                test: /\.less$/,
                loader: ["style-loader", "css-loader", "less-loader"]
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
        ],
    }
};