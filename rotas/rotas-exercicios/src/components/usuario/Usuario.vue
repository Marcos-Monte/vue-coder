<template>

    <!-- Usuário Genérico -->
    <div class="usuario">

        <h2>Usuários</h2>
        <hr>
        
        <!-- Irá mostrar conteudo diferenciando cada 'Usuario renderizado' -->
        <p><strong>Usuário ID:</strong> {{ id }}</p>

        <!-- Ao clicar no Botão é enviado para a Rota indicada (no exemplo será a principal '/') -->
        <!-- Propriedade 'sucesso' deixa o fundo verde -->
        <button 
            @click="irParaInicio()" 
            sucesso
        >
            Voltar
        </button>

    </div>

</template>

<script>

    export default {

        // Registro de Variaveis e Dados
        // data(){
        //     return {
        //         // Pegando o parametro a partir da Rota
        //         idRota: this.$route.params.id // Route é um Método Nativo do 'Vue-Router'
        //     }
        // },

        // // Monitoramento Assíncrono: Monitorando a Rota, para indicar quando houver atualização
        // watch: {
        //     //  From = De onde veio (não usado no exemplo)
        //     $route(to, from){
        //         // To = Para onde vai,
        //         this.idRota = to.params.id // Pega o NOVO ID na Rota('/usuario/:id')

        //     }
        // },

        // Registrando Props 
        props: ['id'], // Necessário ser 'exatamente' o mesmo ID registrado no plugin 'router.js'

        // Registrando Métodos
        methods: {
            // Método que ao ser iniciado (clicado) retorna a navegação para a 'rota' indicada
            irParaInicio(){
                // Router, registrado de forma Global
                this.$router.push('/')
            }
        }

    }

</script>