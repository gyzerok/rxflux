module.exports = {
  entry: ['./src/index.js'],

  output: {
    path: './.tmp',
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel'
      }
    ]
  },

  resolve: {
    extensions: ['', '.js', '.jsx']
  },

  devServer: {
    contentBase: './',
    noInfo: true,
    hot: true,
    inline: false
  }
};
