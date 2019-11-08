import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import router from './router/router'
import axios from '@/axios/axios'

process.env.NODE_ENV != 'production' && require('./mock/mock.js')

Vue.config.productionTip = false
Vue.prototype.$axios = axios

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
