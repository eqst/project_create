const path = require('path');
const ESLintPlugin = require('eslint-webpack-plugin');
const HtmlWbepackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry:'./src/index.ts',
    output:{
        path: path.resolve(__dirname,'../dist'), // 所有文件打包输出目录
        filename: 'js/main.js', // 所有js文件去js目录下
        clean : true, // 清空上次打包结果
    },
    // 加载器
    module:{
        rules:[
            // loader配置
            // 处理css资源
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
            {
                test: /\.s[ac]ss$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
            },
            // 处理图片资源
            {
                test:/\.(png|jpg)$/i,
                type: 'asset',
                parser: {
                    dataUrlCondition: {
                        maxSize: 100 * 1024, // 一般 10kb 小于 100kb转 base64
                    }
                },
                generator: {
                    filename: 'static/img/[hash:10][ext][query]', // hash : 10 图片hash取前十位
                }
            },
            // 处理其他资源
            {
                test:/\.(mp3|mp4)$/i,
                type: 'asset',
                generator: {
                    filename: 'static/media/[hash:10][ext][query]', // hash : 10 图片hash取前十位
                }
            },
            // 处理js资源
            {
                test: /\.(js|jsx)$/i,
                use: "babel-loader"
            },
            {
                test: /\.(ts|tsx)?$/,
                use: [
                    {
                    loader: 'ts-loader',
                    options: {
                        transpileOnly: true,
                    },
                    },
                ],
            },
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    plugins: [
        // new ESLintPlugin({
        //     context : path.resolve(__dirname,'src'),
        //     extensions : ['.js','.jsx','.ts','.tsx','.html']
        // }),
        new MiniCssExtractPlugin(),
        new HtmlWbepackPlugin({
            // 自动引入 已该文件为模板
            template: path.resolve(__dirname,'../public/index.html')
        })
    ],
    // 开发模式
    mode: "production", // production
}