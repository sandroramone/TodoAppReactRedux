const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const Spread = require('@babel/plugin-proposal-object-rest-spread')

exports.jsRules = {
    test: /\.js[x]?$/,
    exclude: /node_modules/,
    use: {
        loader: 'babel-loader',
        options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: [Spread]
        }
    }
}

exports.htmlRules = {
    test: /\.html$/,
    use: [
        {
            loader: 'html-loader',
            options: { minimize: true }
        }
    ],
}

exports.cssRules = {
    test: /\.css$/,
    use: [
        MiniCssExtractPlugin.loader,
        // 'style-loader',
        {
            loader: 'css-loader',
            options: { minimize: { safe: true } }
        },
    ],
}

exports.fontRules = {
    test: /\.woff|.woff2|.ttf|.eot$/,
    use: [
        {
            loader: 'file-loader',
        },
    ],
}

// exports.webFontRules = {
//     test: /\.font.js$/,
//     use: [
//         MiniCssExtractPlugin.loader,
//         'css-loader', { loader: 'fontgen-loader', options: { embed: true } },
//     ],
// }

exports.imagesRules = {
    test: /\.(gif|jpg|png|svg)$/,
    use: [
        {
            loader: 'file-loader',
        },
    ],
}