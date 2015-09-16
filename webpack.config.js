var webpack = require('webpack')
var path = require('path')

module.exports = {
  entry: ['./src/app.babel.js'],
  output: {
    path: path.resolve('./lib'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  resolve: {
    extensions: ['', '.js']
  },
  module: {
    loaders: [
      { test: /\.js$/, loaders: ['babel?stage=0'] }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
}
