export default function scrollLoad (a){function d(a,b){var d,e;return 2!=arguments.length?!1:(d=a.style[c(b)],d||(document.defaultView&&document.defaultView.getComputedStyle?(e=document.defaultView.getComputedStyle(a,null),d=e?e.getPropertyValue(b):null):a.currentStyle&&(d=a.currentStyle[c(b)])),"auto"==d?"":d)}var b=0==arguments.length?{src:"xSrc",time:300}:{src:a.src||"xSrc",time:a.time||300},c=function(a){return a.replace(/-(\w)/g,function(a,b){return b.toUpperCase()})},e=function(){var h,i,j,k,l,m,a=window.pageYOffset?window.pageYOffset:window.document.documentElement.scrollTop,c=a+Number(window.innerHeight?window.innerHeight:document.documentElement.clientHeight),f=document.images,g=f.length;if(!g)return!1;for(h=0;g>h;h++)i=f[h].getAttribute(b.src),j=f[h],k=j.nodeName.toLowerCase(),j&&(l=j.getBoundingClientRect().top+window.document.documentElement.scrollTop+window.document.body.scrollTop,m=l+Number(d(j,"height").replace("px","")),(l>a&&c>l||m>a&&c>m)&&("img"===k&&null!==i&&j.setAttribute("src",i),j=null));window.onscroll=function(){setTimeout(function(){e()},b.time)}};return e()};