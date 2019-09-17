let path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


module.exports = {
  entry: ['./src/js/app.js', './src/scss/main.scss', ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/app.js',
    publicPath: 'dist'
  },
  devServer: {
    overlay: true,
    port: 3000,
    open: true,
    hot: true,
    compress: true,
    publicPath: '/'
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader'
      },
      {
        test: /\.html$/,
        use: [ {
          loader: 'html-loader',
          options: {
            minimize: true
          }
        }],
      },

      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: '/node modules/'
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract([
          'css-loader',
        ]),
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      },
    ],
  },
  plugins: [
    new CopyPlugin([
      { from: 'src/img', to: './img' },
      { from: 'src/index.html', to: './'}
    ]),
    new MiniCssExtractPlugin({
      filename: 'css/styles.css'
    }),
    new ImageminPlugin({
      test: /\.(jpe?g|png|gif|svg)$/i
    }),
    new CleanWebpackPlugin(),
  ],


};
