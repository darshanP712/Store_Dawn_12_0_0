const path = require("path");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
    devtool: 'source-map',
    entry: "./src/js/app.js",
    module: {
        rules: [
            {
                test: /\.svg$/,
                use: "svg-inline-loader",
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: ['@babel/preset-env'],
                  },
                },
            },
        ],
    },
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                terserOptions: {
                    ecma: undefined,
                    parse: {},
                    compress: {},
                    mangle: true, // Note `mangle.properties` is `false` by default.
                    module: false,
                    // Deprecated
                    output: null,
                    format: null,
                    toplevel: false,
                    nameCache: null,
                    ie8: false,
                    keep_classnames: undefined,
                    keep_fnames: false,
                    safari10: false,
                },
            }),
            new UglifyJsPlugin({
                minify(file, sourceMap) {
                  const extractedComments = [];
        
                  // Custom logic for extract comments
        
                  const { error, map, code, warnings } = require('uglify-js') // Or require('./path/to/uglify-module')
                    .minify(file, {
                      /* Your options for minification */
                    });
        
                  return { error, map, code, warnings, extractedComments };
                },
              }),
        ],
    },
    resolve: {
        extensions: ['.js','.jsx','.ts','.tsx','.json','.css','.scss','.html','.htm','.xml','.svg','.jpg','.jpeg','.png','.gif','.bmp','.ico','.webp','.woff','.woff2','.ttf','.eot','.otf','.csv','.xls','.xlsx','.txt','.md','.pdf','.doc','.docx','.ppt','.pptx'],
        modules: ['src', 'node_modules']
    },
    output: {
        path: path.resolve(__dirname, "./assets"),
        filename: "bundle.js",
    },
    plugins: [
        new UglifyJsPlugin({
            test: /\.js$/,
            exclude: /node_modules/,
            uglifyOptions: {
                warnings: false,
                parse: {},
                compress: {},
                mangle: true, // Note `mangle.properties` is `false` by default.
                output: null,
                toplevel: false,
                nameCache: null,
                ie8: false,
                keep_fnames: false,
                extractComments: true,
            }
        }),	
    ],
    watch: true,
    mode: process.env.NODE_ENV === "production" ? "production" : "development",
};
