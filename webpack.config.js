const path = require("path");

module.exports = {
    mode: 'development',
    entry: './src/index.tsx',
    devtool: "inline-source-map",
    output: {
        publicPath: "/",
        filename: "bundle.js",
        path: path.resolve(__dirname)
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    },
    resolve: {
        extensions: [".ts",".tsx",".js"]
    },
    devServer: {
        contentBase: './',
        port: 8080
    }
}