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
				oNav.style.top = oTop/100 + 'rem';
			} else {
				oNav.style.position = 'fixed';
				oNav.style.top = 0;
				oNav.style.zIndex=10000;
			}
		} else {
			oNav.style.position = 'static';
			oNav.style.top = 4 + "rem";// 导航离顶部距离
		}				
};