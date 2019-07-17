import Vue from 'vue'
import App from './App.vue'
import router from './router/index'

import './icons'
import './plugins/element.js'
import store from './store/index'

import './permission'
import vPermission from './directive/permission'

Vue.directive('permission', vPermission)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
