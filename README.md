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

##Gulp自动化流程

框架配有gulp插件，一键 gulp，或 gulp (插件名)，这里我只说重要的几个插件，具体可以查看 gulpfile.js 里的注释。

gulp-webp (图片转webp)，gulp-px3rem (px转rem)，gulp-uncss (去除没调用的css)，font-spider（去除没引用的中文字体）

##移动端(自适应)开发

规则1：设计稿的宽度尽量设置为 640，750 或其他标准尺寸，DPI 设置为 72 ，推荐一款铺助插件，[下载地址](https://chrome.google.com/webstore/detail/perfectpixel-by-welldonec/dkaagdgjmgdmbnecmcefdhjekcoceebi?utm_source=chrome-app-launcher-info-dialog) 方便页面测试。

规则2：html 头部的 js 能实现动态改变根元素的值令字体与盒子模型的值以及 iframe 等比例缩放，从而告别繁琐的媒体查询。

规则3：设计稿里的值是多少 px 就写多少 px，已内置 gulp-px3rem ，批量转换rem。Demo：src/adaptive.html。

##PC端(响应式)开发

所有设计稿的 DPI 统一 72 ，栅格宽度和媒体查询尺寸在 src/sass/flexboxgrid.scss 中对应以及修改。

对于平常用的 Bootstrap 框架的同学一下就能看懂，本框架采用与其一致的命名方式！Demo：src/flexboxgrid.html。

推荐两款插件：[Assistor PS](http://witstudio.net/) 与 [Zeplin](https://zeplin.io/)，最新版的 [PS CC](http://www.adobe.com/products/photoshop.html) 已经集成部分功能。[点击查看 Zeplin 教程](http://blog.163.com/zbj_jbz/blog/static/212615164201692210316119/)