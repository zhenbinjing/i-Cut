const path = require('path')
const root = path.resolve(__dirname, '..') // 项目的根目录绝对路径
const webpack = require('webpack')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
      //不显示打包的css信息
      stats: {
            entrypoints: false,
            children: false
      },
      //配置省略的后缀名和文件路径
      resolve: {
            extensions: ['.js', '.vue', '.json'],
            alias: { 'vue': 'vue/dist/vue.js' }
      },
      module: { // 配置loader
            rules: [
                  {
                        test: /\.vue$/,
                        loader: 'vue-loader',
                        options: {
                              loaders: {
                                    js: ['babel-loader'],
                                    css: [
                                          'vue-style-loader',
                                          MiniCssExtractPlugin.loader,
                                          'css-loader?minimize',
                                          'postcss-loader'
                                    ],
                                    sass: [
                                          'vue-style-loader',
                                          MiniCssExtractPlugin.loader,
                                          'css-loader?minimize',
                                          'postcss-loader',
                                          'sass-loader'
                                    ]
                              }
                        }
                  },
                  {
                        test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/
                  },    // .js文件使用babel-loader，切记排除node_modules目录    
                  {
                        test: /\.(png|jpg|svg|gif|webp|woff2|woff|eot|ttf|otf|mp4|webm|ogg|mp3|wav|flac|aac)$/,
                        loader: 'url-loader',
                        options: {
                              limit: 10000,
                              name: 'static/assets/[name].[hash:7].[ext]'
                        }
                  },
            ]
      },
      plugins: [
            new MiniCssExtractPlugin({
                  filename: 'static/css/index.[chunkhash].css'
            }),
            new OptimizeCssAssetsPlugin({
                  assetNameRegExp: /\.css$/,
                  cssProcessor: require('cssnano'),
                  cssProcessorOptions: { discardComments: { removeAll: true } }
            })
      ]
}