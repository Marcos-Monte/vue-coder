<template>

	<div id="app" class="container">

		<h2>HTTP com Axios</h2>

		<!-- Componente Bootstrap-vue que mostra um alerta com uma mensagem após uma ação executada -->
		<b-alert 
			:show="500"
			v-for="mensagem in mensagens" 
			:key="mensagem.texto"
			:variant="mensagem.tipo"
		>
			{{ mensagem.texto }}
		</b-alert>

		<!-- Componente do Boostrap-Vue -->
		<b-card :class="classe? 'registrando': 'alterando'">
			<!-- Funciona como o Fieldset -->
			<b-form-group label="Nome: ">
				<!-- Input da propriedade 'nome'-->
				<b-form-input 
					type="text" 
					size="lg"
					placeholder="Informe o Nome"
					v-model="usuario.nome"
					required
				/>
				
			</b-form-group>

			<!-- Funciona como o Fieldset -->
			<b-form-group label="Email: ">
			
			<!-- Input da propriedade 'email'-->
			<b-form-input 
				type="email" 
				size="lg"
				placeholder="Informe o Email"
				v-model="usuario.email"
			/>

			</b-form-group>

			<hr>

			<!-- Aciona o método de 'salvamento' de novo registro no Banco de Dados -->
			<b-button 
				size="lg"
				variant="primary"
				@click="postEPutDados()"
			>
				Salvar
			</b-button>

		</b-card>

		<hr>

		<h2>Lista de Usuários</h2>

		<b-list-group>

			<!-- Se a lista de Usuários não estiver vazia, mostrar o elemento. -->
			<template v-if="usuarios">

				<!-- Percorrer o Array 'usuarios' -->
				<b-list-group-item v-for="(usuario, index) in usuarios" :key="index">
					<!-- Renderizando os dados de cada 'usuario' de dentro de 'usuarios' -->
					<strong>Nome: {{ usuario.nome }} </strong> <br>
					<strong>Email: {{ usuario.email }}</strong> <br>
					<strong>ID: {{ index }}</strong>
					
					<!-- Renderiza uma Divisão -->
					<hr>

					<!-- Ao clicar, insere o valor 'index' na função 'carregar' que vai setar na variavel 'id' em data -->
					<b-button
						variant="warning"
						size="lg"
						@click="carregar(index)"
					>
						Alterar
					</b-button>

					<b-button
						variant="danger"
						size="lg"
						class="ml-2"
						@click="deleteDado(index)"
					>
						Excluir
					</b-button>
					
				</b-list-group-item>

			</template>

			<!-- Se a lista de Usuários estiver vazia, mostrar o elemento. -->
			<template v-else>
				<p>Não há usuários cadastrados =/</p>
			</template>

		</b-list-group>

	</div>

</template>

<script>

	export default {

		data(){

			return {

				// Objeto que será enviado para o Banco de Dados
				usuario: {
					nome: '',
					email: '',
				},

				// Lista de Usuários, inicia a aplicação ativando o 'método' de buscar dados no banco
				usuarios: this.getDados(),

				// Irá armazenar o ID de um usuário de dentro do Banco de Dados
				id: null,

				// Classe de estilização do 'card': true = '.registrando' ... false '.alterando'
				classe: true,

				// Array que vai receber um objeto de mensagens  
				mensagens: [],

			}

		},

		methods: {

			// Método de Limpar 
			limparDados(){
				this.usuario = {}
				this.id = null
				this.mensagem = []
			},

			// Apagar Alerta
			limparAlerta(){
				setTimeout(() =>{
					this.mensagens = []
				}, 1500)
			},	

			// Método que seleciona um Registro dentro da Lista de Registros (BD)
			carregar(valor){
				// Variavel que garante que o Registro está sendo Selecionado
				this.id = valor
				// Adiciona o Registro selecionado dentro do Objeto Indicado (Será alterado)
				this.usuario = {...this.usuarios[valor]}
				this.classe = false // Atualiza estilo do card
			},

			// Método HTTP DELETE - 'caminho/id.json' (vai receber o id que identifica qual o item que será deletado)
			deleteDado(valor){
				this.$http.delete(`/usuarios/${valor}.json`)
					.then(() => {
						// Atendendo a 'Promisses'
						this.limparDados() // Limpar Dados do Formulário

						// Mensagem de Sucesso
						this.mensagens.push({
							texto: 'Registro Excluído com Sucesso!',
							tipo: 'success'
						})

						this.limparAlerta(); // Atualiza o alerta

						this.getDados(); // Atualiza a lista de usuários
						this.classe = true; // Atualiza estilo do card


					}).catch(() => {
						// Mensagem de Erro
						this.mensagens.push({
							texto: 'Não foi possivel deletar o registro!' ,
							tipo: 'danger'
						})

						this.limparAlerta(); // Atualiza o alerta

					})
			},

			// Método de persistencia e alteração dos dados no Banco de Dados
			postEPutDados(){
				// Condicional Ternario, indica o 'método' baseado na entrega do dado 'id'
				const metodoHTTP = this.id ? 'patch': 'post';
				// Condicional Ternario, indica o 'final da URL (caminho)' baseado na entrega do dado 'id'
				const finalURL = this.id ? `/usuarios/${this.id}.json`: '/usuarios.json'

				// Exemplo: axios.metodo(caminho, objeto)
				this.$http[metodoHTTP](finalURL, this.usuario).then(() => {
					// Atendendo a 'Promisses'
					this.limparDados() // Limpar Dados do Formulário

					// Mensagem de Sucesso
					this.mensagens.push({
						texto: 'Operação realizada com sucesso!',
						tipo: 'success'
					})

					this.limparAlerta(); // Atualiza o alerta

					this.getDados(); // Atualiza a lista de usuários
					this.classe = true; // Atualiza estilo do card
				})
				
			},

			// Método de busca e leitura dos dados no Banco de Dados
			getDados(){
				
				// Método HTTP GET - 'caminho.json'
				this.$http.get('/usuarios.json').then((resposta) => {
					this.usuarios = resposta.data
					
				}).catch(() => {
					this.mensagens.push({
						texto: 'Não foi possível carregar a lista!',
						tipo: 'warning'
					})

					this.limparAlerta(); // Atualiza o alerta
					
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

	#app p {
		text-align: center;
		margin: 50px;
		font-size: 2rem;
	}

	.alterando {
		background-color: #e0bf5c;;
	}

	.registrando {
		background-color: #fff;
	}

</style>
