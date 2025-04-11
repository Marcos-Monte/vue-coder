export default {
     // Atributos
     state: { // Estado central, compartilhado pelo VUEX
        quantidade: 0,
        preco: 0,
    },

    // Métodos de 'get' da informação de 'state'
    getters: {
        getQuantidade(state){
            return state.quantidade
        },

        getPreco(state){
            return state.preco
        }
    },

    // Altera os valores dos estados 
    mutations: {

        setQtde(state, payload){
            state.quantidade = payload
        },

        setPrecoPadrao(state, payload){
            state.preco = payload
        }
    },

    // Objetivo das Actions não são alterar o state, mas, estabelecer o contexto para a mutation modificar
    actions: {}

}