<template>
	<!-- Container Pai, funciona como o 'body' -->
	<div id="app">

		<h1>Registrar Reclamação</h1>

		<!-- Container flex que envolve os dois 'forms' -->
		<div class="conteudo">

			<!-- Painel de inserção de dados pelo Usuario (form)-->
			<form class="painel">

				<div class="cabecalho">Formulário</div>

				<Rotulo nome="E-mail">
					<input type="text" v-model.lazy.trim="usuario.email" required /> <!-- V-model faz o Two-way data binding -->
				</Rotulo>

				<Rotulo nome="Senha">
					<input type="password" v-model="usuario.senha" required /> <!-- V-model faz o Two-way data binding -->
				</Rotulo>

				<Rotulo nome="Idade">
					<input type="number" v-model.number="usuario.idade" required /> <!-- V-model faz o Two-way data binding -->
				</Rotulo>

				<Rotulo nome="Mensagem">
					<textarea name="" cols="30" rows="5" v-model="usuario.msg" required></textarea> <!-- V-model faz o Two-way data binding -->
				</Rotulo>

				<Rotulo nome="Características do Problema">
					<span class="mr-4"><input type="checkbox" value="reproduzivel"> Reproduzível</span>
					<span><input type="checkbox" value="intermitente"> Intermitente</span>
				</Rotulo>

				<Rotulo nome="Qual produto?">
					<span class="mr-4"><input type="radio"> Web</span>
					<span class="mr-4"><input type="radio"> Mobile</span>
					<span><input type="radio"> Outro</span>
				</Rotulo>

				<Rotulo nome="Prioridade">
					<select name="" id="">
						<option></option>
					</select>
				</Rotulo>

				<Rotulo nome="Primeira Reclamação?">
					<Escolha />
				</Rotulo>

				<hr>
				
				<button>Enviar</button>
			</form>

			<!-- Painel de Visualização dos dados armazenados. -->
			<div class="painel">

				<div class="cabecalho">Resultado</div>

				<Rotulo nome="E-mail">
					<span>{{ usuario.email }}</span>
				</Rotulo>

				<Rotulo nome="Senha">
					<span>{{ usuario.senha }}</span>
				</Rotulo>

				<Rotulo nome="Idade">
					<span>{{ usuario.idade }} anos - tipo do dado {{ tipoIdade }}</span>
				</Rotulo>

				<Rotulo nome="Mensagem">
					<span>{{ usuario.msg }}</span>
				</Rotulo>

				<Rotulo nome="Marque as Opções">
					<span>???</span>
				</Rotulo>

				<Rotulo nome="Qual produto?">
					<span>???</span>
				</Rotulo>

				<Rotulo nome="Prioridade">
					<span>???</span>
				</Rotulo>

				<Rotulo nome="Primeira Reclamação?">
					<span>???</span>
				</Rotulo>

			</div>

		</div>

	</div>

</template>

<script>

/* Imports dos Componentes */
import Escolha from './components/Escolha.vue';
import Rotulo from './components/Rotulo.vue';

	export default {
		name: 'app',
		/* Registrando componentes */
		components: { Rotulo, Escolha },

		// Método Computado, Atualiza sempre que houver modificações.
		computed: {
			// Renderiza o 'tipo' de dado da propriedade de 'usuario.idade'
			tipoIdade(){
				return typeof this.usuario.idade
			}
		},

		data(){
			return {
				// Objeto com cada uma das propriedades
				usuario: {
					email: '',
					senha: '',
					idade: '', // Podemos inicializar o objeto com um valor default
					msg: '',
				}
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
