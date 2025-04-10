<template>
    <Painel titulo="Resumo" roxo>
        <div class="resumo">
            <span>Total: <strong>{{ total | dinheiro }}</strong></span> </br>
            <span>Dobro: <strong>{{ dobro | dinheiro}}</strong></span>
            <hr>
            <button>Finalizar!</button>
        </div>
    </Painel>
</template>

<script>
// Método nativo do VUEX, para buscar resultados do objeto 'getters' em 'store'
import { mapGetters } from 'vuex';

export default {

    // Propriedades computadas que serão 're-renderizadas' em caso de alteração
    computed: mapGetters({
        total: 'valorTotal', // variávle total, recebe o valor do getter 'valorTotal'
        dobro: 'totalDobrado', // variávle dobro, recebe o valor do getter 'totalDobrado'
    })
    // computed: mapGetters(['valorTotal']) // Desta forma, preciso alterar o valor da variavel 'total' no template
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
</style>
