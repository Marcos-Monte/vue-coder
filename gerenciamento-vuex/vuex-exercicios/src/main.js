import Vue from 'vue'
import App from './App.vue'

// Importando a 'store' do VUEX no Componente Global
import store from './store/store'

Vue.config.productionTip = false

import Painel from './components/Painel'
Vue.component('Painel', Painel)

Vue.filter('dinheiro', valor => {
	return `R$ ${parseFloat(valor).toFixed(2)}`.replace('.', ',')
})

new Vue({
	store, // Registrando a Store globalmente
	render: h => h(App),
}).$mount('#app')
