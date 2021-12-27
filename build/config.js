const path = require('path')
const root = path.resolve(__dirname, '..')

const vdist = 'v-dist'
const vsrc = 'v-src'
const slash = '/'

const d_root = path.resolve(root, vdist)
const s_root = path.resolve(root, vsrc)

module.exports = {
  //路径文件
  route: {
    roots: slash,
    dist: d_root,
    src: s_root,
    publicPath:  process.env.NODE_ENV === 'production' ? slash + vdist + slash : slash ,
    app: s_root + '/main.js',
    components: s_root + '/components',
    html: s_root + '/index.html',
    dhtml: d_root + '/index.html',
    font: s_root + '/static/font/'
  },
  //图标文件
  icon: {
    src: s_root + '/static/img/logo.png',
    pwaicon1: 'static/icons/android-chrome-192x192.png',
    pwaicon2: 'static/icons/android-chrome-512x512.png'
  },
  //文件命名
  file: {
    imgUrlName: 'static/img/[name].[hash:7].[ext]',
    videoUrlName: 'static/video/[name].[hash:7].[ext]',
    fontUrlName: 'static/font/[name].[hash:7].[ext]',
    miniCssName: 'static/css/index.[chunkhash].css',
    outputJsName: 'static/js/[name].[chunkhash].js',
    devJsName: 'static/js/app.js',
    manifestName: 'manifest.json',
  },
  //插件
  plugin: {
    purgecss: [
      s_root + '/index.html',
      s_root + '/**/*.vue',
      s_root + '/**/*.js'
    ],
    copy: {
      from: s_root + '/static/icons',
      to: 'static/icons'
    }
  },
}
