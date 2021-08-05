const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

/**
 * 写在前面，本地启动hotUpdate后，会导致缓存失效！！！
 */

module.exports = {
    entry: {
        index: './src/index.tsx'
    },
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve('dist')
    },
    optimization: {
        moduleIds: 'hashed',
        splitChunks: {
            cacheGroups: {
                verdor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'verdors',
                    chunks: 'all'
                }
            }
        },
        runtimeChunk: 'single',
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"]
    },
    module: {
        rules: [
            {
                test: /\.ts(x?)$/,
                loader: 'awesome-typescript-loader',
                include: /src/,
                exclude: [/node_modules/, path.resolve('src/Wasm')],
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader!sass-loader'
            },
            {
                test: /\.glsl$/,
                loader: './loader/glslLoader.js'
            }
        ],
    },
    plugins: [
        new HtmlPlugin({
            template: './index.html',
            title: 'cache',
            // hash: true
        })
    ],
    mode: 'development'
}