// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from './axios/axios.js';
import qs from 'qs';
import echarts from 'echarts'
import * as d3 from 'd3'

Vue.config.productionTip = false
Vue.prototype.axios = axios;
Vue.prototype.$echarts = echarts;
Vue.prototype.$d3 = d3;
Vue.use(ElementUI);

if (window.innerWidth > 756) {
  var basePercent = "100%"
  var baseWidthRate = window.innerWidth / 1920;
  var baseHeightRate = window.innerHeight / 1080;
  var baseScreenRate = (baseWidthRate > baseHeightRate) ? baseHeightRate : baseWidthRate;
  Vue.prototype.baseScreenRate = baseScreenRate;
} else {
  var basePercent = "100%"
  var baseWidthRate = window.innerWidth / 750;
  document.documentElement.style.fontSize = 100 * baseWidthRate + 'px';
  Vue.prototype.baseScreenRate = baseWidthRate;
}

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
