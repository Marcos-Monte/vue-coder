<template>
    <div class="usuario-detalhe">
        <h2 v-if="!usuarioLocal">Usuário não selecionado!</h2>
        <div v-else>
            <h2>ID: {{ usuarioLocal.id }}</h2>
            <h2>Nome: {{ usuarioLocal.nome }}</h2>
            <h2>Idade: {{ usuarioLocal.idade }}</h2>
        </div>
    </div>
</template>

<script>

    import barramento from '../barramento.js'

    export default {

        /* Event Bus: Valor de 'propsUsuario' atribuído a variável local */
        data(){
            return {
                usuarioLocal: null,
            }
        },
        
        /*Event Bus (Barramento) */
        created(){

            /* Armazena o resoltado emitido pelo evento, na variável local */
            barramento.getUsuarioSelecionado(usuario => {
                this.usuarioLocal = usuario
            })

        }

    }
</script>

<style>
    .usuario-detalhe {
        flex: 1;
        border: 1px solid #CCC;
    }
</style>
