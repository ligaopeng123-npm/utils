const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ReplaceWebpackPlugin = require("./ReplaceWebpackPlugin");
// const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: 'development',// 环境管理
    devtool: 'inline-source-map',
    entry: './__test__/index.ts',
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    externals: {
        // '@gaopeng123/fetch': 'commonjs2 @gaopeng123/fetch',
        // '@gaopeng123/utils': 'commonjs2 @gaopeng123/utils'
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(gif|png|jpe|jpg?g)$/i,
                type: 'asset/resource'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: '登录',
            template: './__test__/index.html'
        }),
        // new ReplaceWebpackPlugin({
        //     content: `
        //         window.aaa = {
        //             bbb: {
        //                 ddd: ''
        //             }
        //         };
        //     `
        // })
    ],
    experiments: {
        outputModule: true // 让模块可以使用import导入使用
    },
    output: {
        filename: 'main.js',
        libraryTarget: 'module', //module es6模式 umd模式
        path: path.resolve(__dirname, 'dist'),
        clean: true, // 清理冗余文件
    },
    target: 'web',
    devServer: {
        static: path.resolve(__dirname, '__test__/public'),
        // 端口
        port: 3003,
        // 打开浏览器
        open: true,
    }
};
