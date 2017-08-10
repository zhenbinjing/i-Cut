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