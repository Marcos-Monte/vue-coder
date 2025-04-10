<template>
	<div id="app">
		<h1>Exercícios Vuex</h1>
		<div class="linha">
			<Parametros />
			<Loja />
		</div>
		<div class="linha">
			<Carrinho />
			<Resumo />
		</div>
	</div>
</template>

<script>
import Carrinho from './components/Carrinho'
import Loja from './components/Loja'
import Parametros from './components/Parametros'
import Resumo from './components/Resumo'

export default {
	name: 'app',
	components: { Parametros, Loja, Carrinho, Resumo },
	data(){
		return {
			produtos: [
				{ nome: 'Produto 1', quantidade: 7, preco: 14.55 },
				{ nome: 'Produto 2', quantidade: 10, preco: 22.99 },
				{ nome: 'Produto 3', quantidade: 1, preco: 43.18 }
			]
		}
	},

	mounted(){
		localStorage.setItem('produtos', JSON.stringify(this.produtos))
	}
}
</script>

<style>
* {
	font-family: 'Oswald', sans-serif;
}

body {
	font-size: 2rem;
	background: linear-gradient(to right, rgb(0, 0, 0), rgb(67, 67, 67));
}

#app {
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #FFF;
}

h1 {
	font-weight: 200;
}

.linha {
	display: flex;
}

button {
	font-size: 1.8rem;
	padding: 5px 15px;
	border-radius: 5px;
	color: #222;
	background-color: #FAFAFA;
	outline: none;
	border: none;
}
</style>
