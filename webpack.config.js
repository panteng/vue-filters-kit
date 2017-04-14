const path = require('path');

module.exports = {
    entry: [
        './main.js'
    ],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'bundles'),
        publicPath: '/bundles',
        
    },
    module: {
        loaders: [
            {
                test: /\.html$/, loader: "html"
            },
            {
                test: /\.css$/, loader: "style!css"
            }
        ]
    },
    resolve: {
        alias: {
            vue: 'vue/dist/vue.js'
        }
    },
    devServer: {
        contentBase: './'
    }
};