const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: {
        // page1: './src/index1.js',
        // page2: './src/index2.js',
        page3: './src/index3.js',
        page4: './src/index4.js'
    },
    output: {
        filename: '[name].js',
        chunkFilename: '[name].chunk.js',
        path: path.resolve(__dirname, 'dist')

    },
    plugins: [new CleanWebpackPlugin()],
    // optimization: {
    //     splitChunks: {
    //         chunks: 'all',
    //         minSize: 10,
    //         cacheGroups: {
    //             vendors: {
    //                 test: /[\\/]node_modules[\\/]/,
    //                 priority:2,
    //                 name: 'vendor'
    //             },
    //             defaultVendors: {
    //                 minChunks:1,
    //                 priority:1,
    //                 name: 'default'
    //             },
    //             reactBundle: {
    //                 // test: /[\\/]node_modules[\\/]/,
    //                 test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
    //                 name: 'react.bundle',
    //                 priority: 3,
    //                 minSize: 100
    //             }
    //         }
    //     }
    // },
    mode: 'production'
}
