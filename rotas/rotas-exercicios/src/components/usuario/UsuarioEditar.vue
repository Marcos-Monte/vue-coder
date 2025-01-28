<template>

    <div class="usuario-editar">

        <h3>Usuário Editar</h3>

        <p><strong>Editando o Usuário: </strong>{{ id }}</p>

    </div>

</template>

<script>

    export default {

        props: ['id'], // Necessário ser 'exatamente' o mesmo ID registrado no plugin 'router.js'

    }

</script>