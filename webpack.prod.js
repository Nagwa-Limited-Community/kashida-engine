const { merge } = require("webpack-merge")
const common = require("./webpack.common")

const sharedConfig = {
    mode: 'production',
    devtool: 'source-map'
}

module.exports = [merge(common[0], sharedConfig), merge(common[1], sharedConfig)]