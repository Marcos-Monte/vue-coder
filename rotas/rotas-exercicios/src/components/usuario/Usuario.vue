<template>

    <!-- Usuário Genérico -->
    <div class="usuario">

        <h2>Usuários</h2>
        <hr>

        <!-- Tag que carrega o Componente UsuárioLista.vue -->
        <router-view />

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

        // Registrando Métodos
        methods: {
            // Método que ao ser iniciado (clicado) retorna a navegação para a 'rota' indicada
            irParaInicio(){
                // Router, registrado de forma Global
                // this.$router.push('/')
                this.$router.push(
                    { name: 'inicio' } // Fazendo um 'push' no nome da Rota (lógica de empilhamento)
                )
            }
        }

    }

</script>