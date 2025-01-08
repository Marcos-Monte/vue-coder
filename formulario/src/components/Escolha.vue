<template>
    <!-- Comportamento clicável, que  altera o valor da variavel 'ligado' entre 'true e false'
    OBS: O estilo do componente muda de acordo com esse comportamento-->
    <div class="escolha"
        @click="ligado = !ligado"
        :class="status"
    >
    
        <div v-if="ligado" class="botao"></div>
        <div v-else class="botao"></div>

    </div>

</template>

<script>
export default {

    data() {
        return {
            ligado: false
        }
    },

    /* Métodos re-renderizados apenas se sofrerem alteração */
    computed: {
        status(){
            return this.ligado? 'ligado': 'desligado'
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
