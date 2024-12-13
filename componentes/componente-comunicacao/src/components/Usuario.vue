<!-- Template HTML de Usuario -->
<template>
    <div class="container">
        
        <h1>Componente Usuário</h1>
        <p>Esse é um componente muito legal!</p>

        <p>Nome é <strong>{{ nome }}</strong></p>
        <p>Idade é <strong>{{ idade }}</strong></p>

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
                
                :usuarioIdade="idade"
                
                :reiniciarCallback="reiniciarNome"
            /> 
            
            <!-- Componente Pai, passa valor de 'usuarioIdade' para os Filhos -->
            <!-- Componente Pai, recebe Evento e devolve valor 'idade' alterado para os Filhos -->
            <app-usuario-editar 
                :usuarioIdade="idade"
            
            />
            <!-- @alterouIdade="idade = $event.novaIdade * 2" -->
            
        </div>
    </div>
</template>

<!-- Instancia Vue de Usuario -->
<script>
    /* Import dos Componentes (Localmente) */
    import AppUsuarioEditar from './UsuarioEditar';
import AppUsuarioInfo from './UsuarioInfo';
    
    export default {
        /* Registro dos Componentes */
        components: { AppUsuarioInfo, AppUsuarioEditar },

        /* Função que armazena os dados do Componente. Esses dados vão ser passados para o componente filho */
        data(){
            return {
                nome: 'Marcos',
                idade: 36
            }
        },

        /* Método que alterna entre um e outro nome. Evento de Click no botão */
        methods: {
            alterarNome(){
                if( this.nome === 'Marcos'){
                    this.nome = 'Mariá'
                    this.idade = 27
                } else {
                    this.nome = 'Marcos'
                    this.idade = 36
                }
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
