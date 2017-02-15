##i-Cut

[![Build Status](https://travis-ci.org/zhenbinjing/i-Cut.svg?branch=master)](https://travis-ci.org/zhenbinjing/i-Cut)   [![Coverage Status](https://coveralls.io/repos/github/zhenbinjing/i-Cut/badge.svg?branch=master)](https://coveralls.io/github/zhenbinjing/i-Cut?branch=master)

```txt
src/
|_ css/
 |_ adjust.css        
 |_ emmet.css                         
 |_ flexgrid.css
 |_ opencolor.css     
 |_ style.css		
```
##CSS文件

adjust.css 是基于 [normalize.css](https://github.com/necolas/normalize.css) 的，参考了 [白树](http://www.cnblogs.com/PeunZhang/p/3407453.html) 的总结定制了一些 css 以及 html 模版。 

emmet.css、opencolor.css 是分别消化 [tachyons.css](https://github.com/tachyons-css/tachyons)、[open-color.css](https://github.com/yeun/open-color) 而来，其都采用 [Emmet](http://docs.emmet.io/cheat-sheet/) 中的规则命名。

flexgrid.css 是flex与grid两种布局结合而成的核心框架。style.css 是组件类、特殊类等其他公共样式表。

##开发工具

html 头部的 js 能实现动态比例缩放，从而告别繁琐的媒体查询。预览插件：[下载地址](https://chrome.google.com/webstore/detail/perfectpixel-by-welldonec/dkaagdgjmgdmbnecmcefdhjekcoceebi?utm_source=chrome-app-launcher-info-dialog) 方便页面测试。

设计稿里标注的值是多少就写多少，已内置 [gulp-px3rem](https://www.npmjs.com/package/gulp-px3rem) ，批量转换 rem 与自动化工作流。

切图插件：[Assistor PS](http://witstudio.net/) 与 [Zeplin](https://zeplin.io/)，最新版的 [PS CC](http://www.adobe.com/products/photoshop.html) 已经集成部分功能。[点击查看 Zeplin 教程](http://blog.163.com/zbj_jbz/blog/static/212615164201692210316119/)