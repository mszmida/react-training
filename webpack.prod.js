const merge = require("webpack-merge");
const common = require("./webpack.common.js");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = merge(common, {
    mode: "production",
    devtool: "none",
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                parallel: true
            })
        ]
    },
    output: {
        filename: "[name].bundle.[chunkhash].js",
        chunkFilename: "[name].chunk.[chunkhash].js"
    },
    module: {
        rules: [
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
        new ExtractTextPlugin({
            filename: "assets/main.[md5:contenthash:hex:20].css"
        })
    ]
});
