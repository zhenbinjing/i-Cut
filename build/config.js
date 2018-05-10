const path = require('path')
const root = path.resolve(__dirname, '..')

const vdist = 'v-dist'
const vsrc = 'v-src'
const d_root = path.resolve(root, vdist)
const s_root = path.resolve(root, vsrc)

const static = 'static'
const statics = path.resolve(root, static)


module.exports = {
   //路径    
   route: {
     dist: path.join(d_root), 
     src: path.join(s_root),     
     publicPath: '/'+ vdist + '/',
     app: path.join(s_root, 'main.js'),    
     html: path.join(s_root, 'index.pwa.html'),
     clientapp: path.join(s_root, 'entry-client.js'),
     serverapp: path.join(s_root, 'entry-server.js'),
     ssrhtml: path.join(s_root, 'index.template.html')
    },
   //图标
   icon:{
     src: path.join(s_root, 'assets/img/logo.png')
   },
   //文件
   file: {
     urlLoaderName: static + '/assets/[name].[hash:7].[ext]',
     miniCssName: static + '/css/index.[chunkhash].css',
     outputJsName: static + '/js/[name].[chunkhash].js',
     devJsName: static + '/js/app.js'
   },
   //插件
   plugin:{
    purgecss:[
        path.join(s_root, 'index.html'),
		path.join(s_root, '**/*.vue'),
		path.join(s_root, '**/*.js')
    ],
    copy:{
        from: statics,
        to: static + '/assets'
    },
    sw:{
        staticFileGlobs: vdist + '/**/*.*',
        stripPrefix: vdist + '/'
    }
   },
}