const path = require('path')
const TerserPlugin = require("terser-webpack-plugin");


module.exports = [{
    entry: {
        "kashida-engine": "./src/index.ts",
        "kashida-engine.min": "./src/index.ts",
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].js",
        library: {
            type: "window"
        }
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
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin({
            test: /\.min\.js(\?.*)?$/i,
        })]
    },
    resolve: {
        extensions: ['.ts', '...']
    },
},
{
    entry: {
        "kashida-engine": "./src/index.ts",
        "kashida-engine.min": "./src/index.ts",
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].mjs",
        library: {
            type: "module"
        }
    },
    experiments: {
        outputModule: true,
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

    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin({
            test: /\.min\.js(\?.*)?$/i,
        })]
    },
    resolve: {
        extensions: ['.ts', '...']
    },
},
]