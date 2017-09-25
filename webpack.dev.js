const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');


module.exports = merge(common, {
    entry: './src/app.js',
    output: {
      path: path.resolve(__dirname, "run"),
      filename: 'dev.bundle.js'
    },
  devServer: {
    contentBase: path.resolve(__dirname, "run")
  }
});
