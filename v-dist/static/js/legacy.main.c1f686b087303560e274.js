!function(t){function n(n){for(var r,a,u=n[0],c=n[1],s=n[2],f=0,p=[];f<u.length;f++)a=u[f],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&p.push(o[a][0]),o[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);for(l&&l(n);p.length;)p.shift()();return i.push.apply(i,s||[]),e()}function e(){for(var t,n=0;n<i.length;n++){for(var e=i[n],r=!0,u=1;u<e.length;u++){var c=e[u];0!==o[c]&&(r=!1)}r&&(i.splice(n--,1),t=a(a.s=e[0]))}return t}var r={},o={1:0},i=[];function a(n){if(r[n])return r[n].exports;var e=r[n]={i:n,l:!1,exports:{}};return t[n].call(e.exports,e,e.exports,a),e.l=!0,e.exports}a.e=function(t){var n=[],e=o[t];if(0!==e)if(e)n.push(e[2]);else{var r=new Promise((function(n,r){e=o[t]=[n,r]}));n.push(e[2]=r);var i,u=document.createElement("script");u.charset="utf-8",u.timeout=120,a.nc&&u.setAttribute("nonce",a.nc),u.src=function(t){return a.p+"static/js/legacy."+({}[t]||t)+"."+{2:"7f57fc0ecdf1c0641b05",3:"9ebe688482dd376e4816"}[t]+".js"}(t);var c=new Error;i=function(n){u.onerror=u.onload=null,clearTimeout(s);var e=o[t];if(0!==e){if(e){var r=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src;c.message="Loading chunk "+t+" failed.\n("+r+": "+i+")",c.name="ChunkLoadError",c.type=r,c.request=i,e[1](c)}o[t]=void 0}};var s=setTimeout((function(){i({type:"timeout",target:u})}),12e4);u.onerror=u.onload=i,document.head.appendChild(u)}return Promise.all(n)},a.m=t,a.c=r,a.d=function(t,n,e){a.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,n){if(1&n&&(t=a(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(a.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var r in t)a.d(e,r,function(n){return t[n]}.bind(null,r));return e},a.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(n,"a",n),n},a.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},a.p="/v-dist/",a.oe=function(t){throw console.error(t),t};var u=window.webpackJsonp=window.webpackJsonp||[],c=u.push.bind(u);u.push=n,u=u.slice();for(var s=0;s<u.length;s++)n(u[s]);var l=c;i.push([208,0]),e()}({208:function(t,n,e){e(209),t.exports=e(454)},425:function(t,n,e){"use strict";var r=e(86);e.n(r).a},426:function(t,n,e){var r=e(134),o=e(427),i=e(428),a=e(429),u=e(430),c=e(431);n=r(!1);var s=o(i),l=o(i,{hash:"?#iefix"}),f=o(a),p=o(u),d=o(c,{hash:"#FontName"});n.push([t.i,'/*! normalize.css v8.0.0 | MIT License | github.com/necolas/normalize.css */\nhtml{line-height:1.15;-webkit-text-size-adjust:100%}\nbody{margin:0}\nh1{font-size:2em;margin:.67em 0}\nhr{box-sizing:content-box;height:0;overflow:visible}\npre{font-family:monospace,monospace;font-size:1em}\na{background-color:transparent}\nabbr[title]{border-bottom:0;text-decoration:underline;text-decoration:underline dotted}\nb,strong{font-weight:bolder}\ncode,kbd,samp{font-family:monospace,monospace;font-size:1em}\nsmall{font-size:80%}\nsub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}\nsub{bottom:-0.25em}\nsup{top:-0.5em}\nimg{border-style:none}\nbutton,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}\nbutton,input{overflow:visible}\nbutton,select{text-transform:none}\nbutton,[type="button"],[type="reset"],[type="submit"]{-webkit-appearance:button}\nbutton::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner{border-style:none;padding:0}\nbutton:-moz-focusring,[type="button"]:-moz-focusring,[type="reset"]:-moz-focusring,[type="submit"]:-moz-focusring{outline:0.01rem dotted ButtonText}\nfieldset{padding:.35em .75em .625em}\nlegend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}\nprogress{vertical-align:baseline}\ntextarea{overflow:auto}\n[type="checkbox"],[type="radio"]{box-sizing:border-box;padding:0}\n[type="number"]::-webkit-inner-spin-button,[type="number"]::-webkit-outer-spin-button{height:auto}\n[type="search"]{-webkit-appearance:textfield;outline-offset:-0.02rem}\n[type="search"]::-webkit-search-decoration{-webkit-appearance:none}\n::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}\ndetails{display:block}\nsummary{display:list-item}\ntemplate{display:none}\n[hidden]{display:none}\n* {\r\n    box-sizing: border-box\n}\n*:before,\r\n*:after {\r\n    box-sizing: border-box\n}\n@font-face {\r\n    font-family: \'amrcaxbc\';\r\n    src: url('+s+");\r\n    src: url("+l+") format('embedded-opentype'),\r\n         url("+f+") format('woff'),\r\n         url("+p+") format('truetype'),\r\n         url("+d+") format('svg');\r\n    font-style: normal;\r\n    font-weight: normal;\n}\n.amrcaxbc{ font-family: 'amrcaxbc';\n}\nhtml,\r\nbody {\r\n    height: 100%;\n}\nbody {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    margin: 0;\n}\ndiv {\r\n    text-align: center;\n}\nbutton {\r\n    font-size: 0.3rem;\r\n    vertical-align: middle;\n}\n.title {\r\n    font-size: 0.6rem;\r\n    color: #57bb8a;\r\n    margin: 0;\r\n    line-height: 1;\r\n    font-weight: bold;\n}\na {\r\n    text-decoration: none;\r\n    font-size: 0.6rem;\r\n    color: #57bb8a;\r\n    margin: 0;\r\n    line-height: 2;\r\n    font-weight: bold;\n}\na.active {\r\n    color: #35495e;\n}\nimg {\r\n    max-width: 100%;\n}\np {\r\n    padding: 0;\r\n    margin: 0;\n}\nbutton {\r\n    color: #35495e;\n}\n.fz40 {\r\n    font-size: 0.4rem;\r\n    color: #35495e;\n}\n.main {\r\n    width: 100%;\n}\n.hello {\r\n    font-size: 0;\n}\n.hello img {\r\n  position: relative;\r\n  width: 2rem;\r\n  height: 2rem;\r\n  display: inline-block;\n}\n.hello img:after {\r\n  content: attr(alt) \" Loading ...\";\r\n  display: block;\r\n  box-sizing: border-box;\r\n  padding-top: 1rem;\r\n  position: absolute;\r\n  z-index: 0;\r\n  top: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  background-color: #f5f5f5;\r\n  text-align: center;\r\n  font-size: 0.24rem;\r\n  color: rgb(100, 100, 100);\n}\n.router {\r\n  font-size: 0.5rem\n}\n.router_img {\r\n  font-size: 0;\r\n  text-align: center;\n}\n.router_img img{\r\n  width: 2rem;\r\n  height: 0.8rem;\n}\n.vuex {\r\n    line-height: 1\n}\n.increment {\r\n    margin-top: 0.2rem\n}\n",""]),t.exports=n},428:function(t,n,e){"use strict";e.r(n),n.default=e.p+"static/font/amrcaxbc.d982ddb.eot"},429:function(t,n,e){"use strict";e.r(n),n.default=e.p+"static/font/amrcaxbc.ca46dc6.woff"},430:function(t,n,e){"use strict";e.r(n),n.default=e.p+"static/font/amrcaxbc.f04e667.ttf"},431:function(t,n,e){"use strict";e.r(n),n.default="data:image/svg+xml;base64,ZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyAic3RhdGljL2ZvbnQvYW1yY2F4YmMuM2Q5Y2VhZi5zdmciOw=="},432:function(t,n,e){"use strict";var r=e(87);e.n(r).a},433:function(t,n,e){(n=e(134)(!1)).push([t.i,".mlra{margin-left:auto;margin-right:auto}\n",""]),t.exports=n},451:function(t,n,e){"use strict";e.r(n),n.default=e.p+"static/img/hld.27ffe07.png"},454:function(t,n,e){"use strict";e.r(n);var r={};e.r(r),e.d(r,"getRouter",(function(){return k})),e.d(r,"getText",(function(){return P})),e.d(r,"getCount",(function(){return T}));var o={};e.r(o),e.d(o,"getRouter",(function(){return E})),e.d(o,"getText",(function(){return S})),e.d(o,"loadings",(function(){return L})),e.d(o,"increment",(function(){return C})),e.d(o,"decrement",(function(){return D}));var i={};e.r(i),e.d(i,"ROUTER_LIST",(function(){return I})),e.d(i,"TEXT_LIST",(function(){return Y})),e.d(i,"COUNT_LIST",(function(){return M})),e.d(i,"increment",(function(){return $})),e.d(i,"decrement",(function(){return Z}));e(136),e(137),e(138),e(139),e(140),e(141);var a=e(85),u=e.n(a),c=e(38),s=e.n(c),l=e(50),f=e(207),p=e.n(f),d=e(62),m=e.n(d),b={props:{data:{type:Object,default:function(){return{avatar:""}}}}},g=e(33),h={components:{Hello:Object(g.a)(b,(function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"hello"},[n("p",{staticClass:"logo"},[n("img",{attrs:{src:this.data.avatar,alt:"logo"}})])])}),[],!1,null,null,null).exports,Router:Object(g.a)({},(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"router amrcaxbc"},[e("div",{staticClass:"title"},[t._v("Ecosystem")]),t._v(" "),e("RouterLink",{attrs:{to:"/vr1"}},[t._v(" router ")]),t._v(" "),e("RouterLink",{attrs:{to:"/axios"}},[t._v(" axios ")]),t._v(" "),e("RouterLink",{attrs:{to:"/vuex"}},[t._v(" vuex ")]),t._v(" "),e("RouterView",{staticClass:"fz40"})],1)}),[],!1,null,null,null).exports},data:function(){return{data:{}}},created:function(){var t=this;m.a.get("https://i-cut.cc/axios.json").then((function(n){t.data=n.data.logo}))}},v=(e(425),e(432),Object(g.a)(h,(function(){var t=this.$createElement,n=this._self._c||t;return n("div",{attrs:{id:"app"}},[n("Hello",{attrs:{data:this.data}}),this._v(" "),n("Router")],1)}),[],!1,null,null,null).exports),y=(e(434),e(436),e(133)),x=[function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"router_img"},[n("img",{attrs:{src:e(451),alt:""}})])}];function w(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}var O=function(t){return t.dispatch("getRouter")},j={prefetch:O,computed:function(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?w(Object(e),!0).forEach((function(n){u()(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):w(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}({},Object(l.c)({RouterData:"getRouter"})),mounted:function(){O(this.$store)}},_=Object(g.a)(j,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"vue-router"},[this._v("\n  "+this._s(this.RouterData.value)+"\n  "),this._m(0)])}),x,!1,null,null,null).exports;s.a.use(y.a);var z=new y.a({routes:[{path:"/",redirect:"/vr1"},{path:"/vr1",component:_},{path:"/axios",component:function(){return e.e(2).then(e.bind(null,462))}},{path:"/vuex",component:function(){return e.e(3).then(e.bind(null,461))}}],linkActiveClass:"active"}),k=function(t){return t.router},P=function(t){return t.text},T=function(t){return t.count},R="https://i-cut.cc/axios.json",E=function(t){var n=t.commit;return m.a.get(R).then((function(t){n("ROUTER_LIST",t.data)}))},S=function(t){var n=t.commit;return m.a.get(R).then((function(t){n("TEXT_LIST",t.data)}))},L=function(t){var n=t.commit;return m.a.get(R).then((function(t){n("COUNT_LIST",t.data)}))},C=function(t){return(0,t.commit)("increment")},D=function(t){return(0,t.commit)("decrement")},I=function(t,n){t.router=n.router},Y=function(t,n){t.text=n.text},M=function(t,n){t.count=n.number.count},X="点击加载初始化值",$=function(t){"空"===t.count?t.count=X:t.count===X?t.count=X:t.count+=1},Z=function(t){"空"===t.count?t.count=X:t.count===X?t.count=X:t.count-=1};s.a.use(l.a);var J=new l.a.Store({state:{router:{},text:"",count:"空"},getters:r,actions:o,mutations:i});function N(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}e.d(n,"app",(function(){return U})),e.d(n,"router",(function(){return z})),e.d(n,"store",(function(){return J})),p.a.attach(document.body),s.a.config.productionTip=!1,s.a.use(l.a);var U=new s.a(function(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?N(Object(e),!0).forEach((function(n){u()(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):N(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}({el:"#app",router:z,store:J},v))},86:function(t,n,e){var r=e(426);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);(0,e(135).default)("5567fb25",r,!0,{})},87:function(t,n,e){var r=e(433);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);(0,e(135).default)("4e88f76b",r,!0,{})}});
//# sourceMappingURL=legacy.main.c1f686b087303560e274.js.map