(function(e){function t(t){for(var r,o,s=t[0],c=t[1],l=t[2],u=0,d=[];u<s.length;u++)o=s[u],a[o]&&d.push(a[o][0]),a[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);p&&p(t);while(d.length)d.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,o=1;o<n.length;o++){var s=n[o];0!==a[s]&&(r=!1)}r&&(i.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},o={app:0},a={app:0},i=[];function s(e){return c.p+"js/"+({about:"about",biblography:"biblography","era~species":"era~species",era:"era",species:"species"}[e]||e)+"."+{about:"85b67df5",biblography:"643f3872","era~species":"48abe2a6",era:"bea928b9",species:"cb449e50"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={about:1,biblography:1,era:1,species:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise(function(t,n){for(var r="css/"+({about:"about",biblography:"biblography","era~species":"era~species",era:"era",species:"species"}[e]||e)+"."+{about:"02cb8ec7",biblography:"25aaf053","era~species":"31d6cfe0",era:"d501885e",species:"07b571fe"}[e]+".css",a=c.p+r,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var l=i[s],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===r||u===a))return t()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){l=d[s],u=l.getAttribute("data-href");if(u===r||u===a)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var r=t&&t.target&&t.target.src||a,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.request=r,delete o[e],p.parentNode.removeChild(p),n(i)},p.href=a;var f=document.getElementsByTagName("head")[0];f.appendChild(p)}).then(function(){o[e]=0}));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise(function(t,n){r=a[e]=[t,n]});t.push(r[2]=i);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=s(e),l=function(t){u.onerror=u.onload=null,clearTimeout(d);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src,i=new Error("Loading chunk "+e+" failed.\n("+r+": "+o+")");i.type=r,i.request=o,n[1](i)}a[e]=void 0}};var d=setTimeout(function(){l({type:"timeout",target:u})},12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="",c.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var p=u;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"2c5b":function(e,t,n){},"45a6":function(e,t,n){e.exports=n.p+"img/evolution.d6883e24.jpg"},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app"},[n("mdc-layout-app",[n("mdc-toolbar",{attrs:{slot:"toolbar",waterfall:""},slot:"toolbar"},[n("mdc-toolbar-row",[n("mdc-toolbar-section",{attrs:{"align-start":""}},[n("mdc-toolbar-menu-icon",{attrs:{event:"toggle-drawer"}}),n("a",{staticStyle:{"text-decoration":"none",color:"white","margin-top":"10px"},attrs:{href:"#/"}},[n("mdc-toolbar-title",[e._v("Evolutionary")])],1)],1)],1)],1),n("mdc-drawer",{attrs:{slot:"drawer","toggle-on":"toggle-drawer",temporary:""},slot:"drawer"},[n("mdc-drawer-list",[n("mdc-drawer-item",{attrs:{href:"#/","start-icon":"home"}},[e._v("Home")]),n("mdc-drawer-item",{attrs:{href:"#/about","start-icon":"send"}},[e._v("About Us")]),n("mdc-drawer-item",{attrs:{href:"#/biblography","start-icon":"attachment"}},[e._v("Biblography")])],1)],1),n("main",{staticClass:"content"},[n("transition",{attrs:{name:"route"}},[n("router-view")],1)],1)],1)],1)},a=[],i={},s=i,c=(n("5c0b"),n("2877")),l=Object(c["a"])(s,o,a,!1,null,null,null),u=l.exports,d=n("8c4f"),p=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"home"},[r("Banner"),r("div",{staticClass:"selection"},[r("mdc-select",{staticClass:"mdc-select--outlined",attrs:{label:"I want to know about"},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}},e._l(e.animals,function(t){return r("option",{key:t},[e._v("\n        "+e._s(t)+"\n      ")])}),0),r("mdc-button",{attrs:{unelevated:"",href:"#/species/"+e.selected}},[e._v("Explore!")])],1),r("mdc-layout-grid",[r("mdc-layout-cell",{attrs:{desktop:"8",tablet:"4",phone:"4",align:"middle"}},[r("h1",[e._v(" What is evolution ? ")]),r("p",[e._v("\n        Evolution is change in the heritable characteristics of biological populations over successive generations.\n        These characteristics are the expressions of genes that are passed on from parent to offspring during reproduction.\n        Different characteristics tend to exist within any given population as a result of mutation,\n        genetic recombination and other sources of genetic variation. \n      ")])]),r("mdc-layout-cell",{attrs:{desktop:"4",tablet:"4",phone:"4"}},[r("img",{staticClass:"title",staticStyle:{width:"100%"},attrs:{src:n("45a6"),alt:"human evolution"}})])],1),r("mdc-layout-grid",[r("mdc-layout-cell",{attrs:{desktop:"4",tablet:"4",phone:"4"}},[r("img",{staticClass:"title",staticStyle:{width:"100%"},attrs:{src:n("bc56"),alt:"human evolution"}})]),r("mdc-layout-cell",{attrs:{desktop:"8",tablet:"4",phone:"4",align:"middle"}},[r("h1",{staticStyle:{"line-height":"30px"}},[e._v(" Why should we study evolution ? ")]),r("p",[e._v("\n        We study evolution for the same reasons that we study any subject — the thirst for knowledge, to understand the past and predict the future, and to organize our world. But the subject of evolution also has huge relevance to our world and current issues that concern all of us. Evolution was happening 150 million years ago when dinosaurs dominated the Earth, was happening in the 1830s when Charles Darwin landed on the Galapagos Islands during the voyage of the HMS Beagle, and it is happening today. It is occurring in every living species on the planet, right now !!\n      ")])])],1),r("br"),r("center",[r("i",[e._v("Made by Team Hulk Busters")])]),r("br"),r("br")],1)},f=[],h=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},b=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"banner"}},[r("img",{attrs:{src:n("cf05"),alt:"evolutionary logo"}}),r("h2",[r("span",[e._v("Evolution's Dictionary")])])])}],m={name:"Banner"},g=m,v=(n("d35f"),Object(c["a"])(g,h,b,!1,null,"3c15d1c6",null)),y=v.exports,w={name:"home",data:function(){return{selected:"fish",animals:["fish","reptiles","mammals","birds","insects"]}},components:{Banner:y}},_=w,k=(n("65b8"),Object(c["a"])(_,p,f,!1,null,"3b1f1b6a",null)),x=k.exports;r["a"].use(d["a"]);var j=new d["a"]({routes:[{path:"/",name:"home",component:x},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/species/:name",name:"species",component:function(){return Promise.all([n.e("era~species"),n.e("species")]).then(n.bind(null,"8c0f"))}},{path:"/species/:name/:era",name:"era",component:function(){return Promise.all([n.e("era~species"),n.e("era")]).then(n.bind(null,"ba5a"))}},{path:"/biblography",name:"biblography",component:function(){return n.e("biblography").then(n.bind(null,"e361"))}}]}),E=n("2f62");r["a"].use(E["a"]);var S=new E["a"].Store({state:{},mutations:{},actions:{}}),C=n("9483");Object(C["a"])("".concat("","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var O=n("fb51");r["a"].use(O["a"]),r["a"].config.productionTip=!1,new r["a"]({router:j,store:S,render:function(e){return e(u)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var r=n("5e27"),o=n.n(r);o.a},"5e27":function(e,t,n){},"65b8":function(e,t,n){"use strict";var r=n("2c5b"),o=n.n(r);o.a},7704:function(e,t,n){},bc56:function(e,t,n){e.exports=n.p+"img/alien.b468f07a.png"},cf05:function(e,t,n){e.exports=n.p+"img/logo.fdba4ace.png"},d35f:function(e,t,n){"use strict";var r=n("7704"),o=n.n(r);o.a}});
//# sourceMappingURL=app.0f4f2540.js.map