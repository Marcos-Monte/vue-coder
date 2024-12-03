<!-- Template Html -> Aparentemente, necessário em todos os componentes -->
<template>

    <!-- Componente 'button' recebe função e texto, como propriedades -->
    <button @click="funcao">
        {{ texto }}
    </button>

</template>

<script>

    /* Objeto Padrão da aplicação */
    export default {
        /* Nomear o componente no Objeto / Instancia é Obrigatorio */
        name: "MeuBotao",
        /* Defininco as 'props', recebidas pelo Componente */
        props: {
            /* Função recebe um valor do 'tipo Funcion' e não é obrigatoria */
            funcao: {
            type: Function,
            required: false,
            },
            /* Texto recebe um valor do 'tipo String' e é obrigatoria */
            texto: {
            type: String,
            required: true,
            },
        },
    };
</script>
