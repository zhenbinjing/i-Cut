const safariFix = `!function(){var e=document,t=e.createElement("script");if(!("noModule"in t)&&"onbeforeload"in t){var n=!1;e.addEventListener("beforeload",function(e){if(e.target===t)n=!0;else if(!e.target.hasAttribute("nomodule")||!n)return;e.preventDefault()},!0),t.type="module",t.src=".",e.head.appendChild(t),t.remove()}}();`
const ismdlegacy = process.env.MDLEGACY === 'mdlegacy';

class ModuleHtmlPlugin {
  constructor(isModule) {
    this.isModule = isModule
  }

  apply(compiler) {
    const id = 'ModuleHtmlPlugin'
    // 利用 webpack 的核心事件 tap
    compiler.hooks.compilation.tap(id, compilation => {
      // 在 htmlWebpackPlugin 拿到资源的时候我们处理下

      compilation.hooks.htmlWebpackPluginAlterAssetTags.tapAsync(id, (data, cb) => {
        data.body.forEach(tag => {
          //遍历下资源，把 script 中的 ES2015+ 和 legacy 的处理开
          if (tag.tagName === 'script') {
            // 给 legacy 的资源加上 nomodule 属性，反之加上 type="module" 的属性
            if (/legacy./.test(tag.attributes.src)) {
              delete tag.attributes.type
              tag.attributes.nomodule = ''
            } else {
              tag.attributes.type = 'module'
            }
          }
        })

        //在这一步加上 10.3 的 fix，很简单，就是往资源的数组里面的 push 一个资源对象

        if (!ismdlegacy) {
          if (this.isModule) {
            // inject Safari 10 nomdoule fix
            data.body.push({
              tagName: 'script',
              closeTag: true,
              innerHTML: safariFix
            })
          }
        }
        cb(null, data)
      })


      // 在 htmlWebpackPlugin 处理好模板的时候我们再处理下，把页面上 <script nomudule=""> 处理成 <script nomudule>，正则全局处理下

      compilation.hooks.htmlWebpackPluginAfterHtmlProcessing.tap(id, data => {       
        data.html = data.html
        .replace(/(<link as=script .*?)rel=preload>/g, '$1rel="modulepreload" crossorigin="use-credentials">')
        .replace(/\snomodule="">/g, ' nomodule>')
      })
    })
  }
}

module.exports = ModuleHtmlPlugin

