(function(t){function a(a){for(var n,s,i=a[0],c=a[1],l=a[2],p=0,f=[];p<i.length;p++)s=i[p],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&f.push(r[s][0]),r[s]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(a);while(f.length)f.shift()();return o.push.apply(o,l||[]),e()}function e(){for(var t,a=0;a<o.length;a++){for(var e=o[a],n=!0,i=1;i<e.length;i++){var c=e[i];0!==r[c]&&(n=!1)}n&&(o.splice(a--,1),t=s(s.s=e[0]))}return t}var n={},r={app:0},o=[];function s(a){if(n[a])return n[a].exports;var e=n[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,s),e.l=!0,e.exports}s.m=t,s.c=n,s.d=function(t,a,e){s.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,a){if(1&a&&(t=s(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(s.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var n in t)s.d(e,n,function(a){return t[a]}.bind(null,n));return e},s.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(a,"a",a),a},s.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},s.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=a,i=i.slice();for(var l=0;l<i.length;l++)a(i[l]);var u=c;o.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("56d7")},"2b4b":function(t,a,e){"use strict";var n=e("f65d"),r=e.n(n);r.a},"56d7":function(t,a,e){"use strict";e.r(a);e("e260"),e("e6cf"),e("cca6"),e("a79d");var n=e("2b0e"),r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("router-view",{attrs:{coupons:t.coupons}})},o=[],s={name:"app",data:function(){return{coupons:[]}},created:function(){var t=this;this.axios.get("https://script.google.com/macros/s/AKfycbyVuJnEmTT8AknArU2mX8uoT7g2fB-SnjBoHn0i2eikUqS_GOY/exec").then((function(a){t.coupons=a.data}))}},i=s,c=e("2877"),l=Object(c["a"])(i,r,o,!1,null,null,null),u=l.exports,p=(e("4989"),e("ab8b"),e("bc3a")),f=e.n(p),d=e("a7fe"),v=e.n(d),g=e("8c4f"),m=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"list"}},[t._m(0),e("main",t._l(t.coupons,(function(a,n){return e("div",{key:n,staticClass:"coupon"},[e("div",{staticClass:"image"},[e("img",{staticClass:"img-fluid",attrs:{src:a[1]}})]),e("span",{staticClass:"deadline",domProps:{innerHTML:t._s(t.deadline)}}),e("div",{staticClass:"submit"},[e("router-link",{attrs:{to:{name:"coupon",params:{id:n}}}},[t._v("兌換優惠")])],1)])})),0),t._m(1)])},b=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("header",[e("nav",{staticClass:"navbar"},[e("button",{staticClass:"navbar-toggler pb-0",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarToggleExternalContent","aria-controls":"navbarToggleExternalContent","aria-expanded":"false","aria-label":"Toggle navigation"}},[e("span",{staticClass:"navbar-toggler-icon"})]),e("a",{staticClass:"page-title",attrs:{href:"#"}},[t._v("優惠券")]),e("a",{staticClass:"pr-3",attrs:{href:"#"}},[t._v("使用說明")])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("footer",[e("ul",{staticClass:"nav bottom-nav"},[e("li",{staticClass:"nav-item flex-fill"},[e("img",{attrs:{src:"images/img_bottom_coupon_n.png",width:"20",height:"20"}}),e("a",{staticClass:"nav-link",attrs:{href:"#"}},[t._v("優惠券")])]),e("li",{staticClass:"nav-item flex-fill"},[e("img",{attrs:{src:"images/img_bottom_face_n.png",width:"20",height:"20"}}),e("a",{staticClass:"nav-link",attrs:{href:"#"}},[t._v("歡樂貼")])]),e("li",{staticClass:"nav-item flex-fill"},[e("img",{attrs:{src:"images/img_bottom_vip_n.png",width:"20",height:"20"}}),e("a",{staticClass:"nav-link",attrs:{href:"#"}},[t._v("獨享券")])])])])}],h=(e("99af"),{name:"List",props:["coupons"],data:function(){return{}},computed:{deadline:function(){var t=new Date;t.setDate(t.getDate()+1);var a={year:t.getFullYear(),month:t.getMonth()+1,day:t.getDate()},e=Date.parse(new Date),n=Date.parse(new Date("".concat(a.year,"/").concat(a.month,"/").concat(a.day))),r=n-e,o=parseInt(r/1e3/60/60/24),s=parseInt(r/1e3/60/60%24);return"期限：".concat(a.year," 年 ").concat(a.month," 月 ").concat(a.day," 日&emsp;尚餘：").concat(o," 天 ").concat(s," 小時")}}}),_=h,C=(e("2b4b"),Object(c["a"])(_,m,b,!1,null,"02030dbe",null)),y=C.exports,w=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"coupon"}},[e("header",[e("nav",{staticClass:"navbar"},[e("button",{staticClass:"navbar-toggler pb-0",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarToggleExternalContent","aria-controls":"navbarToggleExternalContent","aria-expanded":"false","aria-label":"Toggle navigation"},on:{click:function(a){return t.$router.go(-1)}}},[e("span",{staticClass:"navbar-prev-icon"})]),e("a",{staticClass:"page-title",attrs:{href:"#"}},[t._v("優惠券")]),e("a",{staticClass:"pr-3",attrs:{href:"#"}},[t._v("搜尋附近餐廳")])])]),e("main",{class:{countdown:t.time>0}},[e("img",{attrs:{src:t.coupons[this.$route.params.id][1]}})]),e("footer",[e("ul",{staticClass:"nav bottom-nav"},[e("li",{staticClass:"nav-item"},[0==t.time?e("a",{attrs:{href:"#"},on:{click:t.exchange}},[t._v("兌換優惠")]):e("a",{staticClass:"countdown",attrs:{href:"#"}},[e("img",{staticClass:"clock-icon",attrs:{src:"images/img_coupon_clock_n.png"}}),t._v("優惠倒數 "+t._s(t._f("timeFormat")(t.time)))])])])])])},x=[],O=(e("d3b7"),e("25f0"),e("4d90"),{name:"Coupon",props:["coupons"],data:function(){return{time:0}},mounted:function(){},created:function(){},methods:{exchange:function(){var t=this;this.time=120;var a=window.setInterval((function(){t.time>0?t.time--:clearInterval(a)}),1e3)}},filters:{timeFormat:function(t){var a=parseInt(t/60),e=parseInt(t%60);return e=e.toString().padStart(2,"0"),"".concat(a,":").concat(e)}}}),k=O,j=(e("e897"),Object(c["a"])(k,w,x,!1,null,"4c4af30e",null)),T=j.exports;n["a"].use(g["a"]);var E=new g["a"]({routes:[{name:"list",path:"/",component:y},{name:"coupon",path:"/coupon/:id",component:T}]});n["a"].config.productionTip=!1,n["a"].use(v.a,f.a),new n["a"]({render:function(t){return t(u)},router:E}).$mount("#app")},"5bca":function(t,a,e){},e897:function(t,a,e){"use strict";var n=e("5bca"),r=e.n(n);r.a},f65d:function(t,a,e){}});
//# sourceMappingURL=app.b060df9e.js.map