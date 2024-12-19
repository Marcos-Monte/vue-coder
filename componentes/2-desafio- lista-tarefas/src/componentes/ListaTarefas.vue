<template>

    <div class="tarefas">

        <!-- Se houver tarefas na lista, aparecer oque está dentro do Template -->
        <template v-if="propsTarefas.length">
            <!-- Renderizando componente Tarefa.  Passando cada 'Objeto', do Array de Objetos, como Props para o componente-->
            <!-- Percorre o 'array' passado via 'props' no componente pai -->
            <!-- OBS: key = tarefa.name, garante que não tenha duas tarefas iguais -->
            <Tarefa 
                v-for="tarefa in propsTarefas"
                :key="tarefa.name"
                :propsTarefa="tarefa"
            />

        </template>

        <!-- Se a lista de tarefas estiver vazia, mostrar a mensagem -->
        <p v-else class="semTarefas">Sua vida está em dia :)</p>

    </div>

</template>

<script>
    /* Importando componente Tarefa para esse Componente */
    import Tarefa from './Tarefa.vue';

    export default {

        /* Registrando os Componentes Localmente */
        components: {Tarefa},

        /* Array de Objetos */
        props: {
            propsTarefas: {
                type: Array,
                required: true
            }
        }

    }

</script>

<style>

    .tarefas {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    }

    .semTarefas {
        color: #aaa;
        font-size: 1.7rem;
    }

</style>