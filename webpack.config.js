const path = require('path');
const root = __dirname;
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: [
      path.resolve(root, 'src/main.js')
    ],
    output: {
        path: path.resolve(root, 'dist'),
        filename: 'bundle.js',
        // publicPath: "front-end/dist/"
    },
    module: {
        loaders: [
            {test: /\.js?$/, use: ['babel-loader'], exclude: /node_modules/},
            {test: /\.css$/, loader : 'style-loader!css-loader'},
            {test: /\.(png|jpg)$/, loader: "url-loader"},
            {
                test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url-loader?limit=10000&mimetype=application/font-woff"
            }, {
                test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url-loader?limit=10000&mimetype=application/font-woff"
            }, {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url-loader?limit=10000&mimetype=application/octet-stream"
            }, {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                loader: "file-loader"
            }, {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url-loader?limit=10000&mimetype=image/svg+xml"
            }
        ]

    },
    plugins: [
        new HtmlWebpackPlugin(
            {
                title: 'React Demo',
                template: path.resolve(root, 'index.html')
            }
        )
    ]
};
