!function(){"use strict";function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function e(){for(var e,t,n=document.querySelectorAll(".bglazy"),a=i;a<n.length;a++)e=n[a],t=void 0,t=e.getBoundingClientRect(),e=window.innerHeight,t.top<=e+500&&(n[a].classList.remove("bglazy"),i=a)}var i;!function(e){var n={slideCell:(e=e||{}).slideCell||"#touchSlide",titCell:e.titCell||".hd li",mainCell:e.mainCell||".bd",effect:e.effect||"left",autoPlay:e.autoPlay||!1,delayTime:e.delayTime||200,interTime:e.interTime||2500,defaultIndex:e.defaultIndex||0,titOnClassName:e.titOnClassName||"on",autoPage:e.autoPage||!1,prevCell:e.prevCell||".prev",nextCell:e.nextCell||".next",pageStateCell:e.pageStateCell||".pageState",pnLoop:"undefined "==e.pnLoop||e.pnLoop,startFun:e.startFun||null,endFun:e.endFun||null,switchLoad:e.switchLoad||null};if(A=document.getElementById(n.slideCell.replace("#",""))){var e=function(e,t){e=e.split(" ");var n,a=[],i=[t=t||document];for(n in e)0!=e[n].length&&a.push(e[n]);for(n in a){if(0==i.length)return!1;var o,l=[];for(o in i)if("#"==a[n][0])l.push(document.getElementById(a[n].replace("#","")));else if("."==a[n][0])for(var r=i[o].getElementsByTagName("*"),s=0;s<r.length;s++){var c=r[s].className;c&&-1!=c.search(new RegExp("\\b"+a[n].replace(".","")+"\\b"))&&l.push(r[s])}else for(r=i[o].getElementsByTagName(a[n]),s=0;s<r.length;s++)l.push(r[s]);i=l}return 0!=i.length&&i[0]!=t&&i},a=function(e,t){!e||!t||e.className&&-1!=e.className.search(new RegExp("\\b"+t+"\\b"))||(e.className+=(e.className?" ":"")+t)},i=function(e,t){!e||!t||e.className&&-1==e.className.search(new RegExp("\\b"+t+"\\b"))||(e.className=e.className.replace(new RegExp("\\s*\\b"+t+"\\b","g"),""))},o=n.effect,l=e(n.prevCell,A)[0],r=e(n.nextCell,A)[0],s=e(n.pageStateCell)[0],c=e(n.mainCell,A)[0];if(c){var t,u,d=c.children.length,f=e(n.titCell,A),m=f?f.length:d,p=n.switchLoad,h=parseInt(n.defaultIndex),v=parseInt(n.delayTime),g=parseInt(n.interTime),y="false"!=n.autoPlay&&0!=n.autoPlay,e="false"!=n.autoPage&&0!=n.autoPage,b="false"!=n.pnLoop&&0!=n.pnLoop,C=null,z=null,w=null,T=0,E=0,L=0,N=0,A=/hp-tablet/gi.test(navigator.appVersion),x="ontouchstart"in window&&!A,A=x?"touchstart":"mousedown",M=x?"touchmove":"",S=x?"touchend":"mouseup",P=c.parentNode.clientWidth,k=d;if(0==m&&(m=d),e){var m=d,F=(f=f[0]).innerHTML="";if(1==n.autoPage||"true"==n.autoPage)for(var B=0;B<m;B++)F+="<li></li>";else for(B=0;B<m;B++)F+=n.autoPage.replace("$",B+1);f.innerHTML=F,f=f.children}"leftLoop"==o&&(k+=2,c.appendChild(c.children[0].cloneNode(!0)),c.insertBefore(c.children[d-1].cloneNode(!0),c.children[0])),t=function(e,t){(n=document.createElement("div")).innerHTML=t;var n=n.children[0],t=e.cloneNode(!0);return n.appendChild(t),e.parentNode.replaceChild(n,e),c=t,n}(c,'<div class="tempWrap" style="overflow:hidden; position:relative;"></div>'),c.style.cssText="width:"+k*P+"px;position:relative;overflow:hidden;padding:0;margin:0;";for(B=0;B<k;B++)c.children[B].style.cssText="display:table-cell;vertical-align:top;width:"+P+"px";var D=function(e){function t(e){for(var t=c.children[e].getElementsByTagName("img"),n=0;n<t.length;n++)t[n].getAttribute(p)&&(t[n].setAttribute("src",t[n].getAttribute(p)),t[n].removeAttribute(p))}e=("leftLoop"==o?h+1:h)+e;if(t(e),"leftLoop"==o)switch(e){case 0:t(d);break;case 1:t(d+1);break;case d:t(0);break;case d+1:t(1)}};window.addEventListener("resize",function(){P=t.clientWidth,c.style.width=k*P+"px";for(var e=0;e<k;e++)c.children[e].style.width=P+"px";I(-("leftLoop"==o?h+1:h)*P,0)},!1);var I=function(e,t,n){(n=(n||c).style).webkitTransitionDuration=n.MozTransitionDuration=n.msTransitionDuration=n.OTransitionDuration=n.transitionDuration=t+"ms",n.webkitTransform="translate("+e+"px,0)translateZ(0)",n.msTransform=n.MozTransform=n.OTransform="translateX("+e+"px)"},W=function(e){switch(o){case"left":m<=h?h=e?h-1:0:h<0&&(h=e?0:m-1),null!=p&&D(0),I(-h*P,v);break;case"leftLoop":null!=p&&D(0),I(-(h+1)*P,v),-1==h?(z=setTimeout(function(){I(-m*P,0)},v),h=m-1):h==m&&(z=setTimeout(function(){I(-P,0)},v),h=0)}"function"==typeof n.startFun&&n.startFun(h,m),w=setTimeout(function(){"function"==typeof n.endFun&&n.endFun(h,m)},v);for(var t=0;t<m;t++)i(f[t],n.titOnClassName),t==h&&a(f[t],n.titOnClassName);0==b&&(i(r,"nextStop"),i(l,"prevStop"),0==h?a(l,"prevStop"):h==m-1&&a(r,"nextStop")),s&&(s.innerHTML="<span>"+(h+1)+"</span>/"+m)};if(W(),y&&(C=setInterval(function(){h++,W()},g)),f)for(B=0;B<m;B++)!function(){var e=B;f[e].addEventListener("click",function(){clearTimeout(z),clearTimeout(w),h=e,W()})}();r&&r.addEventListener("click",function(){1!=b&&h==m-1||(clearTimeout(z),clearTimeout(w),h++,W())}),l&&l.addEventListener("click",function(){1!=b&&0==h||(clearTimeout(z),clearTimeout(w),h--,W())});var _=function(e){if(!x||!(1<e.touches.length||e.scale&&1!==e.scale)){var t=x?e.touches[0]:e;if(L=t.pageX-T,N=t.pageY-E,!(u=void 0===u?!!(u||Math.abs(L)<Math.abs(N)):u)){switch(e.preventDefault(),y&&clearInterval(C),o){case"left":(0==h&&0<L||m-1<=h&&L<0)&&(L*=.4),I(-h*P+L,0);break;case"leftLoop":I(-(h+1)*P+L,0)}null!=p&&Math.abs(L)>P/3&&D(-0<L?-1:1)}}},R=function e(t){0!=L&&(t.preventDefault(),u||(Math.abs(L)>P/10&&(0<L?h--:h++),W(!0),y&&(C=setInterval(function(){h++,W()},g))),c.rveEventListener(M,_,!1),c.removeEventListener(S,e,!1))};c.addEventListener(A,function(e){clearTimeout(z),clearTimeout(w),u=void 0,L=0;e=x?e.touches[0]:e;T=e.pageX,E=e.pageY,c.addEventListener(M,_,!1),c.addEventListener(S,R,!1)},!1)}}}({slideCell:"#focus",titCell:".hd ul",mainCell:".bd ul",effect:"left",autoPlay:!0,interTime:3e3,autoPage:!0,switchLoad:"s-src"}),i=0,window.onload=e(),window.onscroll=function(t,n){void 0===n&&(n=500);var a=null;return function(){var e=new Date;a=a||e,n&&n<=e-a&&(t.apply(this,arguments),a=e)}}(e),function(e,t){t=t(e,e.document);e.lazySizes=t,"object"==("undefined"==typeof module?"undefined":n(module))&&module.exports&&(module.exports=t)}(window,function(a,m){if(m.getElementsByClassName){var p,n,i,t,o,l,r,h=m.documentElement,s=a.Date,c=a.HTMLPictureElement,u="addEventListener",v="getAttribute",d=a[u],f=a.setTimeout,g=a.requestAnimationFrame||f,y=a.requestIdleCallback,b=/^picture$/i,C=["load","error","lazyincluded","_lazyloaded"],z={},w=Array.prototype.forEach,T=function(e,t){return z[t]||(z[t]=new RegExp("(\\s|^)"+t+"(\\s|$)")),z[t].test(e[v]("class")||"")&&z[t]},E=function(e,t){T(e,t)||e.setAttribute("class",(e[v]("class")||"").trim()+" "+t)},L=function(e,t){(t=T(e,t))&&e.setAttribute("class",(e[v]("class")||"").replace(t," "))},N=function e(t,n,a){var i=a?u:"removeEventListener";a&&e(t,n),C.forEach(function(e){t[i](e,n)})},A=function(e,t,n,a,i){var o=m.createEvent("Event");return(n=n||{}).instance=me,o.initEvent(t,!a,!i),o.detail=n,e.dispatchEvent(o),o},x=function(e,t){var n;!c&&(n=a.picturefill||p.pf)?(t&&t.src&&!e[v]("srcset")&&e.setAttribute("srcset",t.src),n({reevaluate:!0,elements:[e]})):t&&t.src&&(e.src=t.src)},M=function(e,t){return(getComputedStyle(e,null)||{})[t]},S=function(e,t,n){for(n=n||e.offsetWidth;n<p.minSize&&t&&!e._lazysizesWidth;)n=t.offsetWidth,t=t.parentNode;return n},P=(o=[],l=t=[],r=function(){var e=l;for(l=t.length?o:t,i=!(n=!0);e.length;)e.shift()();n=!1},ge._lsFlush=r,ge),e=function(n,e){return e?function(){P(n)}:function(){var e=this,t=arguments;P(function(){n.apply(e,t)})}},k=function(e){function t(){var e=s.now()-a;e<99?f(t,99-e):(y||i)(i)}var n,a,i=function(){n=null,e()};return function(){a=s.now(),n=n||f(t,99)}};!function(){var e,t={lazyClass:"lazyload",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",autosizesClass:"lazyautosizes",srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",minSize:40,customMedia:{},init:!0,expFactor:1.5,hFac:.8,loadMode:2,loadHidden:!0,ricTimeout:0,throttleDelay:125};for(e in p=a.lazySizesConfig||a.lazysizesConfig||{},t)e in p||(p[e]=t[e]);a.lazySizesConfig=p,f(function(){p.init&&ve()})}();var F,B,D,I,W,_,R,O,H,$,q,X,Y,j,V,Z,G,J,K,Q,U,ee,te,ne,ae,ie,oe,le,re,se,ce,ue,de,fe,me,pe=(J=/^img$/i,K=/^iframe$/i,Q="onscroll"in a&&!/(gle|ing)bot/.test(navigator.userAgent),ne=-1,ae=function(e,t){var n,a=e,i="hidden"==M(m.body,"visibility")||"hidden"!=M(e.parentNode,"visibility")&&"hidden"!=M(e,"visibility");for(O-=t,q+=t,H-=t,$+=t;i&&(a=a.offsetParent)&&a!=m.body&&a!=h;)(i=0<(M(a,"opacity")||1))&&"visible"!=M(a,"overflow")&&(n=a.getBoundingClientRect(),i=$>n.left&&H<n.right&&q>n.top-1&&O<n.bottom+1);return i},X=be,j=te=ee=U=0,V=p.throttleDelay,Z=p.ricTimeout,G=y&&49<Z?function(){y(Ce,{timeout:Z}),Z!==p.ricTimeout&&(Z=p.ricTimeout)}:e(function(){f(Ce)},!0),ie=function(e){var t;(e=!0===e)&&(Z=33),Y||(Y=!0,(t=V-(s.now()-j))<0&&(t=0),e||t<9?G():f(G,t))},oe=e(ze),le=function(e){oe({target:e.target})},re=e(function(e,t,n,a,i){var o,l,r,s;(r=A(e,"lazybeforeunveil",t)).defaultPrevented||(a&&(n?E(e,p.autosizesClass):e.setAttribute("sizes",a)),n=e[v](p.srcsetAttr),a=e[v](p.srcAttr),i&&(l=(o=e.parentNode)&&b.test(o.nodeName||"")),s=t.firesLoad||"src"in e&&(n||a||l),r={target:e},s&&(N(e,ye,!0),clearTimeout(D),D=f(ye,2500),E(e,p.loadingClass),N(e,le,!0)),l&&w.call(o.getElementsByTagName("source"),we),n?e.setAttribute("srcset",n):a&&!l&&(K.test(e.nodeName)?function(t,n){try{t.contentWindow.location.replace(n)}catch(e){t.src=n}}(e,a):e.src=a),i&&(n||l)&&x(e,{src:a})),e._lazyRace&&delete e._lazyRace,L(e,p.lazyClass),P(function(){(!s||e.complete&&1<e.naturalWidth)&&(s?ye(r):te--,ze(r))},!0)}),{_:function(){W=s.now(),me.elements=m.getElementsByClassName(p.lazyClass),F=m.getElementsByClassName(p.lazyClass+" "+p.preloadClass),d("scroll",ie,!0),d("resize",ie,!0),a.MutationObserver?new MutationObserver(ie).observe(h,{childList:!0,subtree:!0,attributes:!0}):(h[u]("DOMNodeInserted",ie,!0),h[u]("DOMAttrModified",ie,!0),setInterval(ie,999)),d("hashchange",ie,!0),["focus","mouseover","click","load","transitionend","animationend","webkitAnimationEnd"].forEach(function(e){m[u](e,ie,!0)}),/d$|^c/.test(m.readyState)?Te():(d("load",Te),m[u]("DOMContentLoaded",ie),f(Te,2e4)),me.elements.length?(be(),P._lsFlush()):ie()},checkElems:ie,unveil:se=function(e){var t,n=J.test(e.nodeName),a=n&&(e[v](p.sizesAttr)||e[v]("sizes")),i="auto"==a;(!i&&B||!n||!e[v]("src")&&!e.srcset||e.complete||T(e,p.errorClass)||!T(e,p.lazyClass))&&(t=A(e,"lazyunveilread").detail,i&&he.updateElem(e,!0,e.offsetWidth),e._lazyRace=!0,te++,re(e,t,i,a,n))}}),he=(ue=e(function(e,t,n,a){var i,o,l;if(e._lazysizesWidth=a,e.setAttribute("sizes",a+="px"),b.test(t.nodeName||""))for(o=0,l=(i=t.getElementsByTagName("source")).length;o<l;o++)i[o].setAttribute("sizes",a);n.detail.dataAttr||x(e,n.detail)}),de=function(e,t,n){var a=e.parentNode;a&&(n=S(e,a,n),(t=A(e,"lazybeforesizes",{width:n,dataAttr:!!t})).defaultPrevented||(n=t.detail.width)&&n!==e._lazysizesWidth&&ue(e,a,t,n))},{_:function(){ce=m.getElementsByClassName(p.autosizesClass),d("resize",fe)},checkElems:fe=k(function(){var e,t=ce.length;if(t)for(e=0;e<t;e++)de(ce[e])}),updateElem:de}),ve=function e(){e.i||(e.i=!0,he._(),pe._())};return me={cfg:p,autoSizer:he,loader:pe,init:ve,uP:x,aC:E,rC:L,hC:T,fire:A,gW:S,rAF:P}}function ge(e,t){n&&!t?e.apply(this,arguments):(l.push(e),i||(i=!0,(m.hidden?f:g)(r)))}function ye(e){te--,e&&e.target&&N(e.target,ye),e&&!(te<0)&&e.target||(te=0)}function be(){var e,t,n,a,i,o,l,r,s,c,u,d,f=me.elements;if((I=p.loadMode)&&te<8&&(e=f.length)){for(t=0,ne++,u=(c=!p.expand||p.expand<1?500<h.clientHeight&&500<h.clientWidth?500:370:p.expand)*p.expFactor,d=p.hFac,ee<u&&te<1&&2<ne&&2<I&&!m.hidden?(ee=u,ne=0):ee=1<I&&1<ne&&te<6?c:U;t<e;t++)if(f[t]&&!f[t]._lazyRace)if(Q)if(s!==(o=!(r=f[t][v]("data-expand"))||!(o=+r)?ee:o)&&(_=innerWidth+o*d,R=innerHeight+o,l=-1*o,s=o),n=f[t].getBoundingClientRect(),(q=n.bottom)>=l&&(O=n.top)<=R&&($=n.right)>=l*d&&(H=n.left)<=_&&(q||$||H||O)&&(p.loadHidden||"hidden"!=M(f[t],"visibility"))&&(B&&te<3&&!r&&(I<3||ne<4)||ae(f[t],o))){if(se(f[t]),i=!0,9<te)break}else!i&&B&&!a&&te<4&&ne<4&&2<I&&(F[0]||p.preloadAfterLoad)&&(F[0]||!r&&(q||$||H||O||"auto"!=f[t][v](p.sizesAttr)))&&(a=F[0]||f[t]);else se(f[t]);a&&!i&&se(a)}}function Ce(){Y=!1,j=s.now(),X()}function ze(e){E(e.target,p.loadedClass),L(e.target,p.loadingClass),N(e.target,le),A(e.target,"lazyloaded")}function we(e){var t,n=e[v](p.srcsetAttr);(t=p.customMedia[e[v]("data-media")||e[v]("media")])&&e.setAttribute("media",t),n&&e.setAttribute("srcset",n)}function Te(){var e;B||(s.now()-W<999?f(Te,999):(e=k(function(){p.loadMode=3,ie()}),B=!0,p.loadMode=3,ie(),d("scroll",function(){3==p.loadMode&&(p.loadMode=2),e()},!0)))}})}();
