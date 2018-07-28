const path = require('path')
const webpack = require('webpack')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const { VueLoaderPlugin } = require('vue-loader')
const GenerateJsonPlugin = require('generate-json-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const WorkboxPlugin = require('workbox-webpack-plugin')
const config = require('./config')

const env = process.env.NODE_ENV
const isProduction = env === 'production'

module.exports = {
  //不显示打包的css信息
  stats: {
    colors: true,
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
    }),
    new GenerateJsonPlugin('static/pwa/manifest.json',
      {
        'name': 'VUEPWA',
        'short_name': 'VUEPWA',
        'icons': [
          {
            'src': config.route.publicPath + 'static/pwa/icons/android-chrome-192x192.png',
            'sizes': '192x192',
            'type': 'image/png'
          },
          {
            'src': config.route.publicPath + 'static/pwa/icons/android-chrome-512x512.png',
            'sizes': '512x512',
            'type': 'image/png'
          }
        ],
        'start_url': config.route.publicPath + 'index.html',
        'display': 'standalone',
        'background_color': '#000000',
        'theme_color': '#4DBA87'
      },
      (key, value) => {
        if (value === 'VUEPWA') {
          return 'VUEPWA';
        }
        return value;
      },
      2
    ),
    new CopyWebpackPlugin([
      {
        from: config.plugin.copy.from,
        to: config.plugin.copy.to
      }
    ]),
    new WorkboxPlugin.GenerateSW({
      cacheId: 'VUEPWA', // 设置前缀
      skipWaiting: true, // 强制等待中的 Service Worker 被激活
      clientsClaim: true, // Service Worker 被激活后使其立即获得页面控制权
      swDest: 'service-worker.js', // 输出 Service worker 文件
      runtimeCaching: [
        // 配置路由请求缓存 对应 workbox.routing.registerRoute
        {
          urlPattern: /.*\.js/, // 匹配文件
          handler: 'networkFirst' // 网络优先
        },
        {
          urlPattern: /.*\.css/,
          handler: 'staleWhileRevalidate', // 缓存优先同时后台更新
          options: {
            // 这里可以设置 cacheName 和添加插件
            plugins: [
              {
                cacheableResponse: {
                  statuses: [0, 200]
                }
              }
            ]
          }
        },
        {
          urlPattern: /.*\.(?:png|jpg|jpeg|webp|svg|gif)/,
          handler: 'cacheFirst', // 缓存优先
          options: {
            plugins: [
              {
                expiration: {
                  maxAgeSeconds: 24 * 60 * 60, // 最长缓存时间,
                  maxEntries: 50 // 最大缓存图片数量
                }
              }
            ]
          }
        },
        {
          urlPattern: /.*\.html/,
          handler: 'networkFirst'
        }
      ]
    })
  ]
}
