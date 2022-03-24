const path = require('path');
const webpack = require('webpack');
const { VueLoaderPlugin } = require('vue-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/main.ts',
    mode: 'development',
    devtool: 'source-map',
    output: {
        filename: 'main.js',
        publicPath: '/',
        path: path.resolve(__dirname, 'dist'),
    },
    resolve: {
        extensions: ['.ts', '.js', '.vue'],
        alias: {
            '@': path.resolve(__dirname, 'src'),
            'public': path.resolve(__dirname, 'public')
        }
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        historyApiFallback: {
            index: 'index.html'
        },
        compress: true,
        port: 9000
    },
    resolveLoader: {
        modules: ['node_modules', path.resolve(__dirname, 'src/loaders')],
    },
    module: {
        rules: [
            {
                test: /\.svg$/,
                type: 'asset'
            },
            {
                test: /\.md$/,
                loader: 'md-loader'
            },
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                options: {
                    appendTsSuffixTo: [/\.vue$/]
                },
                exclude: /node_modules/
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.s[ac]ss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                            additionalData: '@import "@/styles/global.scss";'
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            template: 'public/index.html'
        }),
        new webpack.DefinePlugin({
            '__VUE_OPTIONS_API__': true,
            '__VUE_PROD_DEVTOOLS__': false
        })
    ]
};