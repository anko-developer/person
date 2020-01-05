const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // sass를 css로 뱉어주는 plugin
const UglifyJSPlugin = require('uglifyjs-webpack-plugin'); // uglifyjs plugin - js 용량 압축 

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, './src/app'),
        filename: 'app.bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    // webpack4에서는 extract-text-webpack-plugin이 아직 적용되지 않았다.
                    // mini-css-extract-plugin로 대체하여 sass를 내부 style로 번들시키지 않고 css 파일로 별도 분리시켜준다.
                    MiniCssExtractPlugin.loader, 
                    { loader: 'css-loader' },
                    { loader: 'sass-loader' }
                ],
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    },
    optimization: {
        minimizer: [
            new UglifyJSPlugin()
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'app.component.css'
        })
    ]
};
