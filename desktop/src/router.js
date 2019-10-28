import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Main from './views/Main.vue'
Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: Main
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})

var browser={
  versions:function(){
      var u = navigator.userAgent, app = navigator.appVersion;
      return {
          trident: u.indexOf('Trident') > -1, //IE内核
          presto: u.indexOf('Presto') > -1, //opera内核
          webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
          gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1,//火狐内核
          mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
          ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
          android: u.indexOf('Android') > -1 || u.indexOf('Adr') > -1, //android终端
          iPhone: u.indexOf('iPhone') > -1 , //是否为iPhone或者QQHD浏览器
          iPad: u.indexOf('iPad') > -1, //是否iPad
          webApp: u.indexOf('Safari') == -1, //是否web应该程序，没有头部与底部
          weixin: u.indexOf('MicroMessenger') > -1, //是否微信 （2015-01-22新增）
          qq: u.match(/\sQQ/i) == " qq" //是否QQ
      };
  }(),
  language:(navigator.browserLanguage || navigator.language).toLowerCase()
}

router.beforeEach((to, from ,next) => {
  var result = window.location.toString();
    	if ( result.indexOf("?onpc") == -1){
    		var browser = {
    			versions: function () {
    				var u = navigator.userAgent, app = navigator.appVersion;
    				return {//移动终端浏览器版本信息
    					trident: u.indexOf('Trident') > -1, //IE内核
    					presto: u.indexOf('Presto') > -1, //opera内核
    					webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
    					gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核
    					mobile: !!u.match(/AppleWebKit.*Mobile.*/) || !!u.match(/AppleWebKit/), //是否为移动终端
    					ios: !!u.match(/i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
    					android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或者uc浏览器
    					iPhone: u.indexOf('iPhone') > -1 || (u.indexOf('Mac') > -1 && u.indexOf('Macintosh') < 0), //是否为iPhone或者QQHD浏览器
    					iPad: u.indexOf('iPad') > -1, //是否iPad
    					webApp: u.indexOf('Safari') == -1 //是否web应该程序，没有头部与底部
    				};
    			}(),
    			language: (navigator.browserLanguage || navigator.language).toLowerCase()
    		}
    		if (!browser.versions.iPad) {
    			if (browser.versions.android || browser.versions.iPhone) {
              console.log(location.hostname + (location.port?":"+location.port :'') + "/mobile")
    					self.location = location.hostname + (location.port?":"+location.port :'') + "/mobile"; //你要变成移动端的地址
    				
    			}
    		}
    	}
  next();
})



export default router