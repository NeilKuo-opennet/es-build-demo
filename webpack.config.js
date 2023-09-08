const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'webpack'),
    filename: 'index.js',
      library: {
        type: 'module',
    },
  },
  experiments: {
    outputModule: true,
  }
}