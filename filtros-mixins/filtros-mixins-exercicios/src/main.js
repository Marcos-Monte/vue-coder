import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false

// Declarando um Filter Globalmente
// Nome do Filtro é 'filtroInverter'
Vue.filter('filtroInverter', function(valor) {

  return valor.split('').reverse('').join('') // Retorna o valor invertido

});

new Vue({
  render: h => h(App),
}).$mount('#app')
