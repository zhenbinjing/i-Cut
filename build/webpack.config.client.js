const rm = require('rimraf')
const  { merge } = require('webpack-merge')
const base = require('./webpack.config.base')
const config = require('./config')

const isLegacy = process.env.LEGACY === 'legacy' || process.env.MDLEGACY === 'mdlegacy' ? 'promise-polyfill/src/polyfill' : '';
const isMdlegacy = process.env.MDLEGACY === 'mdlegacy'
const isNodeenv = process.env.NODE_ENV === 'development'

if (!isMdlegacy && !isNodeenv) {
  rm(config.route.dist, err => {
    if (err) throw err
    console.log("delete build file \n")
  })
}

const configs = merge(base, {
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  entry: [],
  resolve: {
    modules: [config.route.src, 'node_modules'],
    extensions: ['.js', '.vue', '.json']
  },
  output: {
    path: config.route.dist,
    publicPath: config.route.ssrPath,
    filename: config.file.outputJsName,
    chunkFilename: config.file.outputJsName
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendors: {
          name: `chunk-vendors`,
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          chunks: 'initial'
        },
        common: {
          name: `chunk-common`,
          minChunks: 2,
          priority: -20,
          chunks: 'initial',
          reuseExistingChunk: true
        }
      }
    }
  }
});

if(isLegacy){
  configs.entry.push(
    isLegacy,config.route.clientapp
  )
}else{
  configs.entry.push(
    config.route.clientapp
  )
}

module.exports = configs
