const path = require('path')

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
}