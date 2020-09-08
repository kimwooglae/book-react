const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { DefinePlugin, ProvidePlugin } = require('webpack');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: '[name].[chunkhash].js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-react']
                    }
                }
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './template/index.html'
        }),
        new DefinePlugin({
            APP_VERSION: "'1.1.22'",
            TEN: '10'
        }),
        new ProvidePlugin({
            React: 'react',
            ReactDom: 'react-dom',
            $: 'jquery'
        })
    ],
    mode: 'production'
}