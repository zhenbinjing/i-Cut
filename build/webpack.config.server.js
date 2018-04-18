const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const base = require('./webpack.config.base')
const nodeExternals = require('webpack-node-externals')
const VueSSRServerPlugin = require('vue-server-renderer/server-plugin')

if (process.env.NODE_ENV === 'production') {
  moshi = 'production'
}
else {
  moshi = 'development'
};

module.exports = merge(base, {
  mode: moshi,
  target: 'node',
  entry: './v-src/entry-server.js',
  resolve: {
    modules: [path.resolve(__dirname, 'v-src'), 'node_modules'],
    extensions: ['.js', '.vue', '.json']
  },
  output: {
    path: path.resolve(__dirname, '../v-dist/'),
    publicPath: '/v-dist/',
    filename: 'server-bundle.js',
    libraryTarget: 'commonjs2'
  },
  externals: Object.keys(require('../package.json').dependencies),
  externals: nodeExternals({
    // do not externalize CSS files in case we need to import it from a dep
    whitelist: /\.css$/
  }),
  plugins: [
    new VueSSRServerPlugin()
  ]
})
