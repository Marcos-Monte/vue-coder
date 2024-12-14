import Vue from 'vue';

export default new Vue({

    methods: {

        /* Emitir Evento */
        setUsuarioSelecionado(usuario){
            this.$emit('usuarioSelecionado', usuario)
        },

        /* Registrar o Evento */
        onUsuarioSelecionado(callback){
            this.$on('usuarioSelecionado', callback)
        }

    }

    
})