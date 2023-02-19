import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import store from './store'
import Map from './plugins/map'

Vue.config.productionTip = false

new Vue({
  store,
  Map,
  render: h => h(App)
}).$mount('#app')
