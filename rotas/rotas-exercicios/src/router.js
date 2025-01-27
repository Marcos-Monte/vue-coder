// Imports Default
import Vue from "vue";
import Router from 'vue-router';

// Import de Components
import Inicio from "./components/Inicio.vue";
import Usuario from "./components/usuario/Usuario.vue";

// Registrando o Plugin (router.js) dentro do Vue
// Ao fazer o registro, significa que dentro dos componentes será possível usar o Plugin.
// Exemplo: this.$router, this.$route, etc...
Vue.use(Router)

// Exportando Objeto de Configurações do Plugin
export default new Router({
    mode: 'history', // Valor pode ser 'hash' ou 'history'
    // Cada objeto dentro desse array, irá mapear 1 rota
    routes: [
        {path: '/', component: Inicio }, // Caminho, Componente
        // Adicionando o 'id' na rota do componente
        {
            path: '/usuario/:id', 
            component: Usuario, 
            props: true 
        }, // Caminho, Componente, Aceitando Props
    ]
})
