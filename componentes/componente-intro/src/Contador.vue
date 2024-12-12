<!-- Componente que será importado localmente -->
<template>

    <!-- Se tiver mais de 1 elemento, encapsular em uma Tag Envolvente -->
    <div class="contador">

        <span>{{ contador }}</span>

        <button @click="add">+</button>
        <button @click="sub">-</button>

    </div>

</template>

<script>

    /* Objeto do Componente {
        name: valor, 
        data: {dados}, 
        methods: {metodos}
    } */

    export default {
        /* No Vue 3, é necessário nomear */
        name: 'MeuContador',

        data(){
            return {
                contador: 0
            }
        },

        methods: {
            add(){
                this.contador++
            },

            sub(){
                this.contador--
            }
        }
    }

</script>

<style>
    .contador {
        margin: 20px;
    }
    
    .contador span {
        border-bottom: 1px solid #ccc;
        height: 30px;
        padding: 5px 25px;
    }

    .contador button {
        height: 30px;
        width: 30px;
        border-radius: 15px;
        background-color: coral;
        color: #fff;
        margin-left: 10px;
        outline: none;
    }

</style>