(function(t){function e(e){for(var n,s,i=e[0],l=e[1],c=e[2],u=0,p=[];u<i.length;u++)s=i[u],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&p.push(r[s][0]),r[s]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);f&&f(e);while(p.length)p.shift()();return o.push.apply(o,c||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],n=!0,s=1;s<a.length;s++){var i=a[s];0!==r[i]&&(n=!1)}n&&(o.splice(e--,1),t=l(l.s=a[0]))}return t}var n={},s={app:0},r={app:0},o=[];function i(t){return l.p+"js/"+({about:"about"}[t]||t)+"."+{about:"dc68159d"}[t]+".js"}function l(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.e=function(t){var e=[],a={about:1};s[t]?e.push(s[t]):0!==s[t]&&a[t]&&e.push(s[t]=new Promise((function(e,a){for(var n="css/"+({about:"about"}[t]||t)+"."+{about:"382f2919"}[t]+".css",r=l.p+n,o=document.getElementsByTagName("link"),i=0;i<o.length;i++){var c=o[i],u=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(u===n||u===r))return e()}var p=document.getElementsByTagName("style");for(i=0;i<p.length;i++){c=p[i],u=c.getAttribute("data-href");if(u===n||u===r)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var n=e&&e.target&&e.target.src||r,o=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=n,delete s[t],f.parentNode.removeChild(f),a(o)},f.href=r;var b=document.getElementsByTagName("head")[0];b.appendChild(f)})).then((function(){s[t]=0})));var n=r[t];if(0!==n)if(n)e.push(n[2]);else{var o=new Promise((function(e,a){n=r[t]=[e,a]}));e.push(n[2]=o);var c,u=document.createElement("script");u.charset="utf-8",u.timeout=120,l.nc&&u.setAttribute("nonce",l.nc),u.src=i(t);var p=new Error;c=function(e){u.onerror=u.onload=null,clearTimeout(f);var a=r[t];if(0!==a){if(a){var n=e&&("load"===e.type?"missing":e.type),s=e&&e.target&&e.target.src;p.message="Loading chunk "+t+" failed.\n("+n+": "+s+")",p.name="ChunkLoadError",p.type=n,p.request=s,a[1](p)}r[t]=void 0}};var f=setTimeout((function(){c({type:"timeout",target:u})}),12e4);u.onerror=u.onload=c,document.head.appendChild(u)}return Promise.all(e)},l.m=t,l.c=n,l.d=function(t,e,a){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)l.d(a,n,function(e){return t[e]}.bind(null,n));return a},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/mobile/",l.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var p=0;p<c.length;p++)e(c[p]);var f=u;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"2b17":function(t,e,a){t.exports=a.p+"img/03-f.cdbea4cc.png"},"3ad5":function(t,e,a){t.exports=a.p+"img/04-f.43a7aa35.png"},"52d3":function(t,e,a){t.exports=a.p+"img/01-f.ffb4c371.png"},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"topbar"},[n("b-navbar",{staticClass:"background",attrs:{toggleable:"lg",type:"dark",variant:"info"}},[n("b-navbar-brand",{attrs:{href:"./"}},[n("img",{staticClass:"d-inline-block align-top",staticStyle:{"max-width":"35px"},attrs:{src:a("cf05")}})]),n("span",{staticClass:"text-white fs-xxl"},[t._v("IEEE RCAR 2020")]),n("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),n("b-collapse",{staticClass:"fs-xl",attrs:{id:"nav-collapse","is-nav":""}},[n("b-navbar-nav",{staticClass:"m-auto"},[n("b-nav-item",{attrs:{href:"./"}},[t._v("Home")])],1),n("b-navbar-nav",{staticClass:"m-auto"},[n("b-nav-item",{attrs:{href:"#"}},[t._v("Committee")])],1),n("b-navbar-nav",{staticClass:"m-auto"},[n("b-nav-item-dropdown",{attrs:{text:"Program",left:""}},[n("b-dropdown-item",{attrs:{href:"#"}},[t._v("Program at a Glance")]),n("b-dropdown-item",{attrs:{href:"#"}},[t._v("Invited Speakers")]),n("b-dropdown-item",{attrs:{href:"#"}},[t._v("Tutorials & Workshops")])],1)],1),n("b-navbar-nav",{staticClass:"m-auto"},[n("b-nav-item",{attrs:{href:"#"}},[t._v("Call for Papers")])],1),n("b-navbar-nav",{staticClass:"m-auto"},[n("b-nav-item-dropdown",{attrs:{text:"Submission",left:""}},[n("b-dropdown-item",{attrs:{href:"#"}},[t._v("Final Submission")]),n("b-dropdown-item",{attrs:{href:"#"}},[t._v("Initial Submission")])],1)],1),n("b-navbar-nav",{staticClass:"m-auto"},[n("b-nav-item",{attrs:{href:"#"}},[t._v("Registration")])],1),n("b-navbar-nav",{staticClass:"m-auto"},[n("b-nav-item-dropdown",{attrs:{text:"Venue",left:""}},[n("b-dropdown-item",{attrs:{href:"#"}},[t._v("Conference Venue")]),n("b-dropdown-item",{attrs:{href:"#"}},[t._v("Accommodation")]),n("b-dropdown-item",{attrs:{href:"#"}},[t._v("About Asahikawa")])],1)],1),n("b-navbar-nav",{staticClass:"m-auto"},[n("b-nav-item",{attrs:{href:"./#/history"}},[t._v("History")])],1)],1)],1)],1),n("div",{staticClass:"text-white fs-xl bg-info text-center pt-1",staticStyle:{margin:"auto",height:"25px"}},[t._v("August 2-6, 2020, Asahikawa, Japan")]),n("router-view")],1)},r=[],o={},i=o,l=(a("5c0b"),a("2877")),c=Object(l["a"])(i,s,r,!1,null,null,null),u=c.exports,p=(a("d3b7"),a("8c4f")),f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("Carousel"),n("Table"),n("Welcom"),n("img",{staticClass:"w-100",attrs:{src:a("6edb"),alt:""}})],1)},b=[],d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{},[n("swiper",[n("swiper-slide",[n("video",{staticClass:"w-100",attrs:{src:a("67b4"),autoplay:"none",loop:"loop",controls:"controls"}},[t._v("请更新你的浏览器到最新版本")])]),n("swiper-slide",[n("img",{staticClass:"w-100",attrs:{height:"auto",src:a("52d3"),alt:""}})]),n("swiper-slide",[n("img",{staticClass:"w-100",attrs:{height:"auto",src:a("da36"),alt:""}})]),n("swiper-slide",[n("img",{staticClass:"w-100",attrs:{height:"auto",src:a("2b17"),alt:""}})]),n("swiper-slide",[n("img",{staticClass:"w-100",attrs:{height:"auto",src:a("3ad5"),alt:""}})])],1)],1)},v=[],h=(a("dfa4"),a("7212")),m={name:"block",components:{swiper:h["swiper"],swiperSlide:h["swiperSlide"]},data:function(){return{video1:a("67b4")}}},g=m,w=Object(l["a"])(g,d,v,!1,null,null,null),C=w.exports,x=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("b-table-simple",{attrs:{hover:"",large:"","caption-top":"",responsive:""}},[a("colgroup",[a("col"),a("col")]),a("b-thead",{staticClass:"bg-main-1"},[a("b-tr",[a("b-th",{staticClass:"text-center fs-xl",attrs:{colspan:"7"}},[t._v("Important Time"),a("i",{staticClass:"el-icon-date pl-2"})])],1)],1),a("b-tbody",{staticClass:"fs-xl"},[a("b-tr",{staticClass:"bg-light"},[a("b-th",{staticClass:"text-left fw-s",attrs:{colspan:"4",rowspan:"1"}},[t._v("Submission of papers")]),a("b-th",{staticClass:"text-center fw-s"},[t._v("Dec.31,2019")])],1),a("b-tr",{staticClass:"bg-light"},[a("b-th",{staticClass:"text-left fw-s",attrs:{colspan:"4",rowspan:"1"}},[t._v("Submission of organized session/workshop")]),a("b-th",{staticClass:"text-center fw-s"},[t._v("Dec.31,2019")])],1),a("b-tr",{staticClass:"bg-light"},[a("b-th",{staticClass:"text-left fw-s",attrs:{colspan:"4",rowspan:"1"}},[t._v("Notificationof acceptance")]),a("b-th",{staticClass:"text-center fw-s"},[t._v("Feb.20,2020")])],1),a("b-tr",{staticClass:"bg-light"},[a("b-th",{staticClass:"text-left fw-s",attrs:{colspan:"4",rowspan:"1"}},[t._v("Final paper submission")]),a("b-th",{staticClass:"text-center fw-s"},[t._v("Mar.20,2020")])],1),a("b-tr",{staticClass:"bg-light"},[a("b-th",{staticClass:"text-left fw-s",attrs:{colspan:"4",rowspan:"1"}},[t._v("Early bird registration")]),a("b-th",{staticClass:"text-center fw-s"},[t._v("May.1,2020")])],1)],1)],1)],1)},A=[],y={},E=y,j=Object(l["a"])(E,x,A,!1,null,null,null),O=j.exports,k=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},S=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"head-bar"},[t._v("Welcome to Asahikawa "),a("i",{staticClass:"el-icon-magic-stick pl-2"})]),a("div",{staticClass:"fs-xl bg-light px-2"},[a("p",[t._v("The 2020 IEEE International Conference on Real-time Computing and Robotics (IEEE RCAR 2020) will take place from August 2 to 6, 2020 in Asahikawa, Japan.")]),a("p",[t._v("The objective of this conference is to provide a forum for researchers in robotics and real-time computing to share the latest results and to explore the opportunity of research collaboration.")]),a("p",[t._v(" With wide applications of robots in industry and services sectors, real-time computing plays one of the major roles in various topics in robotics including real-time control, human-robot interactions, sensor perception and fusion, robot intelligence, etc. ")]),a("p",[t._v("The scope of IEEE RCAR 2020 covers research, development and applications in the dynamic and exciting areas of real-time computing and robotics.")])])])}],P={},I=P,H=Object(l["a"])(I,k,S,!1,null,null,null),T=H.exports,D={name:"home",components:{Carousel:C,Table:O,Welcom:T}},M=D,U=Object(l["a"])(M,f,b,!1,null,null,null),B=U.exports;n["default"].use(p["a"]);var J=[{path:"/",name:"home",component:B},{path:"/history",name:"history",component:function(){return a.e("about").then(a.bind(null,"e4bb"))}}],N=new p["a"]({mode:"hash",base:"/mobile/",routes:J}),R=N,Q=a("5c96"),L=a.n(Q),q=(a("0fae"),a("5f5b"));a("f9e3"),a("2dd8"),a("78a7");n["default"].use(L.a),n["default"].use(q["a"]);(function(){var t=document.createElement("script");t.src="https://hm.baidu.com/hm.js?373a4e2140f4870942b2fce212526bc6";var e=document.getElementsByTagName("script")[0];e.parentNode.insertBefore(t,e)})(),n["default"].config.productionTip=!1,new n["default"]({router:R,render:function(t){return t(u)}}).$mount("#app")},"5c0b":function(t,e,a){"use strict";var n=a("9c0c"),s=a.n(n);s.a},"67b4":function(t,e,a){t.exports=a.p+"media/video_01.0af7a8ae.mp4"},"6edb":function(t,e,a){t.exports=a.p+"img/committee_logo.b74fafb1.png"},"78a7":function(t,e,a){},"9c0c":function(t,e,a){},cf05:function(t,e){t.exports="data:image/png;base64,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"},da36:function(t,e,a){t.exports=a.p+"img/02-f.d4a6169f.png"}});
//# sourceMappingURL=app.6d042bc1.js.map