<template>

	<div id="app" class="container">

		<h2>HTTP com Axios</h2>

		<!-- Componente do Boostrap-Vue -->
		<b-card>
			<!-- Funciona como o Fieldset -->
			<b-form-group label="Nome: ">
				<!-- Input -->
				<b-form-input 
					type="text" 
					size="lg"
					placeholder="Informe o Nome"
					v-model="usuario.nome"
				/>
				
			</b-form-group>

			<!-- Funciona como o Fieldset -->
			<b-form-group label="Email: ">
			
			<!-- Input -->
			<b-form-input 
				type="email" 
				size="lg"
				placeholder="Informe o Email"
				v-model="usuario.email"
			/>

			</b-form-group>

			<hr>

			<b-button 
				size="lg"
				variant="primary"
				@click="salvar()"
			>
				Salvar
			</b-button>

			<b-button 
				size="lg"
				variant="success"
				class="ml-5"
				@click="mostrar()"
			>
				Mostrar Usuarios
			</b-button>

		</b-card>

		<hr>

		<h2>Lista de Usuários</h2>

		<b-list-group>

			<b-list-group-item v-for="(usuario, index) in usuarios" :key="index">

				<strong>Nome: {{ usuario.nome }} </strong> <br>
				<strong>Email: {{ usuario.email }}</strong> <br>
				<strong>ID: {{ index }}</strong>

			</b-list-group-item>

		</b-list-group>

	</div>

</template>

<script>

	export default {

		data(){

			return {

				usuario: {
					nome: '',
					email: '',
				},

				usuarios: [],

			}

		},

		methods: {

			limparDados(){
				this.usuario = {}
			},

			// Método e persistencia dos dados no Banco de Dados
			salvar(){
				// Método HTTP POST - tabela.json - objeto inserido no BD
				this.$http.post('usuarios.json', this.usuario )
					.then(
						this.limparDados() // Em resposta a 'promise' chamar o método de Limpar Dados do Formulário
					)
			},

			mostrar(){
				this.$http.get('/usuarios.json')
					.then((resposta) => {
						this.usuarios = resposta.data
						
					})
					
			}
		}

	}

</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
	font-size: 1.5rem;
}

#app h2 {
	text-align: center;
	margin: 50px;
}
</style>
