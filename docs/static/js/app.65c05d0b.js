!function(e){function t(t){for(var n,u,i=t[0],c=t[1],l=t[2],p=0,f=[];p<i.length;p++)u=i[p],Object.prototype.hasOwnProperty.call(o,u)&&o[u]&&f.push(o[u][0]),o[u]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);for(s&&s(t);f.length;)f.shift()();return a.push.apply(a,l||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],n=!0,i=1;i<r.length;i++){var c=r[i];0!==o[c]&&(n=!1)}n&&(a.splice(t--,1),e=u(u.s=r[0]))}return e}var n={},o={app:0},a=[];function u(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,u),r.l=!0,r.exports}u.e=function(e){var t=[],r=o[e];if(0!==r)if(r)t.push(r[2]);else{var n=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=n);var a,i=document.createElement("script");i.charset="utf-8",i.timeout=120,u.nc&&i.setAttribute("nonce",u.nc),i.src=function(e){return u.p+"static/js/"+({about:"about"}[e]||e)+"."+{about:"a7ccfa36"}[e]+".js"}(e);var c=new Error;a=function(t){i.onerror=i.onload=null,clearTimeout(l);var r=o[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;c.message="Loading chunk "+e+" failed.\n("+n+": "+a+")",c.name="ChunkLoadError",c.type=n,c.request=a,r[1](c)}o[e]=void 0}};var l=setTimeout((function(){a({type:"timeout",target:i})}),12e4);i.onerror=i.onload=a,document.head.appendChild(i)}return Promise.all(t)},u.m=e,u.c=n,u.d=function(e,t,r){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},u.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(u.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)u.d(r,n,function(t){return e[t]}.bind(null,n));return r},u.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/main-app/",u.oe=function(e){throw e};var i=window.webpackJsonp=window.webpackJsonp||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var s=c;a.push([0,"chunk-vendors"]),r()}({0:function(e,t,r){e.exports=r("cd49")},"375b":function(e,t,r){},6536:function(e,t,r){"use strict";r("375b")},cd49:function(e,t,r){"use strict";r.r(t);var n=r("1da1"),o=(r("e260"),r("e6cf"),r("cca6"),r("a79d"),r("96cf"),r("2b0e")),a=r("a6f4"),u=(r("1951"),r("450d"),r("eedf")),i=r.n(u),c=r("34ac9"),l=Object(a.b)({name:"PageApp",components:{"el-button":i.a},setup:function(e,t){t.root;var r=Object(a.d)("hello");Object(a.c)((function(){window.qiankunStarted||(window.qiankunStarted=!0,Object(c.c)())}));return{msg:r,toPage:function(e){window.location.href=e}}}}),s=r("2877"),p=Object(s.a)(l,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[e._v(" v1.0.1 "),r("div",{attrs:{id:"nav"}},[r("router-link",{attrs:{to:"/"}},[e._v("Home")]),e._v(" | "),r("router-link",{attrs:{to:"/about"}},[e._v("About")]),e._v(" | "),r("router-link",{attrs:{to:"/micro1Page1"}},[e._v("micro1 page1")]),e._v(" | "),r("router-link",{attrs:{to:"/micro1Page2"}},[e._v("micro1 page2")])],1),r("router-view"),r("div",{attrs:{id:"micro-container"}})],1)}),[],!1,null,null,null).exports,f=(r("9e1f"),r("6ed5")),v=r.n(f),d=r("9483");Object(d.a)("".concat("/main-app/","service-worker.js"),{ready:function(){},registered:function(){},cached:function(){},updatefound:function(){},updated:function(){v.a.confirm("当前有新的的内容，请刷新浏览器","提示",{type:"warning",closeOnClickModal:!1,showCancelButton:!1,showClose:!1,closeOnPressEscape:!1}).then((function(){window.location.reload()}))},offline:function(){},error:function(e){}}),r("d3b7"),r("3ca3"),r("ddb0");var h=r("8c4f"),m=o.default.extend({name:"HelloWorld",props:{msg:String}}),g=(r("6536"),Object(s.a)(m,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"hello"},[r("h1",[e._v(e._s(e.msg))]),e._m(0),r("h3",[e._v("Installed CLI Plugins")]),e._m(1),r("h3",[e._v("Essential Links")]),e._m(2),r("h3",[e._v("Ecosystem")]),e._m(3)])}),[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[e._v(" For a guide and recipes on how to configure / customize this project,"),r("br"),e._v(" check out the "),r("a",{attrs:{href:"https://cli.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-cli documentation")]),e._v(". ")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel",target:"_blank",rel:"noopener"}},[e._v("babel")])]),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router",target:"_blank",rel:"noopener"}},[e._v("router")])]),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint",target:"_blank",rel:"noopener"}},[e._v("eslint")])]),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-typescript",target:"_blank",rel:"noopener"}},[e._v("typescript")])])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[r("a",{attrs:{href:"https://vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Core Docs")])]),r("li",[r("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Forum")])]),r("li",[r("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Community Chat")])]),r("li",[r("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank",rel:"noopener"}},[e._v("Twitter")])]),r("li",[r("a",{attrs:{href:"https://news.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("News")])])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[r("a",{attrs:{href:"https://router.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-router")])]),r("li",[r("a",{attrs:{href:"https://vuex.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vuex")])]),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue-devtools#vue-devtools",target:"_blank",rel:"noopener"}},[e._v("vue-devtools")])]),r("li",[r("a",{attrs:{href:"https://vue-loader.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-loader")])]),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank",rel:"noopener"}},[e._v("awesome-vue")])])])}],!1,null,"4d1535fb",null)).exports,b=o.default.extend({name:"Home",components:{HelloWorld:g}}),_=Object(s.a)(b,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"home"},[t("img",{attrs:{alt:"Vue logo",src:r("cf05")}}),t("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js + TypeScript App"}})],1)}),[],!1,null,null,null).exports;o.default.use(h.a);var j=[{path:"/",name:"Home",component:_},{path:"/about",name:"About",component:function(){return r.e("about").then(r.bind(null,"f820"))}},{name:"Micro1",path:"/micro1",children:[{name:"Micro1Page1",path:"page1"},{name:"Micro1Page2",path:"page2"}]}],w=new h.a({mode:"history",base:"/main-app/",routes:j}),k=r("5530"),y=(r("d81d"),[{name:"micro1 app",entry:"https://ferrydjing.github.io/micro-app/",activeRule:"".concat("/main-app/"),container:"#micro-container"}]).map((function(e){return Object(k.a)(Object(k.a)({},e),{},{props:{routerBase:e.activeRule,mainRouter:w,mainStore:{}}})}));o.default.use(a.a),o.default.config.productionTip=!1,Object(c.b)(y,{beforeLoad:function(){var e=Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",void 0);case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),afterMount:function(){var e=Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",void 0);case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()}),new o.default({router:w,render:function(e){return e(p)}}).$mount("#app")},cf05:function(e,t,r){e.exports=r.p+"static/img/logo.82b9c7a5.png"}});