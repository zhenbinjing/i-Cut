# i-Cut

[![Build Status](https://travis-ci.org/zhenbinjing/i-Cut.svg?branch=master)](https://travis-ci.org/zhenbinjing/i-Cut)   [![Coverage Status](https://coveralls.io/repos/github/zhenbinjing/i-Cut/badge.svg?branch=master)](https://coveralls.io/github/zhenbinjing/i-Cut?branch=master)   [![MIT Licence](https://badges.frapsoft.com/os/mit/mit.svg?v=103)](https://opensource.org/licenses/mit-license.php)

i-Cut 是一个快速成形，全终端适配的CSS框架，配备工程化流程，内含 [gulp](https://github.com/gulpjs/gulp) 和 [webpack](https://github.com/webpack/webpack) 打包任务以及其它常用工具。

flexgrid.css 是 i-Cut 中最重要的布局文件，采用 [Flexbox](https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex) 与 [Grid-Layout](https://developer.mozilla.org/zh-CN/docs/Web/CSS/grid) 两种布局结合而成，是本框架的核心。

## 辅助工具

免标软件：[Zeplin](https://zeplin.io/) 、 [Zeplin 教程](http://blog.163.com/zbj_jbz/blog/static/212615164201692210316119/)。像素级对比插件：[PerfectPixel by WellDoneCode](https://chrome.google.com/webstore/detail/perfectpixel-by-welldonec/dkaagdgjmgdmbnecmcefdhjekcoceebi?utm_source=chrome-app-launcher-info-dialog)。

## 移动端适配方案

Zeplin里的提示或者设计稿里的标注值是多少就写多少，gulp 已配置 px 批量转换 rem 和其它自动化流程。

下面代码能实现动态比例缩放，高清还原，从而告别繁琐的媒体查询，放置 head 头部。

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
            var designW = 750;		//把你的手机设计稿宽度填写进去
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