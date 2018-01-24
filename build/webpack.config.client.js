const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const base = require('./webpack.config.base')
const HTMLPlugin = require('html-webpack-plugin')
const SWPrecachePlugin = require('sw-precache-webpack-plugin')

const config = merge(base, {
  entry: {
    app: './v-src/entry-client.js',
    vendor: ['vue', 'vue-router', 'vuex', 'vuex-router-sync', 'axios']
  },
  resolve: {
    modules: [path.resolve(__dirname, 'v-src'), 'node_modules'],
    extensions: ['.js', '.vue', '.json']
  },
  output: {
    path: path.resolve(__dirname, '../v-dist/'),
    publicPath: '/v-dist/',
    filename: 'static/js/client-bundle.[chunkhash].js',
    chunkFilename: ('static/js/[id].[chunkhash].js')
  },
  plugins: [
    // strip dev-only code in Vue source
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
      'process.env.VUE_ENV': '"client"'
    }),
    // extract vendor chunks for better caching
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'
    }),
    // generate output HTML
    new HTMLPlugin({
      template: 'v-src/index.template.html',
      inject: 'body',
      minify : {
          html5                          : true,
          collapseWhitespace             : true,
          removeRedundantAttributes      : true,
          removeScriptTypeAttributes     : true,
          // removeComments                 : true, // ACK. This strips out the <!-- vue-ssr-outlet--> DO NOT USE.
          // minifyCSS                      : true,
          // minifyJS                       : true,
          // minifyURLs                     : false,
          // removeAttributeQuotes          : true,
          // removeEmptyAttributes          : true,
          // removeOptionalTags             : true,
          // removeStyleLinkTypeAttributes  : true,
          // useShortDoctype                : true
      }
    })
  ]
});

if (process.env.NODE_ENV === 'production') {
  config.plugins.push(
    // minify JS
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    // auto generate service worker
    new SWPrecachePlugin({
      cacheId: 'vue-hn',
      filename: 'service-worker.js',
      dontCacheBustUrlsMatching: /./,
      staticFileGlobsIgnorePatterns: [/index\.html$/, /\.map$/]
    })
  )
}

module.exports = config
