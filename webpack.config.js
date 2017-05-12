const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const path = require('path');

module.exports = {
    entry : {
        app: "./src/app.js"
        // contacts: './src/contacts.js'
    },
    output : {
        path : path.resolve(__dirname, 'dist/'),
        filename : "[name].bundle.js"
    },
    module : {
        rules : [
            {
                test : /\.scss$/,
                use : ExtractTextPlugin.extract({
                    fallback : 'style-loader',
                    use: ['css-loader','sass-loader'],
                    // publicPath:'./dist'
                })
            },
            {
                test: /\.js$/,
                exclude:/node_modules/,
                use: [
                    'babel-loader'
                ]
            },
            {
                test: /\.pug$/,
                loaders: ['html-loader', 'pug-html-loader']
            },
            {
                test : /\.(png|jpe?g|svg)$/i,
                use : ['file-loader?name=[path][name].[ext]']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title : 'Project',
            template : './src/index.pug',
            // minify : {
            //     collapseWhitespace : true
            // },
            // excludeChunks:[
            //     'contacts'
            // ],
            hash: true
        }),
        // new HtmlWebpackPlugin({
        //     title : 'Contact Page',
        //     filename: 'contacts.html',
        //     template : './src/contacts.html',
        //     chunks : ['contacts'],
        //     hash: true
        // }),
        new ExtractTextPlugin({
            filename:'app.css',
            allChunks: true
        })
    ],
    devServer: {
        contentBase: path.join("dist/"),
        compress: true,
        port:8819,
        overlay: {
            warnings: true,
            errors: true
        },
        stats: "errors-only",
        open: true

    }
};