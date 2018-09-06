const config = require('./config')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.config.base')
//const PrerenderSPAPlugin = require('prerender-spa-plugin') // 页面静态化
//const Renderer = PrerenderSPAPlugin.PuppeteerRenderer

const islegacy = process.env.LEGACY === 'legacy' || process.env.MDLEGACY === 'mdlegacy' ? 'promise-polyfill/src/polyfill' : '',

webpackConfig = merge(baseConfig, {
  mode: 'production',
  devtool: '#source-map',
  entry: [
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
  },
  plugins: [
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

if(islegacy){
  webpackConfig.entry.push(islegacy)
}
module.exports = webpackConfig
