import Vue from 'vue'
import App from './App.vue'
import router from './router'

import '@/mock' // 引入mock
// 引入axios
import axios from 'axios'

// 配置axios到原型链中
Vue.prototype.$axios = axios
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
