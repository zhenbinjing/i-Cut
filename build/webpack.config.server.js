const webpack = require('webpack')
const merge = require('webpack-merge')
const nodeExternals = require('webpack-node-externals')
const baseConfig = require('./webpack.config.base.js')
const VueSSRServerPlugin = require('vue-server-renderer/server-plugin')
const path = require('path')
const root = path.resolve(__dirname, '..') 

module.exports = merge(baseConfig, {
    target: 'node',
    entry: {
      app: path.join(root, 'v-src/entry-server.js')
    },
    output: {
      libraryTarget: 'commonjs2',
      path: path.join(root, 'v-dist'),      
      filename: 'static/js/[name].[chunkhash].js',
      chunkFilename: ('static/js/[id].[chunkhash].js'),
      publicPath: '/'
    },
    externals: nodeExternals({    
      whitelist: /\.css$/
    }),
    plugins: [
        new webpack.DefinePlugin({
          'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
          'process.env.VUE_ENV': '"server"'
        }),        
        new VueSSRServerPlugin()
    ]
})