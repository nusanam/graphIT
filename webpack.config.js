const path = require('path');

module.exports = {
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
            // not sure if i need below, if i do then i need to do 
            // npm install --save- dev @babel/plugin-transform-runtime
            // npm install --save @babel/runtime
            // plugins: ['@babel/plugin-transform-runtime', '@babel/transform-async-to-generator'],
          },
        }
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, 'dist'), // where output file should be saved
    filename: 'index_bundle.js' // what the output filename should be
  },
  mode: "development",
}