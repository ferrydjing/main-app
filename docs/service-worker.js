if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let i=Promise.resolve();return s[e]||(i=new Promise((async i=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=i}else importScripts(e),i()}))),i.then((()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]}))},i=(i,s)=>{Promise.all(i.map(e)).then((e=>s(1===e.length?e[0]:e)))},s={require:Promise.resolve(i)};self.define=(i,a,n)=>{s[i]||(s[i]=Promise.resolve().then((()=>{let s={};const r={uri:location.origin+i.slice(1)};return Promise.all(a.map((i=>{switch(i){case"exports":return s;case"module":return r;default:return e(i)}}))).then((e=>{const i=n(...e);return s.default||(s.default=i),s}))})))}}define("./service-worker.js",["./workbox-a244db4c"],(function(e){"use strict";e.setCacheNameDetails({prefix:"sw-cache-main-app"}),self.skipWaiting(),e.precacheAndRoute([{url:"/main-app/favicon.ico",revision:"1ba2ae710d927f13d483fd5d1e548c9b"},{url:"/main-app/index.html",revision:"5a7377d4a4e106882fa84b670609e1f9"},{url:"/main-app/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"},{url:"/main-app/static/css/app.33d8f7d3.css",revision:null},{url:"/main-app/static/css/chunk-vendors.82957bc4.css",revision:null},{url:"/main-app/static/fonts/element-icons.535877f5.woff",revision:"535877f50039c0cb49a6196a5b7517cd"},{url:"/main-app/static/fonts/element-icons.732389de.ttf",revision:"732389ded34cb9c52dd88271f1345af9"},{url:"/main-app/static/img/logo.82b9c7a5.png",revision:"82b9c7a5a3f405032b1db71a25f67021"},{url:"/main-app/static/js/about.a7ccfa36.js",revision:null},{url:"/main-app/static/js/app.79ae9ed6.js",revision:null},{url:"/main-app/static/js/chunk-vendors.495c790a.js",revision:null}],{}),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("/main-app/index.html"),{allowlist:[/^(?!.*\.html$|\/data\/).*/]}))}));
