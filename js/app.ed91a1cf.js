(function(e){function t(t){for(var n,a,i=t[0],s=t[1],l=t[2],u=0,p=[];u<i.length;u++)a=i[u],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&p.push(o[a][0]),o[a]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);d&&d(t);while(p.length)p.shift()();return c.push.apply(c,l||[]),r()}function r(){for(var e,t=0;t<c.length;t++){for(var r=c[t],n=!0,a=1;a<r.length;a++){var i=r[a];0!==o[i]&&(n=!1)}n&&(c.splice(t--,1),e=s(s.s=r[0]))}return e}var n={},a={app:0},o={app:0},c=[];function i(e){return s.p+"js/"+({about:"about"}[e]||e)+"."+{about:"ed855ca0"}[e]+".js"}function s(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.e=function(e){var t=[],r={about:1};a[e]?t.push(a[e]):0!==a[e]&&r[e]&&t.push(a[e]=new Promise((function(t,r){for(var n="css/"+({about:"about"}[e]||e)+"."+{about:"24570718"}[e]+".css",o=s.p+n,c=document.getElementsByTagName("link"),i=0;i<c.length;i++){var l=c[i],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===n||u===o))return t()}var p=document.getElementsByTagName("style");for(i=0;i<p.length;i++){l=p[i],u=l.getAttribute("data-href");if(u===n||u===o)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var n=t&&t.target&&t.target.src||o,c=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=n,delete a[e],d.parentNode.removeChild(d),r(c)},d.href=o;var f=document.getElementsByTagName("head")[0];f.appendChild(d)})).then((function(){a[e]=0})));var n=o[e];if(0!==n)if(n)t.push(n[2]);else{var c=new Promise((function(t,r){n=o[e]=[t,r]}));t.push(n[2]=c);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,s.nc&&u.setAttribute("nonce",s.nc),u.src=i(e);var p=new Error;l=function(t){u.onerror=u.onload=null,clearTimeout(d);var r=o[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;p.message="Loading chunk "+e+" failed.\n("+n+": "+a+")",p.name="ChunkLoadError",p.type=n,p.request=a,r[1](p)}o[e]=void 0}};var d=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(t)},s.m=e,s.c=n,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(r,n,function(t){return e[t]}.bind(null,n));return r},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/portfolio/",s.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var p=0;p<l.length;p++)t(l[p]);var d=u;c.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"0015":function(e,t,r){"use strict";r("4653")},"02ac":function(e,t,r){e.exports=r.p+"img/proyect-paint.5d4ab664.png"},"0b0a":function(e,t,r){"use strict";r("36e0")},"0eeb":function(e,t,r){e.exports=r.p+"img/proyect-e-wallet.406af4fd.png"},"153e":function(e,t,r){},1771:function(e,t,r){var n={"./Firefox Installer.exe":"c4b6","./hero-video.mp4":"6f01","./logo.png":"cf05","./projects":"277c","./projects.js":"277c","./proyect-beerpedia.png":"1ca8","./proyect-e-wallet.png":"0eeb","./proyect-high-low.png":"5aa8","./proyect-monster-slayer.png":"c3e8","./proyect-paint.png":"02ac","./proyect-starwars.png":"b5f8"};function a(e){var t=o(e);return r(t)}function o(e){if(!r.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}a.keys=function(){return Object.keys(n)},a.resolve=o,e.exports=a,a.id="1771"},"1ca8":function(e,t,r){e.exports=r.p+"img/proyect-beerpedia.34ebacb7.png"},"21bb":function(e,t,r){"use strict";r("2dad")},"277c":function(e,t,r){"use strict";r.r(t);var n=[{title:"Starwars Catalog",desc:"a starwars catalog developed in vanilla javascript where you can search for all the characters",website:"https://renzosantamaria.github.io/Star-Wars-proyect/",github_code:"https://github.com/renzosantamaria/Star-Wars-proyect",project_img_src:"proyect-starwars.png",tecnologies:[{name:"github",tec_img_src:"tec image source github"},{name:"node",tec_img_src:"tec image source node"}]},{title:"Beerpedia",desc:"a starwars catalog developed in vanilla javascript where you can search for all the characters",website:"https://renzosantamaria.github.io/Beerpedia/",github_code:"https://github.com/renzosantamaria/Beerpedia",project_img_src:"proyect-beerpedia.png",tecnologies:[{name:"github",tec_img_src:"tec image source github"},{name:"node",tec_img_src:"tec image source node"}]},{title:"Drawing app",desc:"a starwars catalog developed in vanilla javascript where you can search for all the characters",website:"https://renzosantamaria.github.io/My-Paint-App/",github_code:"https://github.com/renzosantamaria/My-Paint-App",project_img_src:"proyect-paint.png",tecnologies:[{name:"github",tec_img_src:"tec image source github"},{name:"node",tec_img_src:"tec image source node"}]},{title:"Virtual Wallet",desc:"a starwars catalog developed in vanilla javascript where you can search for all the characters",website:"https://renzosantamaria.github.io/wallet-app/",github_code:"https://github.com/renzosantamaria/wallet-app",project_img_src:"proyect-e-wallet.png",tecnologies:[{name:"github",tec_img_src:"tec image source github"},{name:"node",tec_img_src:"tec image source node"}]},{title:"Monster Slayer",desc:"a starwars catalog developed in vanilla javascript where you can search for all the characters",website:"https://renzosantamaria.github.io/Monster-Slayer-Game-with-Vue/",github_code:"https://github.com/renzosantamaria/Monster-Slayer-Game-with-Vue",project_img_src:"proyect-monster-slayer.png",tecnologies:[{name:"github",tec_img_src:"tec image source github"},{name:"node",tec_img_src:"tec image source node"}]},{title:"High and Low card game",desc:"a starwars catalog developed in vanilla javascript where you can search for all the characters",website:"https://renzosantamaria.github.io/High-low-card-game/",github_code:"https://github.com/renzosantamaria/High-low-card-game",project_img_src:"proyect-high-low.png",tecnologies:[{name:"github",tec_img_src:"tec image source github"},{name:"node",tec_img_src:"tec image source node"}]}];t["default"]=n},"2dad":function(e,t,r){},"36e0":function(e,t,r){},"39e8":function(e,t,r){"use strict";r("153e")},4653:function(e,t,r){},"55ae":function(e,t,r){"use strict";r("ff22")},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("TheHeader"),n("section",{staticClass:"hero"},[n("video",{staticClass:"hero-video",attrs:{autoplay:"",playsinline:"",loop:"",muted:""},domProps:{muted:!0}},[n("source",{attrs:{src:r("6f01"),type:"video/mp4"}})])]),n("router-view"),n("TheFooter")],1)},o=[],c={data:function(){return{name:"tilino",lastName:"infielino"}}},i=c,s=(r("5c0b"),r("2877")),l=Object(s["a"])(i,a,o,!1,null,null,null),u=l.exports,p=(r("d3b7"),r("3ca3"),r("ddb0"),r("8c4f")),d=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("main",[r("div",{staticClass:"main-content"},[r("KnowledgeSection"),r("hr"),r("ProjectsSection")],1)])},f=[],h={},g=h,m=(r("21bb"),Object(s["a"])(g,d,f,!1,null,null,null)),b=m.exports;n["a"].use(p["a"]);var _=[{path:"/",name:"Home",component:b},{path:"/about",name:"About",component:function(){return r.e("about").then(r.bind(null,"f820"))}}],v=new p["a"]({mode:"history",base:"/portfolio/",routes:_}),y=v,w=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"header-wrapper"},[r("h1",[e._v("Renzo")]),r("nav",[r("router-link",{attrs:{to:"/"}},[e._v("Home")]),r("router-link",{attrs:{to:"/about"}},[e._v("About")])],1)])},j=[],x={},k=x,C=(r("0b0a"),Object(s["a"])(k,w,j,!1,null,null,null)),E=C.exports,O=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},S=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("footer",[r("h1",[e._v("Hello, I'm a footer!")])])}],P={},T=P,M=(r("f494"),Object(s["a"])(T,O,S,!1,null,null,null)),$=M.exports,z=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",{staticClass:"projects"},[e._m(0),e._m(1),r("ul",e._l(e.projects,(function(e){return r("li",{key:e.title},[r("ProjectCard",{attrs:{title:e.title,projectImg:e.project_img_src,link_website:e.website,link_code:e.github_code,desc:e.desc}})],1)})),0)])},B=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"sub-title-box front"},[r("h1",[e._v("MY PROJECTS")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"sub-title-box behind"},[r("h1",[e._v("MY PROJECTS")])])}],A=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("article",{staticClass:"project-card"},[n("div",{staticClass:"card-side front"},[n("h1",[e._v(e._s(e.title))]),n("img",{attrs:{src:r("1771")("./"+e.projectImg),alt:"picture of a proyect!"}}),n("p",[e._v(e._s(e.desc))])]),n("div",{staticClass:"card-side back"},[n("BaseButton",{staticClass:"button",attrs:{link:e.link_website}},[e._v("See the project")]),n("BaseButton",{staticClass:"button",attrs:{link:e.link_code}},[e._v("See the code")])],1)])},H=[],N={props:["title","projectImg","link_website","link_code","desc"],computed:{}},L=N,I=(r("39e8"),Object(s["a"])(L,A,H,!1,null,null,null)),D=I.exports,F={components:{ProjectCard:D},computed:{projects:function(){return this.$store.getters.getProjects}}},J=F,U=(r("0015"),Object(s["a"])(J,z,B,!1,null,null,null)),K=U.exports,R=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},V=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",{staticClass:"knowledge"},[r("h1",[e._v("My knowledges will be listed here")])])}],W={},Y=W,q=(r("cb5b"),Object(s["a"])(Y,R,V,!1,null,null,null)),G=q.exports,Q=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("a",{staticClass:"base-button",attrs:{href:e.link,target:"_blank"}},[e._t("default")],2)},X=[],Z={props:["link"]},ee=Z,te=(r("55ae"),Object(s["a"])(ee,Q,X,!1,null,null,null)),re=te.exports,ne=r("2f62"),ae=r("277c");n["a"].use(ne["a"]);var oe=new ne["a"].Store({state:{name:"Admin",projects:ae["default"]},mutations:{},getters:{getProjects:function(e){return e.projects}}});n["a"].config.productionTip=!1,n["a"].component("TheHeader",E),n["a"].component("TheFooter",$),n["a"].component("ProjectsSection",K),n["a"].component("KnowledgeSection",G),n["a"].component("BaseButton",re),new n["a"]({router:y,store:oe,render:function(e){return e(u)}}).$mount("#app")},"5aa8":function(e,t,r){e.exports=r.p+"img/proyect-high-low.345b8ad9.png"},"5c0b":function(e,t,r){"use strict";r("9c0c")},"65ef":function(e,t,r){},"6f01":function(e,t,r){e.exports=r.p+"media/hero-video.19df9f67.mp4"},"9c0c":function(e,t,r){},b2dc:function(e,t,r){},b5f8:function(e,t,r){e.exports=r.p+"img/proyect-starwars.bce52053.png"},c3e8:function(e,t,r){e.exports=r.p+"img/proyect-monster-slayer.9b45aa0d.png"},c4b6:function(e,t){throw new Error("Module parse failed: Unexpected character '�' (1:2)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n(Source code omitted for this binary file)")},cb5b:function(e,t,r){"use strict";r("65ef")},cf05:function(e,t,r){e.exports=r.p+"img/logo.82b9c7a5.png"},f494:function(e,t,r){"use strict";r("b2dc")},ff22:function(e,t,r){}});
//# sourceMappingURL=app.ed91a1cf.js.map