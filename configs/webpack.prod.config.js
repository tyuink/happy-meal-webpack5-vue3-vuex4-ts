const baseWebpackConfig = require('./webpack.base.config');
const { merge } = require('webpack-merge');
const webpack = require('webpack');

module.exports = merge(baseWebpackConfig, {
  mode: 'production',
  devtool: false,
  plugins: [
    new webpack.DefinePlugin({
      __VUE_OPTIONS_API__: true,
      __VUE_PROD_DEVTOOLS__: false,
    })
  ]
});
