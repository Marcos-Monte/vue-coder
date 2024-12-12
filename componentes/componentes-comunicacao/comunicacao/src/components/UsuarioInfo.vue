<!-- Template HTML de UsuarioInfo -->
<template>
    <div class="componente">
        <h2>As Informações de Usuário</h2>
        <p>Vários detalhes...</p>
        <!-- Recebe informação do Nome do Usuário (modificada pelo método) -->
        <span>Nome de Usuário: <strong>{{ interverNome() }}</strong></span>

        <button @click="reiniciarNome">Reiniciar Nome</button> <!-- Evento personalizado -->

        <button @click="reiniciarCallback">Reiniciar Nome (Callback)</button> <!-- Função Callback -->
    </div>
</template>

<!-- Instancia Vue de UsuarioIndo -->
<script>
    export default {
        /* Definir as propriedades do Componente */
            // Componente recebe uma propriedade chamada 'usuarioNome'
            // Propriedade Callback 
        props: {
            'usuarioNome': {
                type: String,
                required: true
            }, 

            /* Registrando Função recebida pelo Componente (Callback) */
            'reiniciarCallback': {
                type: Function,
            }
        },

        methods: {
            interverNome(){
                /* Retorna o nome ao contrario */
                return this.usuarioNome.split('').reverse().join('')
            },

            /* Comunicação Indireta: Evento Personalizado */
            reiniciarNome(){
                this.usuarioNome = 'Evento Personalizado';
                /* Emitindo um Sinal de evento personalizado('nome, {função, objeto ou valores}') */
                this.$emit('nomeMudou', {
                    novoNome: this.usuarioNome
                })
            }
        }
    }
</script>

<!-- Estilização do Componente (Escopo Local) -->
<style scoped>
    .componente {
        flex: 1;
        background-color: #ec485f;
        color: #fff;
    }
</style>
