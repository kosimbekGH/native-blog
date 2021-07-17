const HTMLPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: ['@babel/polyfill', './src/index.js'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: __dirname + '/dist'
  },
  plugins: [
    new HTMLPlugin({
      filename: 'index.html',
      template: './src/index.html'
    })
  ],
  resolve: {
    extensions: ['.js', '.ts']
  },
  module: {
    rules: [
      {
        test: /\.m?(js|ts)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'

        }
      }
    ]
  }
}
