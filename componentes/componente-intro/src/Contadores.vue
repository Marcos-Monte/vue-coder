<!-- Componente Importado de Forma Global (main.js) -->
<template>

    <!-- Necessário Encapsular os elementos com uma tag Envolvente -->
    <div class="contadores">
        <h1>Contadores</h1>

        <!-- Utiliza o Componente Importado Localmente, utiliza diretivas para indicar quantas vezes ele sera renderizado -->
        <app-contador 
            v-for="contador in 8"
            :key="contador"
        />

    </div>

</template>

<script>

    /* Importando Objeto de Componente (Local) */
    import Contador from './Contador.vue';

    /* Objeto deste Componente que será exportado */
    export default {

        /* No Vue 3 é necessário Nomear o Objeto do Componente Exportado */
        name: 'MeusContadores',

        components: {
            /* Registrando Componente Local */
            'app-contador': Contador,
        }
    }
    
</script>
