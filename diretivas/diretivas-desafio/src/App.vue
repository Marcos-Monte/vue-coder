<template>

	<div id="app">

		<h1>Diretivas (Desafio)</h1>

		<hr>

		<!-- Diretiva: verifica a emissão do evento 'click' e aciona a função -->
    <button v-quando:click="acaoClick">
      Executar
    </button>

    <!-- Diretiva: verifica a emissão dos eventos 'mouseenter e mouseleave' e aciona a função -->
    <div 
      v-quando:mouseenter="mouseEnter"
      v-quando:mouseleave="mouseLeave"
    >
      <p>Teste Mouse Event!</p>
    </div>

	</div>

</template>

<script>

  export default {

    // Registrando Diretiva Personalizada
    directives: {

      // Nome da Diretiva --> v-quando
      'quando': {

        // Montando a Diretiva --> el (elemento), binding (interações)
        mounted(el, binding){

          // Argumento será o 'evento de click', similar ao 'v-on:click'. Podemos usar qualquer tipo de 'evento padrão'
          const argumento = binding.arg;
          // Função será recebica como valor
          const funcao = binding.value;

          // Adicionando um 'escutador' de eventos. 
          el.addEventListener(argumento, funcao)

        }

      }

    },

    methods: {

      // Função inicia uma caixa de alerta 
      acaoClick(){
        alert('Ação Executada!')
      },

      // Função mostra no terminal a mensagem
      mouseEnter(){
        console.log('Dentro da Div')
      },

      // Função mostra no terminal a mensagem
      mouseLeave(){
        console.log('Fora da Div')
      }

    }

  }

</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
	font-size: 2.5rem;
}

button {
	margin: 10px 0px;
	padding: 10px 20px;
	font-size: 1.4rem;
	border-radius: 5px;
	color: #FFF;
	background-color: #2196F3;
}
</style>
