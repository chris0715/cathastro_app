const path = require('path')
const webpack = require('webpack')
const Html = require('html-webpack-plugin')
module.exports = {
  entry:  __dirname + '/src/index.js',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/build',
    publicPath: './'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ["env", "react"],
          plugins: ['transform-class-properties']
        }
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader'  },
          { loader: 'css-loader' }
        ]
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new Html({
      inject: true,
      template: __dirname + '/public/index.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true
      }
    })
  ]
}