const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = (env, argv) => {
    const isProduction = argv.mode === "production";

    return {
        mode: isProduction ? "production" : "development",
        devtool: isProduction ? "none" : "source-map",
        devServer: {
            contentBase: path.join(__dirname, "build"),
            compress: true,
            hot: true
        },
        context: path.join(__dirname, "src"),
        entry: "./index.jsx",
        output: {
            path: path.join(__dirname, "build"),
            filename: "bundle.js"
        },
        resolve: {
            extensions: [".js", ".jsx"]
        },
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    loader: 'babel-loader',
                    exclude: /node_modules/,
                },
                {
                    test: /\.css$/,
                    use: ExtractTextPlugin.extract({
                        fallback: "style-loader",
                        use: "css-loader"
                    })
                }
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: "index.html",
                hash: true
            }),
            new ExtractTextPlugin({
                filename: "assets/main.css"
            }),
            new webpack.HotModuleReplacementPlugin()
        ]
    }
};
