const path = require('path')
const root = path.resolve(__dirname, '..') // 项目的根目录绝对路径
const webpack = require('webpack')
const ExtractTextPlugin = require("extract-text-webpack-plugin")
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
  resolve: {
      extensions: ['.js', '.vue', '.json'],
      alias: {'vue': 'vue/dist/vue.js'}
  },
  module: { // 配置loader
      rules: [
             {
             test: /\.vue$/, 
                  loader: 'vue-loader', options: { 
                        loaders:{ 
                        sass: ExtractTextPlugin.extract({
                              use: ['css-loader?minimize', 'postcss-loader', 'sass-loader'],
                              fallback: 'vue-style-loader'
                        }),
                        css: ExtractTextPlugin.extract({
                              use: ['css-loader?minimize', 'postcss-loader'],
                              fallback: 'vue-style-loader'
                        })
                        }}
            },          
            {
            test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/
            }, // .js文件使用babel-loader，切记排除node_modules目录    
            {
                  test: /\.(png|jpg|svg|gif|webp|woff2|woff|eot|ttf|otf|mp4|webm|ogg|mp3|wav|flac|aac)$/,
                  loader: 'url-loader',
                  options: {
                        limit: 10000,
                        name: 'static/assets/[name].[hash:7].[ext]'
                  }
            },     
  ]},
  plugins: [           
      new ExtractTextPlugin({ filename: 'static/css/index.[chunkhash].css', allChunks:true }),
      new OptimizeCssAssetsPlugin({
            assetNameRegExp: /\.css$/,
            cssProcessor: require('cssnano'),
            cssProcessorOptions: { discardComments: { removeAll: true } }
      })
 ]
}