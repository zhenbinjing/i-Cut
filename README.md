##i-Cut

框架适合移动端 (自适应) 和 PC端 (响应式) 制作。

```txt
src/
|__ css/
| |__ adjust.css
| |__ box.css
| |__ color.css
| |__ common.css
| |__ flexboxgrid.css
| |__ style.css
|__ adaptive.html
|__ flexboxgrid.html
```
##CSS文件描述

adjust.css 重置表，box.css 盒模表，color.css 颜色表，common.css 属性表，flexboxgrid.css 布局表，style.css 是公共表。

adjust.css 是基于 [normalize.css](https://github.com/necolas/normalize.css) 的，同时根据自己的需求参考了 [白树](http://www.cnblogs.com/PeunZhang/p/3407453.html) 的资料重新定制一些 reset css 以及 html 模版。

box.css、color.css、common.css 中的命名是基于 [Emmet](http://emmet.io/) 中的规则定制的，同时也消化了 [universal.css](https://github.com/marmelab/universal.css) 的思想与 [open-color.css](https://github.com/yeun/open-color) 中的颜色值，其命名是非常简短易读。

flexboxgrid.css 也是消化了 [flexboxgrid.css](https://github.com/kristoferjoseph/flexboxgrid) 中的思想，其命名则与 [Bootstrap](https://github.com/twbs/bootstrap) 框架中的方式达到一致。style.css 则是一个公共样式表，是组件与功能性类或特殊类的东西。

##移动端(自适应)开发

规则1：设计稿的宽度尽量设置为 640，750 或其他标准尺寸，DPI 设置为 72 ，推荐一款铺助插件，[下载地址](https://chrome.google.com/webstore/detail/perfectpixel-by-welldonec/dkaagdgjmgdmbnecmcefdhjekcoceebi?utm_source=chrome-app-launcher-info-dialog) 方便页面测试。

规则2：html 头部的 js 能实现动态改变根元素的值令字体与盒子模型的值以及 iframe 等比例缩放，从而告别繁琐的媒体查询。

规则3：设计稿里标注的值是多少就写多少，已内置 [gulp-px3rem](https://www.npmjs.com/package/gulp-px3rem) ，批量转换 rem 与自动化工作流。Demo：src/adaptive.html

##PC端(响应式)开发

栅格宽度和媒体查询尺寸在 src/sass/flexboxgrid.scss 中对应以及修改。Demo：src/flexboxgrid.html。

推荐两款插件：[Assistor PS](http://witstudio.net/) 与 [Zeplin](https://zeplin.io/)，最新版的 [PS CC](http://www.adobe.com/products/photoshop.html) 已经集成部分功能。[点击查看 Zeplin 教程](http://blog.163.com/zbj_jbz/blog/static/212615164201692210316119/)