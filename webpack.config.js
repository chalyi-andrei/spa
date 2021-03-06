const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');
const precss = require('precss');

const testMode = false;

module.exports = {
    entry: {
        js: testMode ? ['./test/ComponentTest.js'] : ['./app/js/index.js'],
        css: ['./app/scss/global.scss']
    },

    output: {
        filename:  testMode ? 'spec.js' : 'app.js',
        path: path.resolve(__dirname, testMode ? 'test' : 'client'),
        publicPath:  testMode ? '/test/' : '/client/'
    },

    watch: true,

    resolve: {
        modulesDirectories: ['node_modules', 'js'],
        extensions: ['', '.js', '.jsx', '.css', '.scss']
    },

    module: {
        preLoaders: [
            {
                test: /\.js?$/,
                loader: "eslint-loader", exclude: /node_modules/
            }
        ],

        loaders: [
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                loader: 'file?name=fonts/[name].[ext]'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react', 'stage-0', 'stage-1']
                }
            }, {
                test: /\.css$/,
                loader: 'style-loader!css-loader?sourceMap?modules=true&localIdentName=[local]_[hash:base64:5]!postcss?sourceMap'
            }, {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader?sourceMap!autoprefixer-loader!resolve-url!sass-loader?sourceMap')
            }
        ],

        sassLoader: {
            includePaths: [path.resolve(__dirname, "./app/scss")]
        }
    },

    postcss: function() {
        return [
            autoprefixer, precss
        ];
    },

    devtool: "inline-source-map",

    devServer: {
        hot: true,
        host: 'localhost',
        port: 3000,
        historyApiFallback: true
    },

    plugins: [
        new webpack.optimize.DedupePlugin(),
        new ExtractTextPlugin('global.css', {
            allChunks: true
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
};