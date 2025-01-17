<template>

    <!-- Ao invés de mexer diretamente na lógica, vamos 'EMITIR' um evento do TIPO INPUT. Que inverte a logica Boolean -->
    <div class="escolha"
        @click="$emit('input', !propsLigado)"
        :class="status"
    >
    
        <div v-if="propsLigado" class="botao"></div>
        <div v-else class="botao"></div>

    </div>

</template>

<script>
export default {

    // Recebe uma 'props' do Componente Pai. Essa 'props' será modificada sempre que o evento do tipo INPUT for emitido

    // Props, nesse caso, substitui a estrutura antiga de 'data'
    props: {
        propsLigado: {
            type: Boolean,
            required: true
        }
    },

    /* Métodos re-renderizados apenas se sofrerem alteração */
    computed: {
        status(){
            return this.propsLigado? 'ligado': 'desligado'
        }
    }
}
</script>

<style scoped>
    .escolha {
        position: relative;
        display: flex;
       /*  flex-direction: column; */
        /* justify-content: center; */
        align-items: center;
        height: 15px;
        width: 40px;
        border-radius: 20px;
        border: 1px solid #AAA;
    }

    .botao {
        position: absolute;
        /* margin: 0px 5px; */
        height: 25px;
        width: 25px;
        border-radius: 14px;
        background: #FFF;
        box-shadow: 0px 0px 5px #000B;
    }

    .desligado {
        background-color: #AAA;
        justify-content:  flex-start;
    }

    .ligado {
        background-color: #7495c2;
        justify-content:  flex-end;
    }

/*  .desligado  .botao {
        left: -10px;
    }
 */
    .ligado .botao {
        background-color: #255ca9;
        
    }
</style>
