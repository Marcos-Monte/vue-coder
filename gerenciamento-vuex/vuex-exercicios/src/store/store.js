// Import das Bibliotecas necessárias para funcionamento de Store
import Vue from 'vue';
import Vuex from 'vuex';

// Registrando
Vue.use(Vuex)

// Retornar a 'store' configurada via Função construtora (exportando por padrão)
export default new Vuex.Store({
    // Atributos
    state: { // Estado central, compartilhado pelo VUEX
        produtos: []
    },

    // Métodos de 'get' da informação de 'state'
    getters: {
        // Mostra o valor total da 'compra' 
        valorTotal(state){
            return state.produtos.map(p => p.quantidade * p.preco)
            .reduce((total, atual) => total + atual, 0)
        },
         // Mostra o valor total da 'compra' dobrado
        totalDobrado(state){
            const valor = state.produtos.map(p => p.quantidade * p.preco)
            .reduce((total, atual) => total + atual, 0)
            return valor * 2
        },

        // Retorna o conteudo completo de produtos, idea de deixar o acesso apenas via 'getters e mutations'
        produtosList(state){
            return state.produtos
        }
    },

    // Altera os valores dos estados 
    mutations: {
        // Como parâmetro, recebe o 'state' e o 'payload' (nesse caso será o produto adicionado)
        // Parametro: apenas o state ou um único parametro com qualquer tipo de dado
        adicionarProduto(state, payload){
            state.produtos.push(payload)
        },

        // Teste para função de retirada de produto, baseado no 'nome' 
        removerProduto(state, payload){
            // Filtro que retorna array com todos os objetos menos o passado no parametro
            const filtrados = state.produtos.filter(p => p.nome !== payload)
            // atualizando o state com o array filtrado
            state.produtos = filtrados
        }
    },

    // Objetivo das Actions não são alterar o state, mas, estabelecer o contexto para a mutation modificar
    actions: {
        adicionarProdutoActions(context, payload){
            try {
                if(!payload){
                    console.log('Vazio')
                    return
                }

                setTimeout(() => {
                    context.commit('adicionarProduto', payload)
                }, 2000)

            } catch (error) {
                console.error('Não foi possível adicionar o produto: ', error)
            }
        },

        removerProdutoActions(context, payload){
            console.log('Acionada: ', payload)
            
            if(!payload){
                alert('Selecione um produto para ser removido!')
                return
            }
            try {
                

                setTimeout(() => {
                    context.commit('removerProduto', payload)
                },2000)

            } catch (error) {
                console.error('Não foi possível remover produto. Tente novamente!', error)
            }
        }
    }


})