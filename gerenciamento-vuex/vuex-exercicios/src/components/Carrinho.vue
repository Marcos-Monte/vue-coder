<template>
    <Painel titulo="Carrinho" azul :notificacao="produtos.length">
        <div class="carrinho">
            <table>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Qtde</th>
                        <th>Preço</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="produto in produtos" :key="produto.nome">
                        <!-- Adicionado botão para 'remover' o produto da lsita -->
                        <td><button @click="remover(produto.nome)">Remove</button></td>
                        <td>{{ produto.nome }}</td>
                        <td>{{ produto.quantidade }}</td>
                        <td>{{ produto.preco | dinheiro }}</td>
                    </tr>
                </tbody>
            </table>
            <hr>
            <div class="total">
                <span>Total: <strong>{{ total | dinheiro }}</strong></span>
            </div>
        </div>
    </Painel>
</template>

<script>
// Método nativo do VUEX, para buscar resultados do objeto 'getters' em 'store'
// import { mapGetters, mapMutations } from 'vuex';
import { mapActions, mapGetters } from 'vuex';

export default {

    // Propriedades computadas que serão 're-renderizadas' em caso de alteração
    computed: mapGetters({
        produtos: 'produtosList', // Retorna toda a lista de produtos
        total: 'valorTotal' // variávle total, recebe o valor do getter 'valorTotal'
    }),

    methods: {
        ...mapActions(['removerProdutoActions']),
        
        // Versão de método que recebe o valor direto no componete via click
        remover(nome){
            // Mutation agindo como método local
            // this.$store.dispatch('removerProdutoActions', nome)
            this.removerProdutoActions(nome)
        }
    }
}
</script>

<style>
    table {
        width: 100%;
    }

    td {
        border-top: 1px solid #EEE;
        width: 33%;
    }

    hr {
        margin-top: 30px;
    }

    .total {
        display: flex;
        justify-content: flex-end;
    }
</style>
