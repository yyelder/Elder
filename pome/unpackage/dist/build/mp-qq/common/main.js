(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/main"],{"095a":function(e,t,n){"use strict";(function(e){n("2fcd"),n("921b");var t=u(n("66fd")),o=u(n("2f62")),r=u(n("8f60"));function u(e){return e&&e.__esModule?e:{default:e}}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){f(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}t.default.config.productionTip=!1,r.default.mpType="app",t.default.use(o.default);var i=new o.default.Store({state:{loginStatus:0},mutations:{changeLogin:function(e,t){console.log("登录状态",t),e.loginStatus=t}}});t.default.prototype.$store=i;var l=new t.default(a({},r.default));e(l).$mount()}).call(this,n("a821")["createApp"])},"3a53":function(e,t,n){"use strict";var o=n("a52d"),r=n.n(o);r.a},7103:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o={onLaunch:function(){console.log("App Launch")},onShow:function(){console.log("App Show")},onHide:function(){console.log("App Hide")}};t.default=o},"8f60":function(e,t,n){"use strict";n.r(t);var o=n("c148");for(var r in o)"default"!==r&&function(e){n.d(t,e,(function(){return o[e]}))}(r);n("3a53");var u,c,a,f,i=n("f0c5"),l=Object(i["a"])(o["default"],u,c,!1,null,null,null,!1,a,f);t["default"]=l.exports},a52d:function(e,t,n){},c148:function(e,t,n){"use strict";n.r(t);var o=n("7103"),r=n.n(o);for(var u in o)"default"!==u&&function(e){n.d(t,e,(function(){return o[e]}))}(u);t["default"]=r.a}},[["095a","common/runtime","common/vendor"]]]);