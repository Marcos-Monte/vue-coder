<!-- Template HTML do Componente Principal da Aplicação -->
<template>
	<div id="app">
		<!-- Usando o componente, importados, dentro DESTE componente -->
		<app-usuario />
	</div>
</template>

<!-- Instancia Vue do Componente Principal -->
<script>
	/* Import dos Componentes (Localmente) */
	import AppUsuario from "./components/Usuario.vue";
	
	export default {
		/* Nomeando o Componente */
		name: "app",
		/* Registro dos Componentes */
		components: { AppUsuario }
	}
</script>

<!-- Estilização do Componente (Escopo Local) -->
<style>
	#app {
		font-family: "Avenir", Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		margin-top: 60px;
		font-size: 1.7rem;
	}

	h1, h2, p {
		margin: 10px;
		padding: 0px;
	}

	button {
		font-size: 1.5rem;
		padding: 5px 15px;
		border-radius: 4px;
		margin: 10px;
	}
</style>
