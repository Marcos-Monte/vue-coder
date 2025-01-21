<template>

	<div id="app">

		<h1>Filtros & Mixins</h1>

		<!-- Essa forma não pode mais ser usada no Vue 3 -->
		<!-- valor | filtro 1 | filtro 2 -->
		<p>{{ cpf | filtroCpf | filtroInverter }}</p> 

		<hr>

		<!-- Exemplo de uso de 'filtros' em um 'bind'. Lembrete: ':value' = 'v-bind:value' -->
		<input type="text" :value="cpf | filtroCpf">

		<Frutas />

	</div>

</template>

<script>

import Frutas from './Frutas.vue'

	export default {

		components: {Frutas},

		// Filtros Globais foi descontinuado a partir do Vue 3
		filters: {

			// Declarando Filtro
			filtroCpf(valor){

				valor = valor.toString(); // Garantindo que o valor passado (cpf) seja uma String

				const arr = valor.split(''); // Transformando a String em um Array de Letras

				// Atribuindo a formatação característica de CPF
				arr.splice(3, 0, '.')
				arr.splice(7, 0, '.')
				arr.splice(11, 0, '-')

				// Transformando o Array, novamente, em String e retornando
				return arr.join('');

			}

		},

		data(){

			return {
				cpf: 38592034488, 
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

input {
	font-size: 2.5rem;
}
</style>
