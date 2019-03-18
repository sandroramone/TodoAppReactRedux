const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebPackPlugin = require('html-webpack-plugin')

exports.HtmlPLugin = new HtmlWebPackPlugin({
    template: './public/index.html',
    filename: 'index.html',
})

exports.CssPlugin = new MiniCssExtractPlugin({
    filename: '[name].[hash].css',
    chunkFilename: '[id].[hash].css',
})