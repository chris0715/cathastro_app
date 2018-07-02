const path = require('path')
const webpack = require('webpack')
module.exports = {
  entry: ['react-hot-loader/patch',
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
        use: 'babel-loader'
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    contentBase: __dirname + '/public',
    port: 9000,
    historyApiFallback: true,
    publicPath: '/'
  }
}