const webpack = require('webpack')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.config.base.js')
const VueSSRClientPlugin = require('vue-server-renderer/client-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const path = require('path')
const root = path.resolve(__dirname, '..') 

module.exports = merge(baseConfig, {
    entry: {
      app: path.join(root, 'v-src/entry-client.js')
    },
    output: {
      path: path.join(root, 'v-dist'),      
      filename: 'static/js/[name].[chunkhash].js',  
      chunkFilename: ('static/js/[id].[chunkhash].js'),
      publicPath: '/'
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env': require('../config/prod.env'),
        'process.env.VUE_ENV': '"client"'
      }),
      //提升变量作用域
      new webpack.optimize.ModuleConcatenationPlugin(),
      //缓存
      new webpack.HashedModuleIdsPlugin(),
      //提取公共模块
      new webpack.optimize.CommonsChunkPlugin({
                name: 'vendor',
                minChunks: function (module) {
                return (
                module.resource &&
                /\.js$/.test(module.resource) &&
                module.resource.indexOf(
                  path.join(__dirname, '../node_modules')
                ) === 0
                )}
      }),
      new webpack.optimize.CommonsChunkPlugin({
                name: 'manifest',
                minChunks: Infinity
            }),
      new webpack.optimize.CommonsChunkPlugin({
                name: 'app',
                async: 'vendor-async',
                children: true,
                minChunks: 3
      }),
      //压缩
      new UglifyJsPlugin({
            uglifyOptions: {
              compress: {
                warnings: false // 去除warning警告         
              }
            },
            sourceMap:true,
            parallel: true
      }),
      new VueSSRClientPlugin()       
    ]
})