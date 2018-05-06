const path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const PATHS = {
    BUILD: path.resolve(__dirname, "build"),
    SRC: path.resolve(__dirname, "src")
};

module.exports = {
    context: PATHS.SRC,
    entry: "./index.jsx",
    optimization: {
        runtimeChunk: true,
        splitChunks: {
            chunks: "all"
        }
    },
    output: {
        path: PATHS.BUILD
    },
    resolve: {
        extensions: [".js", ".jsx"]
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                include: PATHS.SRC,
                loader: 'babel-loader'
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(["build"]),
        new HtmlWebpackPlugin({
            title: "React training",
            template: "index.html"
        })
    ]
};
