const path = require('path');

const distPath = path.resolve(__dirname, 'dist');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: distPath
  },
  devServer: {
    stats: 'errors-only',
    contentBase: distPath,
    compress: true,
    host: process.env.HOST,
    port: process.env.PORT,
    open: true
  }
};
