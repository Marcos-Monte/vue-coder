<template>

    <div class="inputTarefa">
        <!-- diretiva: 'v-model' atualiza o valor indicado e renderiza ao mesmo tempo-->
        <!-- Método 'add' é iniciado ao pressionar a tecla 'enter' e ao clicar no botão -->
        <input
            v-model="name"
            @keydown.enter="add"
            type="text"
            class="input"
            placeholder="Nova tarefa?"
        >
        <button @click="add">+</button>
    </div>

</template>

<script>

    export default {

        data(){

            return {
                /* Dado que será 'renderizado' no campo do Input e Enviado no Evento para o Componente Pai */
                name: ''
            }

        },

        methods: {

            /* Métodos de adiçao de novas tarefas */
            add(){
                /* Emite um Evento Personalizado (Para o Componente Pai), que vai receber um 'valor' */
                this.$emit('adicionarTarefa', {name: this.name})
                this.name = ''
            }

        }

    }


</script>


<style>

    .inputTarefa {
        margin: 35px;
    }

    .input, button{
        outline: none;
        font-size: 2rem;
        border: 1px solid #fff;
        padding: 5px 10px 8px;
        color: #fff;
    }

    .input {
        width: 500px;
        background-color: #fff2;
        border-radius: 8px 0px 0px 8px ;
    }

    button {
        border-radius: 0px 8px 8px 0px;
        background-color: #2196F3;
    }

</style>