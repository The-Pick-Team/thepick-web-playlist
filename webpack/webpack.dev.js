const webpack = require('webpack');

const { DIST_DIR, MODES } = require('./constants');

module.exports = {
  mode: MODES.DEVELOPMENT,
  devtool: 'cheap-module-source-map',
  devServer: {
    contentBase: DIST_DIR,
    historyApiFallback: true,
    hot: true,
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
};
