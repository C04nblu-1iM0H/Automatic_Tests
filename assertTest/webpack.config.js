const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports ={
    mode: 'development',
    devtool: 'source-map',
    entry:['./js/get.js', './js/get.test.js'],
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, './out'),
    },
    devServer: {
        static: './out',
    },
    plugins: [new HtmlWebpackPlugin({ 
      template: "./index.html",
    })],
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          }
        }
      }
    ]
  },
}