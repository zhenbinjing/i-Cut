(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"0Xce":function(t,n,e){},2:function(t,n,e){e("201c"),t.exports=e("jHIM")},"MS/l":function(t,n,e){},appk:function(t,n,e){"use strict";var r=e("0Xce");e.n(r).a},jHIM:function(t,n,e){"use strict";e.r(n);var r={};e.r(r),e.d(r,"getRouter",function(){return O}),e.d(r,"getText",function(){return j}),e.d(r,"getCount",function(){return C});var u={};e.r(u),e.d(u,"getRouter",function(){return R}),e.d(u,"getText",function(){return E}),e.d(u,"loadings",function(){return k}),e.d(u,"increment",function(){return S}),e.d(u,"decrement",function(){return I});var o={};e.r(o),e.d(o,"ROUTER_LIST",function(){return L}),e.d(o,"TEXT_LIST",function(){return D}),e.d(o,"COUNT_LIST",function(){return U}),e.d(o,"increment",function(){return M}),e.d(o,"decrement",function(){return $});var c=e("QbLZ"),a=e.n(c),i=e("ukxx"),s=e.n(i),l=e("L2JU"),f=e("Mb3Q"),d=e("vDqi"),v=e.n(d),p={props:{data:{type:Object,default:function(){return{avatar:"data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="}}}}},h=e("KHd+"),m={components:{hello:Object(h.a)(p,function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"hello"},[n("p",{staticClass:"logo"},[n("img",{attrs:{src:this.data.avatar,alt:"logo"}})])])},[],!1,null,null,null).exports,router:Object(h.a)({},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"router"},[e("div",{staticClass:"title"},[t._v("Ecosystem")]),t._v(" "),e("router-link",{attrs:{to:"/vr1"}},[t._v("router")]),t._v(" "),e("router-link",{attrs:{to:"/axios"}},[t._v("axios")]),t._v(" "),e("router-link",{attrs:{to:"/vuex"}},[t._v("vuex")]),t._v(" "),e("router-view",{staticClass:"fz40"})],1)},[],!1,null,null,null).exports},data:function(){return{data:{}}},created:function(){var t=this;v.a.get("https://i-cut.cc/axios.json").then(function(n){t.data=n.data.logo})}},_=(e("appk"),e("pfAB"),Object(h.a)(m,function(){var t=this.$createElement,n=this._self._c||t;return n("div",{attrs:{id:"app"}},[n("hello",{attrs:{data:this.data}}),this._v(" "),n("router")],1)},[],!1,null,null,null).exports),x=e("jE9Z"),g=function(t){return t.dispatch("getRouter")},A={prefetch:g,computed:a()({},Object(l.c)({RouterData:"getRouter"})),mounted:function(){g(this.$store)}},T=Object(h.a)(A,function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"vue-router"},[this._v("\n  "+this._s(this.RouterData.value)+"\n")])},[],!1,null,null,null).exports;s.a.use(x.a);var b=new x.a({routes:[{path:"/",redirect:"/vr1"},{path:"/vr1",component:T},{path:"/axios",component:function(){return e.e(1).then(e.bind(null,"v2nU"))}},{path:"/vuex",component:function(){return e.e(0).then(e.bind(null,"tOxr"))}}],linkActiveClass:"active"}),O=function(t){return t.router},j=function(t){return t.text},C=function(t){return t.count},w="https://i-cut.cc/axios.json",R=function(t){var n=t.commit;t.state;return v.a.get(w).then(function(t){n("ROUTER_LIST",t.data)})},E=function(t){var n=t.commit;t.state;return v.a.get(w).then(function(t){n("TEXT_LIST",t.data)})},k=function(t){var n=t.commit;t.state;return v.a.get(w).then(function(t){n("COUNT_LIST",t.data)})},S=function(t){return(0,t.commit)("increment")},I=function(t){return(0,t.commit)("decrement")},L=function(t,n){t.router=n.router},D=function(t,n){t.text=n.text},U=function(t,n){t.count=n.number.count},M=function(t){"空"===t.count?t.count="点击加载初始化值":"点击加载初始化值"===t.count?t.count="点击加载初始化值":t.count+=1},$=function(t){"空"===t.count?t.count="点击加载初始化值":"点击加载初始化值"===t.count?t.count="点击加载初始化值":t.count-=1};s.a.use(l.a);var B=new l.a.Store({state:{router:{},text:{},count:"空"},getters:r,actions:u,mutations:o});e.d(n,"app",function(){return Q}),e.d(n,"router",function(){return b}),e.d(n,"store",function(){return B}),s.a.config.productionTip=!1,s.a.use(l.a),Object(f.sync)(B,b);var Q=new s.a(a()({el:"#app",router:b,store:B},_))},pfAB:function(t,n,e){"use strict";var r=e("MS/l");e.n(r).a}},[[2,2,3]]]);
//# sourceMappingURL=main.f720350164497cb6cd1f.js.map