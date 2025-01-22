// Import de dependencias
import axios from 'axios';
import Vue from 'vue';

// Registrando a URL (base) do Banco de Dados (Referencia Global). // URL do Firebase

// axios.defaults.baseURL = 'https://curso-vue-1130f-default-rtdb.firebaseio.com/'; 

Vue.use({
    install(Vue) {
        // Propriedade $http disponível de forma global, apontando para o 'axios'
        // Vue.prototype.$http = axios

        // Propriedade $http disponível especificamente para a URL base, apontando para o 'axios'
        // A ideia é de que podemos criar configurações específicas para cada 'instancia' do Axios.
        Vue.prototype.$http = axios.create({
            baseURL: 'https://curso-vue-1130f-default-rtdb.firebaseio.com/',

        })
    }
})