// Imports
import Vue from 'vue'
import App from './App.vue'

// Arquivo de Estilizações
import './style.css'

// Imports de Plugins
import router from './router'

Vue.config.productionTip = false

// Registrando o Plugin (router: router)
new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app')
