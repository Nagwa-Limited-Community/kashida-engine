const path = require('path')
const TerserPlugin = require("terser-webpack-plugin");

const rules = [
    {
        test: /\.tsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: [

            {
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
            },
            {
                loader: 'ts-loader',
            },
        ]

    }
]

const optimization = {
    minimize: true,
    minimizer: [new TerserPlugin({
        test: /\.min\.m?js(\?.*)?$/i,
    })],
}

const resolve = {
    extensions: ['.ts', '...']
}

module.exports = [
    {
        entry: {
            "kashida-engine": "./src/index.ts",
            "kashida-engine.min": "./src/index.ts",
        },
        output: {
            path: path.resolve(__dirname, "dist"),
            filename: "[name].js",
            library: {
                name: "KashidaEngine",
                type: "window"
            }
        },
        module: { rules },
        optimization,
        resolve,
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
        experiments: { outputModule: true },
        module: { rules },
        optimization,
        resolve,
    },
]