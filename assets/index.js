//remjs
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
            var designW = 750;
            var width = docEl.clientWidth;
            if (width / dpr > designW) {	
                width = designW * dpr;
            }
            docEl.style.fontSize = 100 * (width / designW) + 'px';
          };
        recalc()
        if (!doc.addEventListener) return;
        win.addEventListener(resizeEvt, recalc, false);
})(document, window);

//onePageNav
$(document).ready(function() {
$('#nav').onePageNav();
});

//nav
window.onload = window.onscroll = function() {
		var oNav=document.getElementById('nav');
		var oTop = document.documentElement.scrollTop || document.body.scrollTop;
		//alert(oTop);
		if (oTop >= 400) {// 导航离顶部距离
			if (typeof document.body.style.maxHeight === "undefined") {
				oNav.style.top = oTop + 'px';
			} else {
				oNav.style.position = 'fixed';
				oNav.style.top = 0;
				oNav.style.zIndex=10000;
			}
		} else {
			oNav.style.position = 'static';
			oNav.style.top = 400 + "px";// 导航离顶部距离
		}				
};