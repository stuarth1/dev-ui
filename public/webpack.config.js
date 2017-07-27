var path = require('path');

var config = {
  entry: "./js/client.js",

  output: {
    path: __dirname + "/build/js",
    publicPath: '/build/js',
    filename: "client.min.js"
  },

   devServer: {
      inline: true,
      port: 8080,
      historyApiFallback: true,
   },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0'],
          plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy'],
        }
      },
      { 
        test: /\.css$/,
        loader: "style!css"
      },
      {
        test: /\.json$/,
        loader: "json"
      },
      {
        test: /\.sol$/,
        exclude: /node_modules/,
        loaders: ['solc']
      }
    ]
  }
}

module.exports = config;