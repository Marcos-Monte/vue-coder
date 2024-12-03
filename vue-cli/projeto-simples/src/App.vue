  <!-- Template Html -> Aparentemente, necessário em todos os componentes -->
<template id="App">
  <!-- :class -> deve ser usado apenas em elementos HTML (template não funciona) -->
  <div class="main" :class="estilo ? 'light' : 'dark'">
    <!-- Componente Importado -->
    <Hello 
      msg="Componente Importado"
    />

    <h1> Estilo {{ titulo }}</h1>

    <!-- Ao clicar muda a cor do fundo -->
    <!-- Necessário a 'diretiva' de 'binding'. Com isso não se usa 'parenteses' na função -->
    <MeuBotao :funcao="alterar" texto="Dark" />
    <MeuBotao v-bind:funcao="voltar" texto="Light" />

  </div>

</template>

<!-- Componente Vue -->
<script>
/* Importando Componente Externo */
  import Hello from './components/HelloWorld.vue';
  import MeuBotao from './components/Botao.vue';

  export default {
    /* Adicionando Componentes Externos */
    components: {

      Hello,
      MeuBotao,

    },

    data: function () {
      /* Dados retornados por uma função, garante que cada componente tenha seu proprio conjunto de dados isolados */
      return {
        
        titulo: "Light",
        estilo: true,
      };

    },

    /* Métodos da Aplicação */
    methods: {
      alterar() {
        this.estilo = false;
        this.titulo = 'Dark'
      },

      voltar(){
        this.estilo = true;
        this.titulo = 'Light'
      }
    },
  };
</script>

<!-- /* Css */ -->
<style>

  .main{
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    gap: .5rem;
  }

  button{
    width: 12rem;

  }

  /* Classes de Estilos */
  .light {
    background-color: #ffffff;
    color: red
  }

  .dark {
    background-color: #103434;
  }
</style>
