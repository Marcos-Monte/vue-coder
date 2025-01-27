<template>
	<div id="app">
		<h1>Rotas com VueRouter</h1>

		<!-- Adicionando os componentes, dinamicamente, baseado nas rotas -->
		<router-view />

	</div>
</template>

<script>
export default {
	
}
</script>

<style>
	#app {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>
