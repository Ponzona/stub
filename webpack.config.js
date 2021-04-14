const path = require('path');
const DynamicHtmlWebpackPlugin = require('dynamic-html-webpack-plugin');
const miniCss = require('mini-css-extract-plugin');

module.exports = {
  entry: {
    common: './src/index.js',
    ts: './src/index.ts',
  },
  output: {
    filename: '[name]-bundle.js',
    path: path.resolve(__dirname, 'build'),
  },
  devServer: {
    contentBase: path.join(__dirname, 'build'),
    overlay: true,
    watchContentBase: true,
  },
  optimization: {
    minimize: true,
  },
  plugins: [
    new DynamicHtmlWebpackPlugin({
      dir: './src/pages',
      additionalChunks: {
        all: ['common', 'ts'],
      },
    }),
    new miniCss({
      filename: 'bundle.css',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.ts$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'ts-loader',
        },
      },
      {
        test: /\.(s*)css$/,
        use: [
          miniCss.loader,
          { loader: 'css-loader' },
          { loader: 'postcss-loader' },
          { loader: 'sass-loader' },
        ],
      },
      {
        test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'fonts/',
        },
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'images/',
        },
      },
    ],
  },
};
