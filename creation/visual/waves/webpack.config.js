const path = require('path');
module.exports = {
  mode: 'development',
  entry: path.join(__dirname, 'app', 'index'),
  watch: true,
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/dist/',
    filename: "bundle.js",
    chunkFilename: '[name].js'
  },
  module: {
    rules: [{
      test: /.jsx?$/,
      include: [
        path.resolve(__dirname, 'app')
      ],
      exclude: [
        path.resolve(__dirname, 'node_modules')
      ],
      loader: 'babel-loader',
      query: {
        presets: [
          ["@babel/env", {
            "targets": {
              "browsers": "last 2 versions"
            }
          }]
        ]
      }
    },{
      test: /.(frag|vert|txt)$/,
      loader: 'raw-loader'
    }]
  },
  resolve: {
    extensions: ['.json', '.js', '.jsx']
  },
  devtool: 'source-map',
  devServer: {
    contentBase: path.join('/dist/'),
    inline: true,
    host: '0.0.0.0',
    port: 8080,
  }
};