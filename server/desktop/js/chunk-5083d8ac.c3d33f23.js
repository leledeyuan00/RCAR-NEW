(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5083d8ac"],{"11de":function(t,e,i){},"3a1f":function(t,e,i){t.exports=i.p+"img/03.cdbea4cc.png"},4874:function(t,e,i){t.exports=i.p+"media/video_01.0af7a8ae.mp4"},5171:function(t,e,i){t.exports=i.p+"img/04.43a7aa35.png"},"85a1":function(t,e,i){t.exports=i.p+"img/02.d4a6169f.png"},"8e7c":function(t,e,i){t.exports=i.p+"img/01.ffb4c371.png"},"962d":function(t,e,i){"use strict";var n=i("11de"),a=i.n(n);a.a},bb51:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"body_container home bg-white border-body"},[i("Carousel"),t._m(0),t._m(1),i("el-row",{staticClass:"row-bg",attrs:{type:"flex",justify:"space-around"}},[i("el-col",{attrs:{span:7.5}},[i("div",{staticClass:"grid-content bg-purple"})])],1),i("div",{staticClass:"mx-5 text-center"},[i("TimeTable")],1),t._m(2),i("div",{staticClass:"msg bg-white px-2"},[i("Body")],1)],1)])},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{},[n("video",{staticClass:"pt-4",attrs:{src:i("4874"),autoplay:"none",loop:"loop",controls:"controls",width:"100%"}},[t._v("请更新你的浏览器到最新版本")]),n("div",{staticClass:"text-grey py-1 border-bottom"},[t._v("RCAR 2020 Welcome. Part of video comes from youtube . Thanks to the author.")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("h4",{staticClass:"pt-2 text-center"},[t._v("\n      Important Dates\n      "),i("i",{staticClass:"el-icon-date el-icon--right"})])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("h4",{staticClass:"py-2 text-center border-top"},[t._v("\n      Welcome Message\n      "),i("i",{staticClass:"el-icon-magic-stick el-icon--right"})])}],s=i("2b0e"),o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("b-carousel",{staticStyle:{"text-shadow":"0px 0px 2px #000"},attrs:{id:"carousel",controls:"",fade:"",indicators:"","img-width":"1280","img-height":"720"}},t._l(t.img_list,(function(t,e){return i("div",{key:e},[i("b-carousel-slide",{attrs:{caption:t.msg,"img-src":t.src}})],1)})),0)],1)},r=[],l=i("dcb3"),c={SPACE:32,ENTER:13,ESC:27,LEFT:37,UP:38,RIGHT:39,DOWN:40,PAGEUP:33,PAGEDOWN:34,HOME:36,END:35,TAB:9,SHIFT:16,CTRL:17,BACKSPACE:8,ALT:18,PAUSE:19,BREAK:19,INSERT:45,INS:45,DELETE:46},u=c,d=function(){},h=d,p=i("906c"),f=i("686b");function m(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function b(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?m(i,!0).forEach((function(e){v(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):m(i).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function v(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var g=function(t,e,i){if(t=t?t.$el||t:null,!Object(p["e"])(t))return null;if(Object(f["b"])("observeDom"))return null;var n=new p["a"]((function(t){for(var i=!1,n=0;n<t.length&&!i;n++){var a=t[n],s=a.type,o=a.target;"characterData"===s&&o.nodeType===Node.TEXT_NODE?i=!0:"attributes"===s?i=!0:"childList"===s&&(a.addedNodes.length>0||a.removedNodes.length>0)&&(i=!0)}i&&e()}));return n.observe(t,b({childList:!0,subtree:!0},i)),n},_=g,y=i("228e"),S=i("938d"),x=i("7b1e"),w={props:{id:{type:String,default:null}},data:function(){return{localId_:null}},computed:{safeId:function(){var t=this.id||this.localId_,e=function(e){return t?(e=String(e||"").replace(/\s+/g,"_"),e?t+"_"+e:t):null};return e}},mounted:function(){var t=this;this.$nextTick((function(){t.localId_="__BVID__".concat(t._uid)}))}},E=i("365c"),C=i("2326"),j={methods:{hasNormalizedSlot:function(t){return Object(E["a"])(t,this.$scopedSlots,this.$slots)},normalizeSlot:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=Object(E["b"])(t,e,this.$scopedSlots,this.$slots);return i?Object(C["a"])(i):i}}},T="BCarousel",O={next:{dirClass:"carousel-item-left",overlayClass:"carousel-item-next"},prev:{dirClass:"carousel-item-right",overlayClass:"carousel-item-prev"}},k=650,I=500,P=40,D={TOUCH:"touch",PEN:"pen"},B={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"otransitionend oTransitionEnd",transition:"transitionend"},A={passive:!0,capture:!1},N=function(t){for(var e in B)if(!Object(x["e"])(t.style[e]))return B[e];return null},$=l["a"].extend({name:T,mixins:[w,j],provide:function(){return{bvCarousel:this}},model:{prop:"value",event:"input"},props:{labelPrev:{type:String,default:function(){return Object(y["a"])(T,"labelPrev")}},labelNext:{type:String,default:function(){return Object(y["a"])(T,"labelNext")}},labelGotoSlide:{type:String,default:function(){return Object(y["a"])(T,"labelGotoSlide")}},labelIndicators:{type:String,default:function(){return Object(y["a"])(T,"labelIndicators")}},interval:{type:Number,default:5e3},indicators:{type:Boolean,default:!1},controls:{type:Boolean,default:!1},noAnimation:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},noWrap:{type:Boolean,default:!1},noTouch:{type:Boolean,default:!1},noHoverPause:{type:Boolean,default:!1},imgWidth:{type:[Number,String]},imgHeight:{type:[Number,String]},background:{type:String},value:{type:Number,default:0}},data:function(){return{index:this.value||0,isSliding:!1,transitionEndEvent:null,slides:[],direction:null,isPaused:!(parseInt(this.interval,10)>0),touchStartX:0,touchDeltaX:0}},computed:{numSlides:function(){return this.slides.length}},watch:{value:function(t,e){t!==e&&this.setSlide(parseInt(t,10)||0)},interval:function(t,e){t!==e&&(t?(this.pause(!0),this.start(!1)):this.pause(!1))},isPaused:function(t,e){t!==e&&this.$emit(t?"paused":"unpaused")},index:function(t,e){t===e||this.isSliding||this.doSlide(t,e)}},created:function(){this._intervalId=null,this._animationTimeout=null,this._touchTimeout=null,this.isPaused=!(parseInt(this.interval,10)>0)},mounted:function(){this.transitionEndEvent=N(this.$el)||null,this.updateSlides(),_(this.$refs.inner,this.updateSlides.bind(this),{subtree:!1,childList:!0,attributes:!0,attributeFilter:["id"]})},beforeDestroy:function(){clearTimeout(this._animationTimeout),clearTimeout(this._touchTimeout),clearInterval(this._intervalId),this._intervalId=null,this._animationTimeout=null,this._touchTimeout=null},methods:{setSlide:function(t){var e=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(!(S["j"]&&document.visibilityState&&document.hidden)){var n=this.noWrap,a=this.numSlides;t=Math.floor(t),0!==a&&(this.isSliding?this.$once("sliding-end",(function(){return e.setSlide(t,i)})):(this.direction=i,this.index=t>=a?n?a-1:0:t<0?n?0:a-1:t,n&&this.index!==t&&this.index!==this.value&&this.$emit("input",this.index)))}},prev:function(){this.setSlide(this.index-1,"prev")},next:function(){this.setSlide(this.index+1,"next")},pause:function(t){t||(this.isPaused=!0),this._intervalId&&(clearInterval(this._intervalId),this._intervalId=null)},start:function(t){t||(this.isPaused=!1),this._intervalId&&(clearInterval(this._intervalId),this._intervalId=null),this.interval&&this.numSlides>1&&(this._intervalId=setInterval(this.next,Math.max(1e3,this.interval)))},restart:function(t){this.$el.contains(document.activeElement)||this.start()},doSlide:function(t,e){var i=this,n=Boolean(this.interval),a=this.calcDirection(this.direction,e,t),s=a.overlayClass,o=a.dirClass,r=this.slides[e],l=this.slides[t];if(r&&l){if(this.isSliding=!0,n&&this.pause(!1),this.$emit("sliding-start",t),this.$emit("input",this.index),this.noAnimation)Object(p["b"])(l,"active"),Object(p["g"])(r,"active"),this.isSliding=!1,this.$nextTick((function(){return i.$emit("sliding-end",t)}));else{Object(p["b"])(l,s),Object(p["f"])(l),Object(p["b"])(r,o),Object(p["b"])(l,o);var c=!1,u=function e(n){if(!c){if(c=!0,i.transitionEndEvent){var a=i.transitionEndEvent.split(/\s+/);a.forEach((function(t){return Object(p["c"])(r,t,e,A)}))}i._animationTimeout=null,Object(p["g"])(l,o),Object(p["g"])(l,s),Object(p["b"])(l,"active"),Object(p["g"])(r,"active"),Object(p["g"])(r,o),Object(p["g"])(r,s),Object(p["j"])(r,"aria-current","false"),Object(p["j"])(l,"aria-current","true"),Object(p["j"])(r,"aria-hidden","true"),Object(p["j"])(l,"aria-hidden","false"),i.isSliding=!1,i.direction=null,i.$nextTick((function(){return i.$emit("sliding-end",t)}))}};if(this.transitionEndEvent){var d=this.transitionEndEvent.split(/\s+/);d.forEach((function(t){return Object(p["d"])(r,t,u,A)}))}this._animationTimeout=setTimeout(u,k)}n&&this.start(!1)}},updateSlides:function(){this.pause(!0),this.slides=Object(p["i"])(".carousel-item",this.$refs.inner);var t=this.slides.length,e=Math.max(0,Math.min(Math.floor(this.index),t-1));this.slides.forEach((function(i,n){var a=n+1;n===e?(Object(p["b"])(i,"active"),Object(p["j"])(i,"aria-current","true")):(Object(p["g"])(i,"active"),Object(p["j"])(i,"aria-current","false")),Object(p["j"])(i,"aria-posinset",String(a)),Object(p["j"])(i,"aria-setsize",String(t))})),this.setSlide(e),this.start(this.isPaused)},calcDirection:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;return t?O[t]:i>e?O.next:O.prev},handleClick:function(t,e){var i=t.keyCode;"click"!==t.type&&i!==u.SPACE&&i!==u.ENTER||(t.preventDefault(),t.stopPropagation(),e())},handleSwipe:function(){var t=Math.abs(this.touchDeltaX);if(!(t<=P)){var e=t/this.touchDeltaX;this.touchDeltaX=0,e>0?this.prev():e<0&&this.next()}},touchStart:function(t){S["f"]&&D[t.pointerType.toUpperCase()]?this.touchStartX=t.clientX:S["f"]||(this.touchStartX=t.touches[0].clientX)},touchMove:function(t){t.touches&&t.touches.length>1?this.touchDeltaX=0:this.touchDeltaX=t.touches[0].clientX-this.touchStartX},touchEnd:function(t){S["f"]&&D[t.pointerType.toUpperCase()]&&(this.touchDeltaX=t.clientX-this.touchStartX),this.handleSwipe(),this.pause(!1),this._touchTimeout&&clearTimeout(this._touchTimeout),this._touchTimeout=setTimeout(this.start,I+Math.max(1e3,this.interval))}},render:function(t){var e=this,i=t("div",{ref:"inner",class:["carousel-inner"],attrs:{id:this.safeId("__BV_inner_"),role:"list"}},[this.normalizeSlot("default")]),n=t();if(this.controls){var a=function(t){e.isSliding?t.preventDefault():e.handleClick(t,e.prev)},s=function(t){e.isSliding?t.preventDefault():e.handleClick(t,e.next)};n=[t("a",{class:["carousel-control-prev"],attrs:{href:"#",role:"button","aria-controls":this.safeId("__BV_inner_"),"aria-disabled":this.isSliding?"true":null},on:{click:a,keydown:a}},[t("span",{class:["carousel-control-prev-icon"],attrs:{"aria-hidden":"true"}}),t("span",{class:["sr-only"]},[this.labelPrev])]),t("a",{class:["carousel-control-next"],attrs:{href:"#",role:"button","aria-controls":this.safeId("__BV_inner_"),"aria-disabled":this.isSliding?"true":null},on:{click:s,keydown:s}},[t("span",{class:["carousel-control-next-icon"],attrs:{"aria-hidden":"true"}}),t("span",{class:["sr-only"]},[this.labelNext])])]}var o=t("ol",{class:["carousel-indicators"],directives:[{name:"show",rawName:"v-show",value:this.indicators,expression:"indicators"}],attrs:{id:this.safeId("__BV_indicators_"),"aria-hidden":this.indicators?"false":"true","aria-label":this.labelIndicators,"aria-owns":this.safeId("__BV_inner_")}},this.slides.map((function(i,n){return t("li",{key:"slide_".concat(n),class:{active:n===e.index},attrs:{role:"button",id:e.safeId("__BV_indicator_".concat(n+1,"_")),tabindex:e.indicators?"0":"-1","aria-current":n===e.index?"true":"false","aria-label":"".concat(e.labelGotoSlide," ").concat(n+1),"aria-describedby":e.slides[n].id||null,"aria-controls":e.safeId("__BV_inner_")},on:{click:function(t){e.handleClick(t,(function(){e.setSlide(n)}))},keydown:function(t){e.handleClick(t,(function(){e.setSlide(n)}))}}})}))),r={mouseenter:this.noHoverPause?h:this.pause,mouseleave:this.noHoverPause?h:this.restart,focusin:this.pause,focusout:this.restart,keydown:function(t){if(!/input|textarea/i.test(t.target.tagName)){var i=t.keyCode;i!==u.LEFT&&i!==u.RIGHT||(t.preventDefault(),t.stopPropagation(),e[i===u.LEFT?"prev":"next"]())}}};return!this.noTouch&&S["h"]&&(S["f"]?(r["&pointerdown"]=this.touchStart,r["&pointerup"]=this.touchEnd):(r["&touchstart"]=this.touchStart,r["&touchmove"]=this.touchMove,r["&touchend"]=this.touchEnd)),t("div",{staticClass:"carousel",class:{slide:!this.noAnimation,"carousel-fade":!this.noAnimation&&this.fade,"pointer-event":!this.noTouch&&S["h"]&&S["f"]},style:{background:this.background},attrs:{role:"region",id:this.safeId(),"aria-busy":this.isSliding?"true":"false"},on:r},[i,n,o])}}),H=i("8690"),R=i("4918"),X={imgSrc:{type:String},imgAlt:{type:String},imgWidth:{type:[Number,String]},imgHeight:{type:[Number,String]},imgBlank:{type:Boolean,default:!1},imgBlankColor:{type:String,default:"transparent"},contentVisibleUp:{type:String},contentTag:{type:String,default:"div"},caption:{type:String},captionHtml:{type:String},captionTag:{type:String,default:"h3"},text:{type:String},textHtml:{type:String},textTag:{type:String,default:"p"},background:{type:String}},W=l["a"].extend({name:"BCarouselSlide",mixins:[w,j],inject:{bvCarousel:{default:function(){return{noTouch:!0}}}},props:X,computed:{contentClasses:function(){return[this.contentVisibleUp?"d-none":"",this.contentVisibleUp?"d-".concat(this.contentVisibleUp,"-block"):""]},computedWidth:function(){return this.imgWidth||this.bvCarousel.imgWidth||null},computedHeight:function(){return this.imgHeight||this.bvCarousel.imgHeight||null}},render:function(t){var e=!this.bvCarousel.noTouch&&S["h"],i=this.normalizeSlot("img");i||!this.imgSrc&&!this.imgBlank||(i=t(R["a"],{props:{fluidGrow:!0,block:!0,src:this.imgSrc,blank:this.imgBlank,blankColor:this.imgBlankColor,width:this.computedWidth,height:this.computedHeight,alt:this.imgAlt},on:e?{dragstart:function(t){t.preventDefault()}}:{}})),i||(i=t());var n=t(),a=[!(!this.caption&&!this.captionHtml)&&t(this.captionTag,{domProps:Object(H["a"])(this.captionHtml,this.caption)}),!(!this.text&&!this.textHtml)&&t(this.textTag,{domProps:Object(H["a"])(this.textHtml,this.text)}),this.normalizeSlot("default")||!1];return a.some(Boolean)&&(n=t(this.contentTag,{staticClass:"carousel-caption",class:this.contentClasses},a.map((function(e){return e||t()})))),t("div",{staticClass:"carousel-item",style:{background:this.background||this.bvCarousel.background||null},attrs:{id:this.safeId(),role:"listitem"}},[i,n])}}),M=i("3790"),V=Object(M["a"])({components:{BCarousel:$,BCarouselSlide:W}});s["default"].use(V);var F={data:function(){return{img_list:[{src:i("8e7c"),msg:""},{src:i("85a1"),msg:""},{src:i("3a1f"),msg:""},{src:i("5171"),msg:""}]}}},z=F,U=i("2877"),L=Object(U["a"])(z,o,r,!1,null,null,null),G=L.exports,J=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},q=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"fs-xl"},[i("p",[t._v("Welcome to Asahikawa. The 2020 IEEE International Conference on Real-time Computing and Robotics (IEEE RCAR 2020) will take place from August 2 to 6, 2020 in Asahikawa, Japan. The objective of this conference is to provide a forum for researchers in robotics and real-time computing to share the latest results and to explore the opportunity of research collaboration. With wide applications of robots in industry and services sectors, real-time computing plays one of the major roles in various topics in robotics including real-time control, human-robot interactions, sensor perception and fusion, robot intelligence, etc. The scope of IEEE RCAR 2020 covers research, development and applications in the dynamic and exciting areas of real-time computing and robotics.")]),i("p",[i("span",{staticClass:"phead fw-xxl text-red"},[t._v("Contributed Papers:")]),t._v(" Original papers are solicited in all related areas of robotics, mechatronics, control engineering. Full papers must be submitted in PDF format prepared strictly following the requirements for creating PDF documents. The conference proceedings will be submitted to the IEEE Xplore® digital library.\n  ")]),i("p",[i("span",{staticClass:"phead fw-xxl text-red"},[t._v("Tutorials & Workshops:")]),t._v(" Proposals for tutorials and workshops addressing new topics related to robotics and real-time computing are invited for submission to the T/W chairs.\n  ")]),i("p",[i("span",{staticClass:"phead fw-xxl text-red"},[t._v("Journal Publications:")]),t._v(" Expanded versions of the accepted and presented papers with high quality will be invited for publication in the RCAR 2020 special issues in the selected leading international journals.\n  ")]),i("p",{staticClass:"fw-xxl phead"},[t._v("Areas and topics of contributed papers include but are not limited to the following:")]),i("div",{staticClass:"pl-4"},[i("p",[t._v("• robotics and intelligent mechatronics systems;")]),i("p",[t._v("• sensing, perception and control theories and their applications;")]),i("p",[t._v("• real-time imaging, image/video processing and their applications;")]),i("p",[t._v("• selected frontier areas, such as soft robotics, artificial intelligence, computational biomechanics, etc, and their applications.")])]),i("p",[t._v("Asahikawa, located in the center of Hokkaido is the island‘s second largest city after Sapporo with a population over 350,000. Before the colonization of Hokkaido, Asahikawa was an important center of Ainu culture reflected in its museums and festivals. Asahikawa has a humid continental climate. In winter, it is well known as the most coolest city in Japan. Summers in this city are generally warm but not humid. This city is surrounded by the largest national park of Japan (Daisetsuzan National Park). Near Asahikawa there are also some picturesque rolling fields of summer flowers including Furano and Biei. Many tourists choose Asahikawa as the base to explore the other parts of Hokkaido island. .")]),i("p",[t._v("IEEE RCAR 2020 promises to be a great event for all participants, with excellent technical and social programs.")])])}],K={},Q=K,Y=(i("ed04"),Object(U["a"])(Q,J,q,!1,null,null,null)),Z=Y.exports,tt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"table"},[i("el-table",{attrs:{data:t.tableData,"row-class-name":t.tableRowClassName,"show-header":!1}},[i("el-table-column",{attrs:{prop:"info","min-width":"400"}}),i("el-table-column",{attrs:{prop:"date","min-width":"100"}})],1)],1)},et=[],it={methods:{tableRowClassName:function(t){var e=t.rowIndex;return 1===e?"warning-row":3===e?"success-row":""}},data:function(){return{tableData:[{date:"Dec.31,2019",info:"Submission of papers"},{date:"Dec.31,2019",info:"Submission of organized session/workshop"},{date:"Feb.20,2020",info:"Notificationof acceptance"},{date:"Mar.20,2020",info:"Final paper submission"},{date:"May.1,2020",info:"Early bird registration"}]}}},nt=it,at=(i("962d"),Object(U["a"])(nt,tt,et,!1,null,null,null)),st=at.exports,ot=i("bdc5");s["default"].use(ot["a"]);var rt={name:"home",components:{Carousel:G,Body:Z,TimeTable:st}},lt=rt,ct=(i("cccb"),Object(U["a"])(lt,n,a,!1,null,null,null));e["default"]=ct.exports},cccb:function(t,e,i){"use strict";var n=i("d563"),a=i.n(n);a.a},d563:function(t,e,i){},ed04:function(t,e,i){"use strict";var n=i("f06f"),a=i.n(n);a.a},f06f:function(t,e,i){}}]);
//# sourceMappingURL=chunk-5083d8ac.c3d33f23.js.map