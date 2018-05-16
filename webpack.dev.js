const path = require("path");
const merge = require("webpack-merge");
const common = require("./webpack.common.js");
const webpack = require("webpack");

module.exports = merge(common, {
    mode: "development",
    devtool: "source-map",
    devServer: {
        contentBase: path.resolve(__dirname, "build"),
        compress: true,
        hot: true
    },
    output: {
        filename: "[name].bundle.js",
        chunkFilename: "[name].chunk.js"
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: "style-loader/url"
                    },
                    {
                        loader: "file-loader",
                        options: {
                            name: "[name].[hash].css",
                            outputPath: "assets/"
                        }
                    },
                    {
                        loader: "sass-loader"
                    }
                ]
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
});
