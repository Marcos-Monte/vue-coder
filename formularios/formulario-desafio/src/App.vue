<template>
	<div id="app">

		<h1>Formulário Desafio</h1>

		<div class="conteudo">

			<form class="painel" v-if="!formEnviado">

				<div class="cabecalho">Formulário</div>
		
				<Rotulo nome="Nome">
					<input type="text" v-model="usuario.nome" required/>
				</Rotulo>

				<Rotulo nome="Sobrenome">
					<input type="text" v-model="usuario.sobrenome" required/>
				</Rotulo>

				<Rotulo nome="Email">
					<input type="email" v-model="usuario.email" required/>
				</Rotulo>

				<Rotulo nome="Senha">
					<input type="password" v-model="usuario.senha" required/>
				</Rotulo>

				<Rotulo nome="Armazenar Dados?">
					
					<div>
						<input type="radio" :value=true v-model="usuario.armazenar" /> Sim
					</div>
					
					<div>
						<input type="radio" :value=false v-model="usuario.armazenar" /> Não
					</div>

				</Rotulo>

				<button @click.prevent="enviar()">Enviar</button>

			</form>

			<div class="painel" v-else>

				<div class="cabecalho">Resultado</div>

				<NomeCompleto 
					:propsNome="usuario.nome"
					:propsSobrenome="usuario.sobrenome"
				/>

				<Rotulo nome="Email">
					<span>{{ usuario.email }}</span>
				</Rotulo>

				<Rotulo nome="Senha">
					<span>{{ usuario.senha }}</span>
				</Rotulo>

				<Rotulo nome="Dados Armazenados? ">
					<span>{{ usuario.armazenar === true? 'Sim': 'Não' }}</span>
				</Rotulo>


			</div>
		</div>
	</div>
</template>

<script>
import NomeCompleto from './components/NomeCompleto.vue';
import Rotulo from './components/Rotulo.vue';

export default {
	name: 'app',
	components: { Rotulo, NomeCompleto },

	data(){
		return {
			usuario: {
				nome: '',
				sobrenome: '',
				email: '',
				senha: '',
				armazenar: true,
			},

			formEnviado: false,

		}
	},

	methods: {
		enviar(){
			this.formEnviado = true
		}
	}
}
</script>

<style>

body {
	background-color: #ECECEC;
}

#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;

	display: flex;
	flex-direction: column;
}

.conteudo {
	display: flex;
}

.painel {
	flex: 1;
	background: #FFF;
	margin: 0px 10px;
	padding: 20px;
	border: 1px solid #AAA;
	border-radius: 5px;
}

.painel .cabecalho {
	width: 100%;
	background-color: #DDD;
	padding: 10px 0px;
	border-radius: 5px;
	font-size: 1.4rem;
}

#app form button {
	float: right;
	margin: 10px 0px;
	padding: 10px 20px;
	font-size: 1.4rem;
	border-radius: 5px;
	color: #FFF;
	background-color: #2196F3;
}

#app h1 {
	font-weight: 200;
	margin: 20px;
	padding: 0;
}

.mr-4 {
	margin-right: 40px;
}
</style>
