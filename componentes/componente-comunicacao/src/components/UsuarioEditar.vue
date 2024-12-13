<!-- Template HTML de UsuarioEditar -->
<template>
    <div class="componente">
        <h2>Alterar os Dados de Usuário</h2>
        <p>Edite as informações</p>
        <span>Idade do Usuário: <strong>{{ usuarioIdade }}</strong></span>
        <button @click="somarUm">+ 1</button>
    </div>
</template>

<!-- Instancia Vue de UsuarioEditar -->
<script>

    /* Importando a Instancia de 'barramento' */
    import barramento from '@/barramento';

    export default {
        props: {
            'usuarioIdade': {
                type: Number
            },
        },

        methods: {
            somarUm(){
                /* Sinal Emitido de um Evento Personalizado, na Instancia 'barramento' */

                /* Usando Método da Instancia 'barramento' */
                barramento.alterarIdade({
                    novaIdade: this.usuarioIdade += 1
                })
            }
        }
    }
</script>

<!-- Estilização do Componente (Escopo Local) -->
<style scoped>
    .componente {
        flex: 1;
        background-color: #98b99a;
        color: #fff;
    }
</style>
