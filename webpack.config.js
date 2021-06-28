const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");

const isDev = 'development';
const filename = (ext) => isDev ? `bundle${ext}` : `bundle[chunckhash].${ext}`;
const jsLoader = () => {
    const loaders = [
        {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env'],
                plugins: ['@babel/plugin-proposal-object-rest-spread'],
            },
        },
    ];
    // if (isDev) {
    //   loaders.push({})
    // }
    return loaders;
};

module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: 'development',
    entry: ['@babel/polyfill', './js/index.js'],
    stats: {
        children: true,
        errorDetails: true,
    },
    output: {
        path: path.resolve(__dirname, 'docs'),
        filename: 'js/index.js',
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'docs/'),
        compress: true,
        port: 9000,
        host: '0.0.0.0',
        disableHostCheck: true,
    },
    resolve: {
        extensions: ['.js'],
        alias: {
            '@': path.resolve(__dirname, 'src'),
            '@core': path.resolve(__dirname, 'src/core'),
        },
    },
    devtool: isDev ? 'inline-source-map' : false,
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            minify: !isDev,
        }),
        new HtmlWebpackPlugin({
            filename: 'experts.html',
            template: 'experts.html',
            minify: !isDev,
        }),
        new HtmlWebpackPlugin({
            filename: 'services.html',
            template: 'services.html',
            minify: !isDev,
        }),
        new HtmlWebpackPlugin({
            filename: 'pediatrics.html',
            template: 'pediatrics.html',
            minify: !isDev,
        }),
        new HtmlWebpackPlugin({
            filename: 'promotions.html',
            template: 'promotions.html',
            minify: !isDev,
        }),
        new HtmlWebpackPlugin({
            filename: 'legal.html',
            template: 'legal.html',
            minify: !isDev,
        }),
        new HtmlWebpackPlugin({
            filename: 'contacts.html',
            template: 'contacts.html',
            minify: !isDev,
        }),
        new CopyPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, 'src/img'),
                    to: path.resolve(__dirname, 'docs/img'),
                },
                {
                    from: path.resolve(__dirname, 'src/lightgallery'),
                    to: path.resolve(__dirname, 'docs/lightgallery'),
                }
            ],
        }),
        new MiniCssExtractPlugin({
            filename: filename('.css'),
        }),
        new ImageMinimizerPlugin({
            minimizerOptions: {
                plugins: [
                    ["jpegtran", { progressive: true }],
                    ["optipng", { optimizationLevel: 0 }],
                    ["mozjpeg", { quality: 90 }],
                    ]},
        }),
        new ESLintPlugin(),
    ],
    module: {
        rules: [
            { test: /\.txt$/, use: 'raw-loader' },

            {
                test: /\.scss$/i,
                exclude: /node_modules/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.(ttf|eot|woff|woff2|gif|otf)(\?v=[0-9]\.[0-9]\.[0-9])?$/i,
                use: [{
                    loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: 'fonts/',
                    publicPath: 'fonts/',
                }
                }]
            },
            {
                test: /\.(jpe?g|png|gif|svg|mp3)$/i,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'img/',
                        publicPath: 'img/',
                    }
                }]
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: jsLoader(),
            },
        ],
    },
};
