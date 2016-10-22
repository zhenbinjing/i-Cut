##i-Cut

框架适合移动端 (自适应) 和 PC端 (响应式) 制作。

```txt
i-Cut/
|__ dist/
|__ src/
| |__ css/
| | |__ adjust.css
| | |__ box.css
| | |__ color.css
| | |__ common.css
| | |__ flexboxgrid.css
| | |__ style.css
| |__ font/
| |__ icon/
| |__ img/
| |__ js/
| |__ sass/
| |__ adaptive.html
| |__ flexboxgrid.html
|__ gulpfile.js
|__ package.json
|__ README.md
```
##文件描述

src/css/adjust.css 是重置表。 src/css/box.css 是盒子模型表。src/css/color.css 是常用颜色表。

src/css/common.css 是常用属性表。 src/css/flexboxgrid.css 是核心布局样式表。src/css/style.css 是公共样式表。

src/font、icon、img、sass 分别是字体、矢量图标、图片、预处理文件。src/js/ 下的 js 分别是图片延迟与滑动插件。

##移动端(自适应)开发

规则1：设计稿的宽度尽量设置为 640，750 或其他标准尺寸，DPI 设置为 72 ，推荐一款铺助插件，[下载地址](https://chrome.google.com/webstore/detail/perfectpixel-by-welldonec/dkaagdgjmgdmbnecmcefdhjekcoceebi?utm_source=chrome-app-launcher-info-dialog) 方便页面测试。

规则2：html 头部的 js 能实现动态改变根元素的值令字体与盒子模型的值以及 iframe 等比例缩放，从而告别繁琐的媒体查询。

规则3：设计稿里的值是多少 px 就写多少 px，已内置 gulp-px3rem ，批量转换rem。Demo：src/adaptive.html。

##PC端(响应式)开发

所有设计稿的 DPI 统一 72 ，栅格宽度和媒体查询尺寸在 src/sass/flexboxgrid.scss 中对应以及修改。

推荐两款插件：[Assistor PS](http://witstudio.net/) 与 [zeplin](https://zeplin.io/)。最新的 PS CC 已经集成部分功能，[点击查看 zeplin 教程](http://blog.163.com/zbj_jbz/blog/static/212615164201692210316119/) 

对于平常用的 Bootstrap 框架的同学一下就能看懂，本框架采用与其一致的命名方式！Demo：src/flexboxgrid.html。

##Gulp自动化流程

框架配有gulp插件，一键 gulp，或 gulp (插件名)，这里我只说重要的几个插件，具体可以查看 gulpfile.js 里的注释。

gulp-webp（图片转webp）、gulp-px3rem（px转rem）、gulp-uncss（去除没调用的css）、

font-spider（去除没引用的中文字体）、browser-sync（浏览器同步测试）。