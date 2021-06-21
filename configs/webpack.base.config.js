// webpack.config.js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader/dist/index');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = {
  mode: 'development',
  entry: './src/main.ts',
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, '../dist')
  },
  resolve: {
    extensions: ['.ts', '.js', '.json']
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [ MiniCssExtractPlugin.loader, 'style-loader', 'css-loader']
      },
      {
        test: /\.less$/,
        use: [ MiniCssExtractPlugin.loader, 'style-loader', 'css-loader', 'less-loader']
      },
      {
        test: /\.vue$/,
        use: [ 'vue-loader' ]
      },
      {
        test: /\.js$/,
        use: { loader: 'babel-loader', options: { presets: ['@babel/preset-env'] }},
        exclude: /node_modules/,
        include: path.resolve(__dirname, 'src')
      },
      {
        test: /\.ts$/,
        use: [
          {
            loader: 'ts-loader',
            options: { appendTsSuffixTo: [/\.vue$/] }
          }
        ],
      },
      {
        test: /\.(jpg|png|jpeg|gif|bmp)$/,
        use: [
          {
            loader: 'url-loader',
            options: { limit: 1024, fallback: { loader: 'file-loader', options: { name: '[name].[ext]' }}}
          },
          {
            loader: 'image-webpack-loader',
            options: { mozjpeg: { progressive: true }, optipng: { enabled: false }, pngquant: { quality: [0.65, 0.90], speed: 4 }, gifsicle: { interlaced: false }, webp: { quality: 75 }}
          }
        ]
      },
      {
        test: /\.(mp4|ogg|mp3|wav)$/,
        use: {
          loader: 'url-loader',
          options: { limit: 1024, fallback: { loader: 'file-loader', options: { name: '[name].[ext]' }}}
        }
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: 'index.html',
      title: 'Bus 3',
      minify: {
        collapseWhitespace: true,
        removeComments: true
      }
    }),
    new CopyWebpackPlugin({
      patterns: [{ 
        from: path.resolve(__dirname, '../public'), 
        to: path.resolve(__dirname, '../dist'), 
        globOptions: { dot: true, gitignore: true, ignore: ["**/.*", "**/index.html"]}
      }]
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].css'
    }),
    new BundleAnalyzerPlugin({
      analyzerMode: 'disabled',
      generateStatsFile: true
    }),
    new CleanWebpackPlugin(),
    new VueLoaderPlugin()
  ],

  optimization: {
    minimize: true,
    minimizer: [
        new TerserWebpackPlugin()
    ],
    runtimeChunk:'single',
    splitChunks:{
      cacheGroups:{
        vendor:{
          test:/[\\/]node_modules[\\/]/,
          name:'vendor',
          chunks:'all'
        }
      }
    }
  },

  devServer: {
    port: 8080,
    hot: true,
    open: false,
    contentBase: '../dist'
  }
}