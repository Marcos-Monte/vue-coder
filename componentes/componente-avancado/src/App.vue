<template>
	<div id="app">

		<span>
			<button @click="componente = 'Citacoes'">Citações</button>
			<button @click="componente = 'Sobre'">Sobre</button>
		</span>

		<!-- Manter o Componente 'vivo': Após criado o Componente não é mais Destruído -->
		<KeepAlive>
			<!-- Tag reservada do Vue, para componentes Dinâmicos -->
			<component 
				:is="componente"
			/>
		</KeepAlive>


	</div>
</template>

<script>

	import Citacoes from './components/Citacoes'
	import Sobre from './components/Sobre'

	export default {

		components: { Citacoes, Sobre },

		data(){
			return {
				/* Valor default = Componente Sobre */
				componente: 'Sobre'
			}
		},


	}

</script>

<style>
	#app {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 100vh;
		font-size: 1.6rem;
	}

	button {
        outline: none;
        padding: 5px 15px 10px;
        margin: 10px 5px;
        border-radius: 3px;
        font-size: 2rem;
        font-weight: 300;
        color: #FFF;
        background-color: rgba(0, 0, 0, .5);
    }
</style>