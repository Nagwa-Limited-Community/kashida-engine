const path = require('path');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    entry: {
        main: "./src/index.ts",
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "kashida-engine.js"
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ["@babel/env",
                                {
                                    "useBuiltIns": "usage",
                                    "corejs": "3.17"
                                }],
                            "@babel/typescript"
                        ]
                    }
                }

            }
        ]
    },
    resolve: {
        extensions: ['.ts', '...']
    },
    plugins: [
        new CopyPlugin({
            patterns: [
                { from: "public/", to: path.resolve(__dirname, "dist/") },
            ]
        })
    ]
}