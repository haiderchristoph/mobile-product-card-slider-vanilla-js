const path = require('path')
const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')

module.exports = merge(common, {
  mode: 'development',
  entry: './src/main.js',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/build',
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'build'),
    },
  },
})
