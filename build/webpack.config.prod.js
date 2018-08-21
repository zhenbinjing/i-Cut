const glob = require('glob-all')
const config = require('./config')
const webpack = require('webpack')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.config.base')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const PurgecssPlugin = require('purgecss-webpack-plugin')
//const PrerenderSPAPlugin = require('prerender-spa-plugin') // 页面静态化
//const Renderer = PrerenderSPAPlugin.PuppeteerRenderer

module.exports = () => {
  const webpackConfig = merge(baseConfig, {
    mode: 'production',
    devtool: '#source-map',
    entry: [
      // 'babel-polyfill', // 转es5,兼容低端浏览器
      config.route.app // 入口文件路径
    ],
    output: {
      path: config.route.dist,  // 出口目录
      filename: config.file.outputJsName,  // 出口文件名
      chunkFilename: config.file.outputJsName,
      publicPath: config.route.publicPath //在github上预览(客户端渲染)
      //publicPath: '/' //在本地上预览(静态化PrerenderSPAPlugin)
    },
    optimization: {
      runtimeChunk: {
        name: 'manifest'
      },
      splitChunks: {
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            priority: -20,
            chunks: 'all'
          }
        }
      }
    },
    plugins: [
      //删除没用的css
      new PurgecssPlugin({
        paths: glob.sync(config.plugin.purgecss)
      }),
      //缓存
      new webpack.HashedModuleIdsPlugin(),
      new HtmlWebpackPlugin({
        template: config.route.html, // 模板文件
        inject: 'body',
        minify: {
          removeComments: true,
          collapseWhitespace: true,
          removeAttributeQuotes: true,
          minifyJS: true
        },
        chunksSortMode: 'dependency'
      })
      /*new PrerenderSPAPlugin({
      staticDir:config.route.dist,
      routes:[ '/','/vr1', '/axios', '/vuex' ],
      renderer: new Renderer({
      headless: false,
      renderAfterTime: 5000  //先加载json,让程序运行5秒之后,再捕获渲染后的数据行为(axios)
      })
      })*/
    ]
  });
  return webpackConfig
}

