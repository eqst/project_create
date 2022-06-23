const path = require('path')
module.exports = {
    entry:'./src/index.ts',
    output:{
        path: path.resolve(__dirname,'dist'), // 所有文件打包输出木鹿
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
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.s[ac]ss$/i,
                use: ["style-loader", "css-loader", "sass-loader"],
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
                use: 'babel-loader'
            },
            {
                test: /\.ts$/i,
                use: ["ts-loader"]
            },
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    plugins: [

    ],
    // 开发模式
    mode: 'development', // production
}