import Vue from 'vue';
import './plugins/bootstrap-vue'
import App from './App.vue';

// Registrando a instancia Axios na Aplicação (Disponível de Forma Global)
import './plugins/axios.js';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
