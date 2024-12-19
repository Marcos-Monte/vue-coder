<template>

    <!-- Barra  -->
    <div class="barraProgresso">

        <!-- Marcador de Progresso (props passada via Componente Pai)-->
        <span class="valorProgresso">{{ propsProgresso }}%</span>

        <!-- Progresso, largura estabelecida dinamicamente (props passada via Componente Pai)--->
        <div class="progresso" :style="{width: propsProgresso + '%'}"></div>

    </div>
    
</template>

<script>

    export default {

        /* Propriedades e Valores recebidos pelo Componente Pai */
        props: {
            propsProgresso: {
                type: Number,
                default: 0
            }
        }

    }

</script>


<style>

    .barraProgresso {
        position: relative;
        width: 80%;
        border: 1px solid #fff;
        color: #fff;
        border-radius: 8px;
        margin-bottom: 15px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    /* Largura dessa classe é passada dinamicamente, de acordo com o 'props' */
    .progresso{
        position: absolute;
        border-radius: 8px;
        height: 100%;
        background-color: #4CAF50;
        align-self: flex-start;
    }

    .valorProgresso {
        z-index: 1;
        font-size: 1.5rem;
    }

</style>