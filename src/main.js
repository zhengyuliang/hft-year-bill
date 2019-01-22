import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import echarts from 'echarts'
import './global.scss'

Vue.config.productionTip = false;
Vue.prototype.$echarts = echarts
document.body.addEventListener('blur',function () {
  window.scrollTo(0, 0);
}, true);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')