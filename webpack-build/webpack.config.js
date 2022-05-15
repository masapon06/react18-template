const path = require('path')

module.exports = {
  mode: 'development',
  entry: './src/index.tsx',
  output: {
    path: `${__dirname}/dist`,
    filename: 'index.js',
    chunkFilename: '[id].js',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
  },
  target: ['web', 'es5'],
  watch: true,
  watchOptions: {
    ignored: /node_modules/,
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
    port: 9000,
  },
}
