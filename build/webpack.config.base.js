const glob = require('glob-all')
const PurgecssPlugin = require('purgecss-webpack-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const { VueLoaderPlugin } = require('vue-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const PreloadWebpackPlugin = require('preload-webpack-plugin')
const HtmlCriticalWebpackPlugin = require("html-critical-webpack-plugin");
const GenerateJsonPlugin = require('generate-json-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const { GenerateSW } = require('workbox-webpack-plugin');
const ModuleHtmlPlugin = require('./modern-bundle-plugin')

const config = require('./config')

const isProduction = process.env.NODE_ENV === 'production'
const islegacy = process.env.LEGACY === 'legacy'
const ismodern = process.env.MODERN === 'modern'
const ismdlegacy = process.env.MDLEGACY === 'mdlegacy'
const isvuessr = process.env.VUE_SSR === 'ssr'

//判断模式调用不同的路径前缀（pwa）
const swpublicPath = isvuessr ? config.route.roots : config.route.publicPath

const webpackBasesConfig = {
  externals: {}, //不打包的库
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
      'vue': process.env.NODE_ENV === 'production' ? 'vue/dist/vue.runtime.min.js' : 'vue/dist/vue.js',
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
          isProduction && !ismdlegacy ? MiniCssExtractPlugin.loader : 'vue-style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ],
        exclude: /node_modules/
      },
      {
        test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|webp|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
              name: config.file.imgUrlName
            }
          },
          {
            loader: 'image-webpack-loader'
          }
        ]
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: config.file.fontUrlName
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: config.file.videoUrlName
        }
      }

    ]
  },
  plugins: [
    //删除没用的css
    new PurgecssPlugin({
      paths: glob.sync(config.plugin.purgecss)
    }),
    new MiniCssExtractPlugin({
      filename: config.file.miniCssName
    }),
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.css$/,
      cssProcessor: require('cssnano'),
      cssProcessorOptions: { discardComments: { removeAll: true } }
    }),
    new VueLoaderPlugin(),
    //区分不同模式采用不用配置
    new HtmlWebpackPlugin({
      template: ismdlegacy ? config.route.dhtml : config.route.html,
      inject: 'body',
      filename: 'index.html',
      minify: {
        html5: true,
        minifyJS: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeAttributeQuotes: true
      },
      chunksSortMode: 'dependency',
      serviceWorkerJson: !islegacy && !ismdlegacy && isProduction ? `<link rel="manifest" href="` + swpublicPath + `manifest.json">` : '',
      serviceWorkerLoader: !islegacy && !ismdlegacy && isProduction ? `<script>!function () { "use strict"; var a = Boolean("localhost" === window.location.hostname || "[::1]" === window.location.hostname || window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)); window.addEventListener("load", function () { "serviceWorker" in navigator && ("https:" === window.location.protocol || a) && navigator.serviceWorker.register("` + swpublicPath + `service-worker.js").then(function (a) { a.onupdatefound = function () { if (navigator.serviceWorker.controller) { var b = a.installing; b.onstatechange = function () { switch (b.state) { case "installed": break; case "redundant": throw new Error("The installing service worker became redundant.") } } } } }).catch(function (a) { console.error("Error during service worker registration:", a) }) }) }();</script>` : ''
    })
  ]
}

//构建模式添加PWA功能
if (!islegacy && !ismdlegacy && isProduction) {
  webpackBasesConfig.plugins.push(
    new GenerateJsonPlugin(config.file.manifestName,
      {
        'name': 'VUEPWA',
        'short_name': 'VUEPWA',
        'icons': [
          {
            'src': config.route.publicPath + config.icon.pwaicon1,
            'sizes': '192x192',
            'type': 'image/png'
          },
          {
            'src': config.route.publicPath + config.icon.pwaicon2,
            'sizes': '512x512',
            'type': 'image/png'
          }
        ],
        'start_url': config.route.publicPath,
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
    new GenerateSW({
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
            cacheName: 'img-cache',
            expiration: {
              maxEntries: 60,
              maxAgeSeconds: 30 * 24 * 60 * 60 // 30 Days
            },
            cacheableResponse: {
              statuses: [0, 200]
            }
          }
        },
        {
          urlPattern: /.*\.html/,
          handler: 'networkFirst'
        }
      ]
    })
  )
}

//除了回退模式外，其他模式先构建异步文件，再构建预加载文件，以及复制相关文件
if (!ismdlegacy) {
  webpackBasesConfig.plugins.push(
    new PreloadWebpackPlugin({
      rel: 'prefetch',
      include: 'asyncChunks'
    }),
    new PreloadWebpackPlugin({
      rel: 'preload',
      include: 'initial',
      as(entry) {
        if (/\.css$/.test(entry)) return 'style';
        return 'script';
      }
    }),
    new HtmlCriticalWebpackPlugin({
      base: config.route.dist,
      src: 'index.html',
      dest: 'index.html',
      inline: true,
      minify: true,
      extract: true,
      width: 500,
      height: 200,
      penthouse: {
        blockJSRequests: false,
      }
    }),
    new CopyWebpackPlugin([
      {
        from: config.plugin.copy.from,
        to: config.plugin.copy.to
      }
    ])
  )
}

//首先构建v-src中的模板，在构建完后，基于这个基础，再二次构建目标的文件夹模板
if (ismodern || ismdlegacy) {
  webpackBasesConfig.plugins.push(
    new ModuleHtmlPlugin({
      template: ismodern ? config.route.html : config.route.dhtml,
      filename: 'index.html',
      inject: 'body'
    })
  )
}


module.exports = webpackBasesConfig
