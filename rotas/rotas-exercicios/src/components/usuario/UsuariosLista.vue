<template>

    <div class="usuario-lista">

        <h3>Lista de Usuários</h3>

        <ul class="lista">

            <!-- Itens da lista transformados em 'links' que levam para o componente 'UsuarioDetalhe.vue' -->
            <!-- OBS:  v-for vai percoccrer o array ids e renderizar os componentes, baseados nos IDs -->
            <router-link 
                tag="li" 
                v-for="id in ids" 
                :to="`/usuario/${id}`" 
                :key="id"
                class="item-lista"
            >
                Usuario {{ id }}
            </router-link>

        </ul>

    </div>

</template>

<script>

    export default {

        data(){
            return {
                // Array de IDs que serão renderizados
                ids: [1 , 5 , 3 ],

            }
        }


    }

</script>