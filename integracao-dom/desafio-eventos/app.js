/* Instancia Vue */
new Vue({
    /* Elemento que será monitorado */
    el: '#desafio',
    /* Atributos da Instancia */
    data:{
        valor: ''
    },
    /* Métodos e Funções da Instancia */
    methods: {
        /* Exibir alerta ao clicar no botão */
        exibirAlerta(){
            alert('Exercício 1')
        },
        /* Atribuir valor digitado no input no atributo 'valor' */
        /* Será chamado independente das indicações do 'keydown' */
        armazenarValor(event){
            this.valor = event.target.value
        },

    }
})