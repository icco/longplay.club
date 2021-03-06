var StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');

var paths = [ '/' ]; 

module.exports = {
  entry: './entry.js',
  output: {
    filename: 'bundle.js',
    path: 'public',
    libraryTarget: 'umd'
  },
  module: {
    loaders: [ { test: /\.jsx$/, loader: 'jsx-loader' } ]
  },
  plugins: [ new StaticSiteGeneratorPlugin('bundle.js', paths, {}) ]
};
