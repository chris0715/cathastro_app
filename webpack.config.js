const path = require('path')
const webpack = require('webpack')
const Html = require('html-webpack-plugin')
module.exports = {
  entry: [
      'react-hot-loader/patch',
      'webpack-dev-server/client?http://localhost:9000',
      'webpack/hot/only-dev-server',
    __dirname + '/src/index.js'],
  output: {
    filename: 'bundle.js',
    path: __dirname + '/public',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ["env", "react"],
          plugins: ["react-hot-loader/babel", 'transform-class-properties']
        }
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader'  },
          { loader: 'css-loader' }
        ]
      },
      {
        exclude: [/\.html$/, /\.(js|jsx)$/, /\.json$/, /\.css$/],
        loader: 'file-loader',
        options: {
          name: 'static/media/[name].[ext]'
        }
      }

    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new Html({
      inject: true,
      template: __dirname + '/public/index.html',
    })
  ],
  devServer: {
    contentBase: __dirname + '/public',
    port: 9000,
    historyApiFallback: true,
    publicPath: '/',
    inline: true,
    hot: true
  }
}