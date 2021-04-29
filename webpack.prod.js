const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
//const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = {
    mode: 'production',
    entry: {
        a: './src/a.js',
        b: './src/b.js',
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
    },
    optimization: {
        runtimeChunk: 'single'
    },
    plugins: [
        new CleanWebpackPlugin(),
        //new BundleAnalyzerPlugin()
    ]
};
