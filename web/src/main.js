import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI);

import BootstrapVue from "bootstrap-vue";
Vue.use(BootstrapVue);

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import 'quill/dist/quill.bubble.css'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'

import "./assets/scss/style.scss";

//use swiper

if (process.env.NODE_ENV === "production") {
  var _hmt = _hmt || [];
  (function() {
    var hm = document.createElement("script");
    hm.src = "https://hm.baidu.com/hm.js?373a4e2140f4870942b2fce212526bc6";
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(hm, s);
  })();
}

//http接口请求 i axios 用于接口请求
import axios from 'axios'
Vue.prototype.$http = axios.create({
  // baseURL: process.env.VUE_APP_API_URL || 'web/api'
  baseURL: 'https://www.ieee-rcar.com/web/api'
})

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
