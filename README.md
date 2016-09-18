##CSSOO

框架适合移动端 (自适应) 和 PC端 (响应式) 制作。

```txt
CSSOO/
|__ gulpfile.js
|__ README.md
|__ dist/
|__ src/
  |__ flexboxgrid.html
  |__ index.html
  |__ css/
    |__ reset.css
    |__ flexboxgrid.css
    |__ box.css
    |__ common.css
    |__ style.css
    |__ group.css
  |__ font/
    |__ fzcjjt.ttf
  |__ icon/
    |__ iconfont.eot
    |__ iconfont.svg
    |__ iconfont.ttf
    |__ iconfont.woff
  |__ img/
    |__ a.png
    |__ b.png
    |__ c.png
    |__ d.jpg
  |__ js/
    |__ scrollLoad.js
    |__ TouchSlide.1.1.js
    |__ z.js
  |__ sass/
    |__ n.scss
```
##文件描述

src/css/reset.css 是重置表。 src/css/flexboxgrid.css 是 flexbox 布局与 grid 栅格的合体，是本框架的核心。

src/css/box.css 是平时常用的（字体大小、行高、内边距、外边距、圆角、边框、宽度）属性表。

src/css/common.css 是常用属性表。 src/css/style.css 是风格样式表。 src/css/group.css 是组件样式表。

src/sass/n.scss 是预编译文件。src/js/scrollLoad.js 与 TouchSlide.1.1.js 分别是图片延迟加载和滑动插件。

src/font/、src/icon/、src/img/分别是自定义字体、矢量图标、图片。dist文件夹是上线版本。

##移动端(自适应)开发

规则1：要求设计师设计的PSD宽度为640,750或其他标准尺寸，但 DPI 必须是为72,这样才接近一比一还原。

规则2：html头部的js能实现动态改变根元素的值令字体与盒子模型的值以及 iframe 等比例缩放，从而告别繁琐的媒体查询。

规则3：样式表里所有单位写px，设计稿里的值是多少就写多少，已内置 gulp-px3rem ，一键转换，省心方便。

**关键设置1**：头部js的 maxW 变量与 src/css/group.css 中的 `.m{max-width:640px;}` 的值对应一致。

**关键设置2**：头部js的 htmlfs 变量与 src/css/group.css 中的 `html{font-size:100px}` 以及 gulpfile.js 中的

 `px3rem({remUnit: 100})` 的值对应一致。DOM：src/index.html。

##PC端(响应式)开发

要求设计师的设计稿，DPI 统一72，栅格宽度和媒体查询尺寸与 src/css/flexboxgrid.css 互相对应。

推荐 Assistor PS 这款辅助插件，[下载地址](http://witstudio.net/)，PS CC 已经集成部分功能，以及一篇文章，希望对大家有所帮助。[文章地址](http://blog.163.com/zbj_jbz/blog/static/21261516420168184538395/)

对于平常用的 Bootstrap 框架的同学一下就能看懂，本框架采用 Flexbox 与栅格系统一起开发！DOM：src/flexboxgrid.html。

当然，如果你是重度依赖它的话，你也可以直接用 Bootstrap ，本人只采取其核心的部分，方便自己扩展。

##Gulp自动化流程

框架配有gulp插件，一键 gulp，或 gulp (插件名)，这里我只说重要的几个插件，具体可以查看 gulpfile.js 里的注释。

gulp-webp（图片转webp）、gulp-px3rem（px转rem）、gulp-uncss（去除没调用的css）、

font-spider（去除没引用的中文字体）、browser-sync（浏览器同步测试）。