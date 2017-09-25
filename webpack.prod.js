const merge = require('webpack-merge');
const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common.js');
const path = require('path');


module.exports = merge(common, {
    entry: './src/app.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js'
    },
  plugins: [
    'transform-react-remove-prop-types',
    'transform-react-constant-elements',
    'transform-react-inline-elements'
],
 plugins: [
      new webpack.optimize.OccurrenceOrderPlugin(),
      new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),

      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify('production')
        }
      }),
      new UglifyJSPlugin({
            mangle: false,
            sourceMap: false
        }),
        new webpack.optimize.AggressiveMergingPlugin()
  ],
});
