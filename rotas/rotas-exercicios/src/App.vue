<template>
	<div id="app">
		<h1>Rotas com VueRouter</h1>
		<!-- Import do Menu de Navegação -->
		<Menu />

		<!-- Adicionando os componentes, dinamicamente, baseado nas rotas -->
		<router-view />

	</div>
</template>

<script>
// Import de Componentes
import Menu from './components/template/Menu.vue';

	export default {
		// Registros de Componentes
		components: {Menu}
	}
</script>

<style>
	#app {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>
