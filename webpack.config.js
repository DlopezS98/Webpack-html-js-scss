const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.join(__dirname, "/dist"),
        filename: "bundle.js"
    },
    plugins: [ 
        new HtmlWebpackPlugin({ template: './public/index.html' }), 
        new MiniCssExtractPlugin({ filename: 'bundle.css' }) 
    ],
    devServer: {
        port: 5000
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [{ loader: MiniCssExtractPlugin.loader }, { loader: "css-loader" }, { loader: "sass-loader" }]
            }
        ]
    }
}