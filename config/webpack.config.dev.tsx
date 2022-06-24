const path = require('path');
const ESLintPlugin = require('eslint-webpack-plugin');
const HtmlWbepackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

// 统一处理 样式资源
function getStyle (pre:string) {
    return [
        MiniCssExtractPlugin.loader,
        "css-loader",
        {
            loader: "postcss-loader",
            options: {
                postcssOptions: {
                    plugins: [
                        [
                            "postcss-preset-env",
                            {
                                // Options
                            },
                        ],
                    ],
                },
            },
        },
        pre
    ].filter(Boolean)
}
module.exports = {
    entry:'./src/index.ts',
    output:{
        path: undefined, // 开发模式没有输出
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
                use: getStyle('')
            },
            {
                test: /\.s[ac]ss$/i,
                use: getStyle('sass-loader')
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
    optimization: {
        // [...]
        minimize: true,
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
    devServer: {
        host: "localhost", // 启动服务器域名
        port: "3000",
        open: true
    },
    // 开发模式
    mode: 'development', // production
}