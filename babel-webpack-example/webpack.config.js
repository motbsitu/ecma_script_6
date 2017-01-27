module.exports = {
  entry: './script.js',
  output: {filename: 'bundle.js'}, //can be named anything, but bundle most common
  module: {
    loaders: [
//test looks for .js files, loading the babel-loader, excluding node_modules
      {test: /\.js?/, loader: 'babel', exclude: /node_modules/}
    ]
  }
};
