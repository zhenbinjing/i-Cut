var path = require('path')
var root = path.resolve(__dirname, '..') // 项目的根目录绝对路径
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require("extract-text-webpack-plugin")
var OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');


module.exports = {
  resolve: {
      alias: {'vue': 'vue/dist/vue.js'}
  },
  module: { // 配置loader
      rules: [
             {
             test: /\.vue$/, 
                  loader: 'vue-loader', options: { 
                        loaders:{ 
                        sass: ExtractTextPlugin.extract({
                              use: ['css-loader?minimize', 'autoprefixer-loader', 'sass-loader'],
                              fallback: 'vue-style-loader'
                        }),
                        css: ExtractTextPlugin.extract({
                              use: ['css-loader?minimize', 'autoprefixer-loader', 'px2rem-loader?remUnit=100'],
                              fallback: 'vue-style-loader'
                        })
                        }}
            }, 
            {
            test: /\.css$/,
                  use: ExtractTextPlugin.extract({
                        use: ['css-loader?minimize', 'autoprefixer-loader', 'px2rem-loader?remUnit=100']
                  })
            },  
            {
            test: /\.scss/,
                  use: ExtractTextPlugin.extract({
                       use: ['css-loader?minimize', 'autoprefixer-loader', 'sass-loader']
                  })
            },          
            {
            test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/
            } // .js文件使用babel-loader，切记排除node_modules目录               
  ]},
  plugins: [      
      //复制编辑html
      new HtmlWebpackPlugin({
            template: path.join(root, 'v-src/index.html'), // 模板文件
            inject: 'body' // js的script注入到body底部            
      }),     
      new ExtractTextPlugin({ filename: 'static/css/index.[chunkhash].css', allChunks:true }),
      new OptimizeCssAssetsPlugin({
            assetNameRegExp: /\.css$/,
            cssProcessor: require('cssnano'),
            cssProcessorOptions: { discardComments: { removeAll: true } }
      })
 ]
}