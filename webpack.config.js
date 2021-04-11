const path = require('path');
const DynamicHtmlWebpackPlugin = require('dynamic-html-webpack-plugin');
const miniCss = require('mini-css-extract-plugin');

module.exports = {
  entry: {
    common: './src/index.js',
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
  },
  optimization: {
    minimize: false,
  },
  plugins: [
    new DynamicHtmlWebpackPlugin({
      dir: './src/pages',
      additionalChunks: {
        all: 'common',
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
        test: /\.(s*)css$/,
        use: [miniCss.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/',
            },
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        loader: 'file-loader',
        options: {
          outputPath: 'images/',
        },
      },
    ],
  },
};
