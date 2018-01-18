const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: './src/index.html',
    inject: 'body'
})

module.exports = {
    entry: './src/index.jsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            { test: /\.js$/, use: ['babel-loader', 'eslint-loader'], exclude: /node_modules/ },
            { test: /\.jsx$/, use: ['babel-loader', 'eslint-loader'], exclude: /node_modules/ },
            { test: /\.(s*)css$/, use: ['style-loader', 'css-loader', 'sass-loader'], exclude: /node_modules/ },
        ],
    },
    plugins: [
        HtmlWebpackPluginConfig
    ],
    resolve: {
        extensions: ['.js', '.jsx', '.json']
    },
    devServer: {
        historyApiFallback: true, // allows refresh without GET error
        proxy: {
            "/graphql": {
                target: 'http://localhost:5000',
                secure: false
            }
        },
    }
}
