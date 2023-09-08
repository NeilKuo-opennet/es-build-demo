const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'my-library.js',
    library: {
      type: 'module', // 這裡設定成 ES Module
    },
  },
	experiments: {
		outputModule: true, // 這裡設定成 ES Module
	}
};