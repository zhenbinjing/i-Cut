const fs = require('fs');
const path = require('path')
const root = path.resolve(__dirname, '..') // 项目的根目录绝对路径
const webpack = require('webpack')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.config.base')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const loadMinified = require('./load-minified')
//const PrerenderSpaPlugin = require('prerender-spa-plugin')  // 页面静态化

const webpackConfig = merge(baseConfig, {	
	devtool: '#source-map',
	entry: {
             app: path.join(root, 'v-src/main.js') // 入口文件路径
	},
	output: {
             path: path.join(root, 'v-dist'),  // 出口目录
             filename: 'static/js/[name].[chunkhash].js',  // 出口文件名
             chunkFilename: ('static/js/[id].[chunkhash].js'),
             publicPath: '/v-dist/' //在github上预览(客户端渲染)
             //publicPath: '/' //在本地上预览(静态化)
	},     
	plugins: [
	new webpack.DefinePlugin({
             'process.env': require('../config/prod.env')
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
	//复制编辑html
  new HtmlWebpackPlugin({
    //template: path.join(root, 'v-src/index.html'), // 模板文件
    template: path.join(root, 'v-src/index.pwa.html'), // 模板文件
    inject: 'body',
    minify: {
      removeComments: true,
      collapseWhitespace: true,
      removeAttributeQuotes: true
      // more options:
      // https://github.com/kangax/html-minifier#options-quick-reference
    },
    // necessary to consistently work with multiple chunks via CommonsChunkPlugin
    chunksSortMode: 'dependency',
    serviceWorkerLoader: `<script>${loadMinified(path.join(__dirname,
      './service-worker-prod.js'))}</script>`
  }),
  new CopyWebpackPlugin([
    {
      from: path.resolve(__dirname, '../static'),
      to: 'static',
      ignore: ['.*']
    }
  ]),
  // service worker caching
  new SWPrecacheWebpackPlugin({
    cacheId: 'i-cut',
    filename: 'service-worker.js',
    staticFileGlobs: ['v-dist/**/*.*'],
    stripPrefix: 'v-dist/',
    minify: true
  })
	/*new PrerenderSpaPlugin(
	// Absolute path to compiled SPA
	path.join(__dirname, '../v-dist'),
	// List of routes to prerender
	[ '/','/vr1', '/vr2', '/vr3' ],
	{
	captureAfterTime: 5000  //先加载json,让程序运行5秒之后,再捕获渲染后的数据行为(axios)
	})*/
]
});
module.exports = webpackConfig