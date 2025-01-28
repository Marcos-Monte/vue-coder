// Imports Default
import Vue from "vue";
import Router from 'vue-router';

// Import de Components
import Inicio from "./components/Inicio.vue";
import Usuario from "./components/usuario/Usuario.vue";

// Imports das Rotas Aninhadas
import UsuarioDetalhe from "./components/usuario/UsuarioDetalhe.vue";
import UsuarioEditar from "./components/usuario/UsuarioEditar.vue";
import UsuariosLista from "./components/usuario/UsuariosLista.vue";

// Registrando o Plugin (router.js) dentro do Vue
// Ao fazer o registro, significa que dentro dos componentes será possível usar o Plugin.
// Exemplo: this.$router, this.$route, etc...
Vue.use(Router)

// Exportando Objeto de Configurações do Plugin
export default new Router({
    mode: 'history', // Valor pode ser 'hash' ou 'history'
    // Cada objeto dentro desse array, irá mapear 1 rota
    routes: [
        {path: '/', component: Inicio, name: 'inicio' }, // Caminho, Componente
        // Adicionando o 'id' na rota do componente
        {
            path: '/usuario', // Retirado o ID do 'path' de referencia para as Rotas Aninhadas
            component: Usuario, 
            props: true,
            children: [
                // IMPORTANTE --> O '/' é referencia de caminho 'raiz', não deve ser usado aqui
                {path: '', component: UsuariosLista}, // Carregar no Path '/usuario'

                {path: ':id', component: UsuarioDetalhe, props: true,}, // Carregar no Path '/usuario/:id'

                {
                    path: ':id/editar', 
                    component: UsuarioEditar, 
                    props: true,
                    name: 'editarUsuario'
                }, // Carregar no Path '/usuario/:id/editar'

            ]
        }, // Caminho, Componente, Aceitando Props
    ]
})
