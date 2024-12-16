/* Notação usada no Vue 2 */
import Vue from 'vue';

export default new Vue({

    methods: {

        /* Emitir Evento (SET)*/
        setUsuarioSelecionado(usuario){
            this.$emit('usuarioSelecionado', usuario)
        },

        /* Registrar o Evento (GET)*/
        getUsuarioSelecionado(callback){
            this.$on('usuarioSelecionado', callback)
        }

    }

    
})