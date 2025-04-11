// Import das Bibliotecas necessárias para funcionamento de Store
import Vue from 'vue';
import Vuex from 'vuex';

import carrinho from './modules/carrinho';
import parametros from './modules/parametros';

// Registrando
Vue.use(Vuex)

// Retornar a 'store' configurada via Função construtora (exportando por padrão)
export default new Vuex.Store({
    modules: {
        carrinho, 
        parametros
    }
})