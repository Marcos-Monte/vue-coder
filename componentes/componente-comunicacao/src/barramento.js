/* Forma de Utilização no Vue 2 */
import Vue from 'vue';

export default new Vue({

    methods: {
        /* Registra o Evento e chama Função Callback */
         /* Quando criar o componente,  vincula-se a função 'Callback' ao Evento indicado (alterouIdade) */
        quandoIdadeMudar(callback){
            this.$on('alterouIdade', callback)
        },

        /* Emitir Evento */
        alterarIdade(idade){
            this.$emit('alterouIdade', idade )
        }
    }

});


