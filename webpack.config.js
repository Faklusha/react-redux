const path = require('path');
var webpack = require('webpack');

module.exports = function (env) {
    const isProd = env === 'production';

    return {
        context: __dirname,
        mode: isProd ? "production" : "development",
        devtool: isProd ? "none" : "source-map",
        entry: './src/index.js',
        output: {
            filename: 'bundle.js',
            path: path.resolve(__dirname, 'dist')
        },
        module: {
            rules: [
                {
                    test: /\.(css)$/,
                    use: [
                        { loader: 'style-loader' },
                        {
                            loader: 'css-loader',
                            options: {
                                minimize: isProd
                            }
                        }
                    ]
                },
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: ['babel-loader']
                }
            ]
        },
        plugins: [
            new webpack.HotModuleReplacementPlugin()
        ],
        devServer: {
            hot: true,
            open: true,
        },
        resolve: {
            extensions: ['*', '.js', '.jsx']
        },
        watch: !isProd
    };
};