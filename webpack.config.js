const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
//const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = ({ runtimeChunk }) => ({
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
        runtimeChunk: runtimeChunk === '0' ? false : 'single'
    },
    plugins: [
        new CleanWebpackPlugin(),
        //new BundleAnalyzerPlugin()
    ]
});
