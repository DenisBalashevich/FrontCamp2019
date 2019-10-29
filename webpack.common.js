var path = require('path');

module.exports = {
    entry: {
        main: './src/index.js',
        // polyfill: ['./node_modules/regenerator-runtime/runtime', './node_modules/core-js/es/promise/index.js']
    },
    output: {
        path: path.resolve(process.cwd(), 'public'),
        filename: "[name].js",
        chunkFilename: 'chunk-[id].js'
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: /(node_modules)/,
                loader: ['babel-loader'],
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
        ]
    }
}