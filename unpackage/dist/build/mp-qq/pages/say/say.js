(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/say/say"],{"12b5":function(t,n,a){"use strict";a.r(n);var e=a("708d"),o=a("e0e7");for(var u in o)"default"!==u&&function(t){a.d(n,t,(function(){return o[t]}))}(u);a("f192");var i,c=a("f0c5"),f=Object(c["a"])(o["default"],e["b"],e["c"],!1,null,"8b1e6660",null,!1,e["a"],i);n["default"]=f.exports},"2a1f":function(t,n,a){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={data:function(){return{imgUrl:"",heightChange:0,sayPanl:{},imgInfo:a("f184")}},components:{},onLoad:function(){var t=this;this.init(),wx.getSystemInfo({success:function(n){t.heightChange=n.windowHeight}})},methods:{init:function(){var n=this,a="https://v1.alapi.cn/api/acg?format=json";t.request({url:a,success:function(t){n.imgUrl=t.data.data.url,n.say()}})},say:function(){var n=this,a="https://v1.alapi.cn/api/hitokoto?format=json";t.request({url:a,success:function(t){console.log(t),n.sayPanl=t.data.data;var a=n.sayPanl.type;n.sayPanl.type="a"==a?"动画":"b"==a?"漫画":"c"==a?"游戏":"d"==a?"小说":"e"==a?"原创":"f"==a?"来自网络":" 其他",console.log(n.sayPanl)}})},randoms:function(){this.init()}}};n.default=e}).call(this,a("a821")["default"])},"339f":function(t,n,a){},"708d":function(t,n,a){"use strict";var e,o=function(){var t=this,n=t.$createElement;t._self._c},u=[];a.d(n,"b",(function(){return o})),a.d(n,"c",(function(){return u})),a.d(n,"a",(function(){return e}))},e0e7:function(t,n,a){"use strict";a.r(n);var e=a("2a1f"),o=a.n(e);for(var u in e)"default"!==u&&function(t){a.d(n,t,(function(){return e[t]}))}(u);n["default"]=o.a},f192:function(t,n,a){"use strict";var e=a("339f"),o=a.n(e);o.a},ff93:function(t,n,a){"use strict";(function(t){a("2fcd"),a("921b");e(a("66fd"));var n=e(a("12b5"));function e(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,a("a821")["createPage"])}},[["ff93","common/runtime","common/vendor"]]]);