<template>

    <section>
        <!-- Lista não ordenada -->
        <ul>
            <!-- Diretiva 'v-for' renderizando a lista de itens -->
            <li 
                v-for="(fruta, index) in frutas" 
                :key="index"
            >
                {{ fruta }}
            </li>

        </ul>

        <!-- Input que recebe novo item -->
        <input type="text" v-model="fruta" @keydown.enter="add"/>

        <!-- Button que Armazena novo item (indicado no Input)-->
        <button @click="add">Guardar</button>

    </section>
</template>

<script>

    export default {
        name: "minhasFrutas",

        data() {
            return {
                fruta: "",
                frutas: ["banana", "maçã", "romã"],
            };
        },

        methods: {
            add() {
                this.frutas.push(this.fruta);
                this.fruta = '';
            },
        },
    };
</script>
