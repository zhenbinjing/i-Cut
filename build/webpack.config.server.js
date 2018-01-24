const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const base = require('./webpack.config.base')
const VueSSRServerPlugin = require('vue-server-renderer/server-plugin')

module.exports = merge(base, {
  target: 'node',
  entry: './v-src/entry-server.js',
  resolve: {
    modules: [path.resolve(__dirname, 'v-src'), 'node_modules'],
    extensions: ['.js', '.vue', '.json']   
  },
  output: {
    path: path.resolve(__dirname, '../v-dist'),
    publicPath: '/v-dist/',
    filename: 'server-bundle.js',
    libraryTarget: 'commonjs2'
  },
  externals: Object.keys(require('../package.json').dependencies),
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
      'process.env.VUE_ENV': '"server"'
    }),
    new VueSSRServerPlugin()
  ]
})
