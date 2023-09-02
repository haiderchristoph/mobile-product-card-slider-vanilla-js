const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/src/index.html',
  filename: 'index.html',
  inject: 'body',
})

module.exports = {
  mode: 'development',
  entry: './src/main.js',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/dist',
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    HTMLWebpackPluginConfig,
    new CopyWebpackPlugin({ patterns: [{ from: 'src/assets', to: 'assets' }] }),
    new CopyWebpackPlugin({
      patterns: [{ from: 'favicon', to: 'favicon' }],
    }),
  ],
}
