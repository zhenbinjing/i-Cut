##CSSOO

框架适合移动端 (自适应) 和 PC端 (响应式) 制作。

```txt
CSSOO/
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

规则1：设计稿的宽度最好设置为 640 ， 750 或其他标准尺寸也可以 ，但 DPI 必须设置为 72 ，这样才能接近一比一还原。

规则2：html 头部的 js 能实现动态改变根元素的值令字体与盒子模型的值以及 iframe 等比例缩放，从而告别繁琐的媒体查询。

规则3：设计稿里的值是多少 px 就写多少 px，已内置 gulp-px3rem ，批量转换rem。DOM：src/adaptive.html。

##PC端(响应式)开发

所有设计稿的 DPI 统一 72 ，栅格宽度和媒体查询尺寸在 src/sass/flexboxgrid.scss 互相对应以及修改。

推荐 Assistor PS 这款辅助插件：[下载地址](http://witstudio.net/)，PS CC 已经集成部分功能，以及一篇文章：[文章地址](http://blog.163.com/zbj_jbz/blog/static/21261516420168184538395/)。

对于平常用的 Bootstrap 框架的同学一下就能看懂，本框架采用与其一致的命名方式！DOM：src/flexboxgrid.html。

当然，如果你是重度依赖它的话，你也可以直接用 Bootstrap ，框架只采取其核心的部分，方便自己扩展。

##Gulp自动化流程

框架配有gulp插件，一键 gulp，或 gulp (插件名)，这里我只说重要的几个插件，具体可以查看 gulpfile.js 里的注释。

gulp-webp（图片转webp）、gulp-px3rem（px转rem）、gulp-uncss（去除没调用的css）、

font-spider（去除没引用的中文字体）、browser-sync（浏览器同步测试）。