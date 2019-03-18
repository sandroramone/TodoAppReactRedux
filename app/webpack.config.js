// const webpack = require('webpack')

let rules = require('./webpack.rules')
let plugins = require('./webpack.plugins')

rules = Object.keys(rules).map(value => rules[value])
plugins = Object.keys(plugins).map(value => plugins[value])

module.exports = {

    entry: './src/index.jsx',
    output: {
        path: __dirname + '/public',
        filename: './app.js'
    },
    devServer: {
        port: 8080,
        contentBase: './public',
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            modules: __dirname + '/node_modules'
        }
    },
    plugins,
    module: { rules }
}