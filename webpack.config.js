const path = require('path');

module.exports = {
  mode: "development",
  // publicPath: '/dist/',
  entry: './client/index.js', // entry point of root JS file
  module: { // this describes which transformations to make on your code via loaders
    /* Hey webpack compiler, when you come across a path that resolves to a * '.txt' file inside of a require()/import statement, use the raw-loader to * transform it before you add it to the bundle.
    */
    rules: [
      {
        test: /\.jsx?/,
        // we don't need to transpile the node modules so exclude them
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        }
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, 'dist'), // where output file should be saved
    filename: 'index_bundle.js' // what the output filename should be
  },
  devServer: {
    publicPath: '/dist/',
    // don't need to change this for express.js
    contentBase: './client/', // forward slash, /, bc that's where html file is
  }
}