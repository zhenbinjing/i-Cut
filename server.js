const Koa = require('koa')
const app = new Koa()
const fs = require('fs')
const path = require('path')
const { createBundleRenderer } = require('vue-server-renderer')

const resolve = file => path.resolve(__dirname, file)

// 生成服务端渲染函数
const renderer = createBundleRenderer(require('./v-dist/vue-ssr-server-bundle.json'), {
  // 推荐
  runInNewContext: false,
  // 模板html文件
  template: fs.readFileSync(resolve('./v-src/index.ssr.html'), 'utf-8'),
  // client manifest
  clientManifest: require('./v-dist/vue-ssr-client-manifest.json')
})

function renderToString (context) {
  return new Promise((resolve, reject) => {
    renderer.renderToString(context, (err, html) => err ? reject(err) : resolve(html))
  })
}

app.use(require('koa-static')(resolve('./v-dist')))

// response
app.use(async (ctx, next) => {
  try {
    const context = {
      title: '服务端渲染测试', // default title
      url: ctx.url
    }
    // 将服务器端渲染好的html返回给客户端
    ctx.body = await renderToString(context)

    // 设置请求头
    ctx.set('Content-Type', 'text/html')
    ctx.set('Server', 'Koa2 server side render')
  } catch (e) {
    // 如果没找到，放过请求，继续运行后面的中间件
    next()
  }
})

app.listen(8001)
  .on('listening', () => console.log('服务已启动：localhost:8001'))
  .on('error', err => console.log(err))
