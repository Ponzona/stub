const WebpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');

const webpackConfig = require('../../webpack.config');
const compiler = webpack({ mode: 'development', ...webpackConfig });

const devServerOptions = Object.assign({}, webpackConfig.devServer);

const server = new WebpackDevServer(compiler, devServerOptions);

server.listen(8080, () => {
  console.log('Starting server on http://localhost:8080');
});
