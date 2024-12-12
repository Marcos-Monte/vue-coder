<!-- Template HTML de Usuario -->
<template>
    <div class="container">
        
        <h1>Componente Usuário</h1>
        <p>Esse é um componente muito legal!</p>

        <p>Nome é <strong>{{ nome }}</strong></p>

        <!-- Click no Botão modifica o valor do dado 'nome' (usando V-On) -->
        <button @click="alterarNome">Alterar Nome</button>
        <hr>
        <!-- Usando os componentes, importados, dentro DESTE componente -->
        <div class="componentes">
            
            <!-- Componente recebendo a propriedade 'nome' (usando V-Bind)-->
            <!-- Componente recebe 'evento personalizado, que altera valor do dado 'nome' -->
            <app-usuario-info 
                :usuarioNome="nome"
                @nomeMudou="nome = $event.novoNome"
                :reiniciarCallback="reiniciarNome"
            /> 
            
            <app-usuario-editar />
        </div>
    </div>
</template>

<!-- Instancia Vue de Usuario -->
<script>
    /* Import dos Componentes (Localmente) */
    import AppUsuarioInfo from './UsuarioInfo'
    import AppUsuarioEditar from './UsuarioEditar'
    
    export default {
        /* Registro dos Componentes */
        components: { AppUsuarioInfo, AppUsuarioEditar },

        /* Função que armazena os dados do Componente. Esses dados vão ser passados para o componente filho */
        data(){
            return {
                nome: 'Marcos'
            }
        },

        /* Método que alterna entre um e outro nome. Evento de Click no botão */
        methods: {
            alterarNome(){
                this.nome === 'Marcos'? this.nome = 'Mariá': this.nome = 'Marcos'
            },

            /* Comunicação Indireta: Função Callback */
            reiniciarNome(){
                this.nome = 'Callback'
            }
        }
    }
</script>

<!-- Estilização do Componente (Escopo Local) -->
<style scoped>
    .container {
        background-color: #27363b;
        color: #fff;
        padding: 10px;
    }

    .container hr {
        margin: 20px 10px;
    }

    .componentes {
        display: flex;
    }

    .componentes > * {
        margin: 10px;
    }
</style>
