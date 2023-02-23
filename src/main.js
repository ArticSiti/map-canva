import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import store from './store'
// import Map from './plugins/map'
import YmapPlugin from 'vue-yandex-maps'

Vue.config.productionTip = false


const settings = {
  apiKey: '4102edff-be5d-4ca7-a0be-417766fe6de8',
  lang: 'ru_RU',
  coordorder: 'latlong',
  enterprise: false,
  version: '2.1'
}

Vue.use(YmapPlugin, settings)

new Vue({
  store,
  // Map,
  render: h => h(App)
}).$mount('#app')
