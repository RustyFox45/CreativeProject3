import Vue from 'vue'
import App from './App.vue'
import router from './router'
import mockData from './mock-data.js'

Vue.config.productionTip = false

 let data = {
   pokemons: mockData,
   favorites: []
}

new Vue({
  router,
  data,
  render: h => h(App)
}).$mount('#app')
