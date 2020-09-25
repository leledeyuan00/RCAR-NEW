import "bootstrap/dist/css/bootstrap.css";
import Vue from "vue";
import App from "./App.vue";
import "./plugins/element.js";
import router from "./router";

// import 'quill/dist/quill.bubble.css'
// import 'quill/dist/quill.core.css'
// import 'quill/dist/quill.snow.css'

import "./assets/scss/style.scss";

Vue.config.productionTip = false;

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

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
