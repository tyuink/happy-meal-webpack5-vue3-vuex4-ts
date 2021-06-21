const baseWebpackConfig = require('./webpack.base.config');
const { merge } = require('webpack-merge');
const webpack = require('webpack');

module.exports = merge(baseWebpackConfig, {
  mode: 'development',
  devtool: 'eval-source-map',
  resolve: {
    alias: {
      'vue': 'vue/dist/vue.esm-bundler.js'
    },
  },
  plugins: [
    new webpack.DefinePlugin({
      __VUE_OPTIONS_API__: true,
      __VUE_PROD_DEVTOOLS__: false,
    })
  ]
})