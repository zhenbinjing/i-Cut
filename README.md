##i-Cut

框架适合移动端 (自适应) 和 PC端 (响应式) 制作。

```txt
src/
|_ css/
 |_ adjust.css        
 |_ emmet.css                         
 |_ flexgrid.css
 |_ opencolor.css     
 |_ style.css		
```
##CSS文件描述

adjust.css 是基于 [normalize.css](https://github.com/necolas/normalize.css) 的，参考了 [白树](http://www.cnblogs.com/PeunZhang/p/3407453.html) 的总结定制了一些 css 以及 html 模版。 

emmet.css、opencolor.css 是分别消化 [tachyons.css](https://github.com/tachyons-css/tachyons)、[universal.css](https://github.com/marmelab/universal.css)、[open-color.css](https://github.com/yeun/open-color) 而来，其都采用 [Emmet](http://docs.emmet.io/cheat-sheet/) 中的规则命名。

flexgrid.css 是参考 [flexboxgrid.css](https://github.com/kristoferjoseph/flexboxgrid) 修改而成，在这基础上添加了Grid布局，打通一维二维布局，是本框架的核心之处。

style.css 是组件、功能性类、特殊类的公共样式表。

##开发事项

html 头部的 js 能实现动态比例缩放，从而告别繁琐的媒体查询。预览插件：[下载地址](https://chrome.google.com/webstore/detail/perfectpixel-by-welldonec/dkaagdgjmgdmbnecmcefdhjekcoceebi?utm_source=chrome-app-launcher-info-dialog) 方便页面测试。

设计稿里标注的值是多少就写多少，已内置 [gulp-px3rem](https://www.npmjs.com/package/gulp-px3rem) ，批量转换 rem 与自动化工作流。

切图插件：[Assistor PS](http://witstudio.net/) 与 [Zeplin](https://zeplin.io/)，最新版的 [PS CC](http://www.adobe.com/products/photoshop.html) 已经集成部分功能。[点击查看 Zeplin 教程](http://blog.163.com/zbj_jbz/blog/static/212615164201692210316119/)