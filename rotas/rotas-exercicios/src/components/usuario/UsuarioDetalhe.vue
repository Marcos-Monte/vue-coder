<template>

    <div class="usuario-detalhe">

        <h3>Usuário Detalhe</h3>
        
        <!-- -------- Importado do Componente Usuario.vue -->
        <!-- Irá mostrar conteudo diferenciando cada 'Usuario renderizado' -->
        <p><strong>Usuário ID:</strong> {{ id }}</p>

        <!-- Tag 'to' recebe o valor dinâmico do 'id' interpolado, para navegação dinamica -->
        <!-- OBS: Também é possível usar, no lugar do 'id' -> $route.params.id -->
        <!-- <router-link tag="button" :to="`/usuario/${id}/editar`" primario>
            Editar
        </router-link> -->
        <router-link 
            tag="button" 
            :to="{name: 'editarUsuario', params: {id: id}}" 
            primario
        >
            Editar
        </router-link>

    </div>

</template>

<script>

    export default {
        // -------- Importado do Componente Usuario.vue

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

    }

</script>