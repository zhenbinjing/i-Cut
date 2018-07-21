const path = require('path')
const webpack = require('webpack')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const { VueLoaderPlugin } = require('vue-loader')
const config = require('./config')

const env = process.env.NODE_ENV
const isProduction = env === 'production'

module.exports = {
      //不显示打包的css信息
      stats: {
            entrypoints: false,
            children: false
      },
      // 关闭文件过大的提示
      performance: {
            hints: false
      },
      //配置省略的后缀名和文件路径
      resolve: {
            extensions: ['.js', '.vue', '.json'],
            alias: {
                   'vue': 'vue/dist/vue.js',
                   '@': config.route.components
            }
      },
      module: { // 配置loader
            rules: [
                  {
                        test: /\.vue$/,
                        loader: 'vue-loader',
                        exclude: /node_modules/
                  },
                  {
                        test: /.(s(c|a)ss|css)$/i,
                        use: [
                              isProduction ? MiniCssExtractPlugin.loader : "vue-style-loader",
                              "css-loader?minimize",
                              "postcss-loader",
                              "sass-loader"
                        ]
                  },
                  {
                        test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/
                  },    // .js文件使用babel-loader，切记排除node_modules目录
                  {
                        test: /\.(png|jpg|svg|gif|webp|woff2|woff|eot|ttf|otf|mp4|webm|ogg|mp3|wav|flac|aac)$/,
                        loader: 'url-loader',
                        options: {
                              limit: 10000,
                              name: config.file.urlLoaderName
                        }
                  },
            ]
      },
      plugins: [
            new VueLoaderPlugin(),
            new MiniCssExtractPlugin({
                  filename: config.file.miniCssName
            }),
            new OptimizeCssAssetsPlugin({
                  assetNameRegExp: /\.css$/,
                  cssProcessor: require('cssnano'),
                  cssProcessorOptions: { discardComments: { removeAll: true } }
            })
      ]
}
