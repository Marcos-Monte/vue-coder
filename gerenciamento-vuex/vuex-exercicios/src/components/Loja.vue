<template>
    <Painel titulo="Loja Virtual" verde>
        <div class="loja">
            <span>Adicionar</span>
            <input type="number" v-model.number="quantidade" required>
            <span>itens de <strong>R$</strong></span>
            <input type="number" v-model.number="preco">
            <button @click="adicionar">Add</button>
        </div>
    </br>
        <div class="loja">
            <span>Nome do produto que será removido: </span>
            <input type="text" v-model="nome" required>
            <button @click="remover">Remover</button>
        </div>
    </Painel>
</template>

<script>
// import { mapMutations } from 'vuex'
// import { mapActions, mapMutations } from 'vuex'
import { mapActions, mapMutations } from 'vuex'

export default {
    data() {
        return {
            sequencia: 1,
            quantidade: 1,
            preco: 9.99,
            nome: '',
        }
    },
    methods: {
        // Mapeia as 'mutations' da 'store' e disponibiliza os indicados como métodos locais
        // ...mapMutations(['adicionarProduto', 'removerProduto']),
        ...mapMutations(['removerProduto']),
        ...mapActions(['adicionarProdutoActions', 'removerProdutoActions']),

        adicionar() {
            // Cria o produto com as informações do 'input' do usuário
            const produto = {
                id: this.sequencia,
                nome: `Produto ${this.sequencia}`,
                quantidade: this.quantidade,
                preco: this.preco
            }
            this.sequencia++
            // eslint-disable-next-line
            //console.log(produto)

            // Alterando o Estado da aplicação, enviando o produto a ser cadastrado para o Estado Central (Store de VUEX)
            // this.$store.commit('adicionarProduto', produto)
            // this.adicionarProduto(produto)
            this.adicionarProdutoActions(produto)

        },

        // Versão de método que recebe o valor direto no componete via input
        remover(){
            // Mutation agindo como método local
            this.removerProdutoActions(this.nome)
        }
    }
}
</script>

<style>
    .loja {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        gap: 1rem;
    }

    .loja > * {
        margin: 0px 10px;
    }

    input {
        font-size: 2rem;
        width: 200px;
    }
</style>
