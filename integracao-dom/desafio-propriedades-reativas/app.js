new Vue({

    el: '#desafio',

    data: {
        valor: 0
    },

    computed: {
        resultado: function(){
            return this.valor !== 37? 'Valor Diferente': 'Valor Igual'
        }
    },

    watch: {
        resultado(){
            setTimeout(() => {
                this.valor = 0
            }, 5000)
        }
    },
})