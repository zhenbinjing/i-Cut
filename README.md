##i-Cut

框架适合移动端 (自适应) 和 PC端 (响应式) 制作。

```txt
src/
|__ css/
| |__ adjust.css		
| |__ emmet.css							
| |__ flexboxgrid.css
| |__ opencolor.css		
| |__ style.css			
|__ adaptive.html
|__ flexboxgrid.html
```
##CSS文件描述

adjust.css 是基于 [normalize.css](https://github.com/necolas/normalize.css) 的，参考了 [白树](http://www.cnblogs.com/PeunZhang/p/3407453.html) 的总结定制了一些 css 以及 html 模版。 

emmet.css、color.css 是分别消化 [tachyons.css](https://github.com/tachyons-css/tachyons)、[universal.css](https://github.com/marmelab/universal.css)、[open-color.css](https://github.com/yeun/open-color) 而来，其都采用 [Emmet](http://docs.emmet.io/cheat-sheet/) 中的规则命名。

flexboxgrid.css 是参考 kristoferjoseph 的 [flexboxgrid.css](https://github.com/kristoferjoseph/flexboxgrid) 修改而成，命名与 [Bootstrap](https://github.com/twbs/bootstrap) 框架中的命名一致！是本框架的核心。

style.css 是组件、功能性类、特殊类的公共样式表。

##移动端(自适应)开发

规则1：设计稿的宽度尽量设置为 640，750 或其他标准尺寸，DPI 设置为 72 ，推荐一款铺助插件，[下载地址](https://chrome.google.com/webstore/detail/perfectpixel-by-welldonec/dkaagdgjmgdmbnecmcefdhjekcoceebi?utm_source=chrome-app-launcher-info-dialog) 方便页面测试。

规则2：html 头部的 js 能实现动态改变根元素的值令字体与盒子模型的值等比例缩放，从而告别繁琐的媒体查询。

规则3：设计稿里标注的值是多少就写多少，已内置 [gulp-px3rem](https://www.npmjs.com/package/gulp-px3rem) ，批量转换 rem 与自动化工作流。[自适应：Demo](http://i-cut.cc/dist/adaptive.html)

##PC端(响应式)开发

栅格宽度和媒体查询尺寸在 src/sass/flexboxgrid.scss 中对应以及修改。[响应式：Demo](http://i-cut.cc/dist/flexboxgrid.html)

推荐两款插件：[Assistor PS](http://witstudio.net/) 与 [Zeplin](https://zeplin.io/)，最新版的 [PS CC](http://www.adobe.com/products/photoshop.html) 已经集成部分功能。[点击查看 Zeplin 教程](http://blog.163.com/zbj_jbz/blog/static/212615164201692210316119/)