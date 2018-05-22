const path = require('path');

console.log('\n');

module.exports = {
  devtool: 'source-map',
  mode: 'production',
  entry: ['./src/index.js'],

  output: {
    publicPath: '/',
    path: path.resolve('./build'),
    filename: 'animated.js',
    library: 'animated',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },

  externals: [/(react)/, /(styled-components)/],

  resolve: {
    extensions: ['.js']
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: ['node_modules']
      }
    ]
  },

  stats: {
    colors: true,
    hash: false,
    timings: true,
    assets: true,
    chunks: true,
    chunkModules: true,
    modules: true,
    children: true
  }
};
