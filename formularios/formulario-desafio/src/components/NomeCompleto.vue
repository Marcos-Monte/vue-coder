<template>

    <Rotulo nome="Nome Completo">
        <span>{{nomeCompleto.toUpperCase() }}</span>
    </Rotulo>

</template>

<script>
import Rotulo from './Rotulo.vue';

    export default {

        components: {Rotulo},

        props: ['propsNome', 'propsSobrenome'],

        data(){
            return {
                nomeCompleto: `${this.propsNome} ${this.propsSobrenome}`
            }
        }

    }

</script>