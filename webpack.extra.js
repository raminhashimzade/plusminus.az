const webpack = require('webpack');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  plugins: [
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    new CopyPlugin([
      { from: './src/assets/googlee009e07a42854a06.html', to: './' },
    ])
  ]
}
