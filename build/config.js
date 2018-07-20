const path = require('path')
const root = path.resolve(__dirname, '..')

const vdist = 'v-dist'
const vsrc = 'v-src'
const vstatic = 'static'

const d_root = path.resolve(root, vdist)
const s_root = path.resolve(root, vsrc)

module.exports = {
   //路径    
   route: {
        dist: path.join(d_root), 
        src: path.join(s_root),     
        publicPath: '/'+ vdist + '/',
        app: path.join(s_root, 'main.js'),
        components:path.join(s_root + '/components'),
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
        urlLoaderName: vstatic + '/assets/[name].[hash:7].[ext]',
        miniCssName: vstatic + '/css/index.[chunkhash].css',
        outputJsName: vstatic + '/js/[name].[chunkhash].js',
        devJsName: vstatic + '/js/app.js'
   },
   //插件
   plugin:{
     purgecss:[
         path.join(s_root, 'index.html'),
         path.join(s_root, '**/*.vue'),
         path.join(s_root, '**/*.js')
     ],
     copy:{
         from: s_root + '/assets/pwa',
         to: vstatic + '/assets'
     },
     sw:{
        filePath:path.join(s_root, 'sw-register.js')
     }
   },
}