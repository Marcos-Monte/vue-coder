<template>
    <!-- Componente recebe Objeto do array via 'propsTarefa' do Componente Pai. Renderiza o valor da 'chave name' do Objeto-->
    <div 
        class="tarefa"
        :class="estadoClasse"
        @click="alterarStatus()"
    >
    
        <span 
            @click.stop="excluirTarefa()"
            class="excluir"
        >
            x
        </span>
        <p>{{ propsTarefa.name }}</p>

    </div>

</template>

<script>

    import barramento from '../barramento.js';

    export default {

        /* Propriedades e Valores recebidos pelo Componente Pai */
        props: {

            /* Objeto de um Array de Objetos */
            propsTarefa: {
                type: Object,
                required: true
            }

        },

        /* Menitorando a mudança dos métodos indicados */
        computed: {

            /* Fazer um 'bind' no componente, como uma classe 'dinamica' */
            estadoClasse(){
                /* No Objeto, se o valor da chave 'pendente' for true, atribuir a 'classe de estilo "pendente"', senão, atribuir a 'classe de estilo "concluido"' */
                return this.propsTarefa.pendente === true? 'pendente' : 'concluida'

            }

        },


        methods: {

            excluirTarefa(){
                /* Emitindo Evento Personalizado para excluir uma tarefa, enviando qual a tarefa */
                barramento.$emit('tarefaExcluida', this.propsTarefa)

            },

            alterarStatus(){
                /* Emitindo Evento Personalizado para alterar o status de uma tarefa, enviando qual a tarefa */
                barramento.$emit('statusAlterado', this.propsTarefa)
            }

        }

    }


</script>

<style>

    /* Estilos Default */
    .tarefa {
        box-sizing: border-box;
        width: 350px;
        height: 150px;
        padding: 10px;
        border-radius: 8px;
        font-size: 2rem;
        font-weight: 300;
        cursor: pointer;
        user-select: none; /* Usuário não consegue selecionar o texto */
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 10px;
        position: relative;
    }

    /* Estilo para Tarefas Pendentes */
    .pendente {
        border-left: 12px solid #B73229;
        background-color: #F44336;
    }

    .pendente .excluir {
        background-color: #B73229;
    }

    .pendente .excluir:hover {
        color: #B73229;
        background-color: #ddd;
    }

    /* Estilo para Tarefas Concluídas */
    .concluida {
        color: #ddd;
        border-left: 12px solid #0A8F08;
        background-color: #4CAF50;
        text-decoration: line-through;
    }
    
    .concluida .excluir {
        background-color: #0A8F08;
    }

    .concluida .excluir:hover {
        color: #0A8F08;
        background-color: #ddd;
    }

    .excluir {
        position: absolute;
        top: 10px;
        right: 10px;
        font-size: 0.9rem;
        font-weight: 600;
        width: 20px;
        height: 20px;
        border-radius: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    


</style>