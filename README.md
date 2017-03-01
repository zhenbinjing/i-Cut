##i-Cut

[![Build Status](https://travis-ci.org/zhenbinjing/i-Cut.svg?branch=master)](https://travis-ci.org/zhenbinjing/i-Cut)   [![Coverage Status](https://coveralls.io/repos/github/zhenbinjing/i-Cut/badge.svg?branch=master)](https://coveralls.io/github/zhenbinjing/i-Cut?branch=master)   [![MIT Licence](https://badges.frapsoft.com/os/mit/mit.svg?v=103)](https://opensource.org/licenses/mit-license.php)

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

flexgrid.css 是flex与grid两种布局结合而成，是本框架的核心。style.css 是组件类、功能类等其他公共样式表。

##开发工具

切图插件：[Assistor PS](http://witstudio.net/)、[Zeplin](https://zeplin.io/)、还原对比插件：[PerfectPixel by WellDoneCode](https://chrome.google.com/webstore/detail/perfectpixel-by-welldonec/dkaagdgjmgdmbnecmcefdhjekcoceebi?utm_source=chrome-app-launcher-info-dialog) 、[Zeplin 教程](http://blog.163.com/zbj_jbz/blog/static/212615164201692210316119/)

##移动端适屏方案

设计稿里的标注值是多少就写多少，gulp 已配置 px 批量转换 rem 和其它自动化流程。

下面是核心代码能实现动态比例缩放，高清还原，从而告别繁琐的媒体查询，放置 head 头部。

```javascript
(function (doc, win) {
	var docEl = doc.documentElement,
	isIOS = navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
	dpr = isIOS? Math.min(win.devicePixelRatio, 3) : 1,
	dpr = window.top === window.self? dpr : 1, 
	dpr = 1,
	scale = 1 / dpr,
	resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';
        docEl.dataset.dpr = dpr;
        var metaEl = doc.createElement('meta');
        metaEl.name = 'viewport';
        metaEl.content = 'initial-scale=' + scale + ',maximum-scale=' + scale + ', minimum-scale=' + scale;
        docEl.firstElementChild.appendChild(metaEl);
        var recalc = function () {
            var designW = 640;		//把你的手机设计稿宽度填写进去
            var width = docEl.clientWidth;
            if (width / dpr > designW) {	
                width = designW * dpr;
            }
		docEl.style.cssText = "font-size:" + 100 * (width / designW) + "px;" + "max-width:" + width + "px;" + "margin:auto;";
          };
        recalc()
        if (!doc.addEventListener) return;
        win.addEventListener(resizeEvt, recalc, false);
})(document, window);
```