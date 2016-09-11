##UI开发框架

框架适合移动端 (自适应) 和 PC端 (响应式) 制作，陆续更新中，不断实践和修复bug。
```txt
onetoui/
|__ gulpfile.js
|__ README.md
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

src/css/reset.css是重置表。 src/css/flexboxgrid.css是flexbox布局与grid栅格的合体，是本框架的核心。

src/css/box.css是平时常用的（字体大小、行高、内边距、外边距、圆角、边框、宽度）属性表。

src/css/common.css是常用属性表。 src/css/style.css是风格样式表。 src/css/group.css是组件样式表。

src/sass/n.scss是预编译文件。src/js/scrollLoad.js与TouchSlide.1.1.js分别是图片延迟加载和滑动插件。

src/font/、src/icon/、src/img/分别是自定义字体、矢量图标、图片。

##移动端(自适应)开发

规则1：要求设计师设计的PSD宽度为640,750或其他标准尺寸，但DPI必须是为72,这样才接近一比一还原。

规则2：在src/index.html的头部加了一段js，实现动态改变根元素的值令字体与盒子模型的值以及iframe等比例缩放，

从而告别繁琐的媒体查询。(变量maxW就是设计稿的宽度)

规则3：样式表里所有单位写PX，设计稿里的值是多少就写多少，已内置gulp-px3rem，一键转换，省心方便。

**关键设置1**：头部js的 maxW 变量值

**关键设置2**：src/css/group.css中，`html{font-size:100px}` `.m{max-width:640px;}` 设计稿宽度

**关键设置3**：gulpfile.js `px3rem({remUnit: 100})` 这要和上面html的 font-size 一致。

案例：https://github.com/zhenbinjing/qietu/tree/master/m

##PC端(响应式)开发

规则1：要求设计师的设计稿，DPI统一72，栅格宽度和媒体查询尺寸与src/css/flexboxgrid.css互相对应。

可以用Assistor PS这个插件辅助，[下载地址](http://witstudio.net/)，最新的PS CC已经集成部分功能。

在这特别感谢flexboxgrid的作者[项目地址](https://github.com/kristoferjoseph/flexboxgrid)，案例：src/flexboxgrid.html。

对于平常用的 Bootstrap 框架的同学一下就能看懂，本框架采用Flexbox与栅格系统一起开发！

当然，如果你是重度依赖它的话，你也可以直接用Bootstrap，本人只采取其核心的部分，方便自己扩展。

顺便推荐一篇文章，希望对大家有所帮助：https://www.douban.com/note/489518516/

##Gulp自动化流程

框架配有gulp插件，一键gulp，或gulp (插件名)，这里我只说重要的几个插件，具体可以查看gulpfile.js里的注释。

gulp-webp（图片转webp）、gulp-px3rem（px转rem）、gulp-uncss（去除没调用的css）、

font-spider（去除没引用的中文字体）、browser-sync（浏览器同步测试）。