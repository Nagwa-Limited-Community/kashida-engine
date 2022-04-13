const { merge } = require("webpack-merge")
const common = require("./webpack.common")

module.exports = merge(common[0], {
    mode: 'development',
    devtool: 'eval-source-map',
    devServer: {
        static: {
            directory: "public",
        },
        open: ["./نهج البردة-أحمد شوقي.html"],
        port: 'auto'

    },
})