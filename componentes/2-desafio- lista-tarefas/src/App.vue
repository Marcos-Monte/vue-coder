<template>

	<div id="app">

		<h1>Tarefas</h1>

		<!-- Componente que renderiza o progresso das atividades finalizadas -->
		<Progresso 
			:propsProgresso="progresso"
		/>

		<!-- Este Componente (App), vai monitorar o Evento 'adicionarTarefa' no Componente Filho (InputTarefa), quando ele acontecer, vai 'acionar' o método 'tarefaAdd' -->
		<InputTarefa 
			@adicionarTarefa="tarefaAdd"
		/>

		<!-- Renderizando componente ListaTarefas.  Passando 'array' como Props para o componente-->
		<ListaTarefas 
			:propsTarefas="tarefas"
		/>

	</div>

</template>

<script>

	/* Importando componente Lista Tarefas para esse Componente */
	import ListaTarefas from './componentes/ListaTarefas.vue';
	import InputTarefa from './componentes/InputTarefa.vue';
	import Progresso from './componentes/Progresso.vue';

	/* Event Bus */
	import barramento from './barramento.js';

	export default {

		/* Registrando os Componentes Localmente */
		components: {ListaTarefas, InputTarefa, Progresso},

		data(){
			return {
				/* Array local com as 'tarefas' */
				/* tarefas: [
					{name: 'Lavar a louça', pendente: false},
					{name: 'Comprar Blusa', pendente: true},
				] */

				tarefas: [],
			}
		},

		/* Monitorando esses métodos e modifica apenas quando tem alguma alteração */
		computed: {

			progresso(){

				/* Quantidade total das tarefas */
				const qtdeTotal = this.tarefas.length

				/* Quantidade das tarefas concluidas */
				const qtdeConcluidas = this.tarefas.filter(
					(tarefa) => tarefa.pendente === false
				).length

				/* Método computado retorna a porcentagem das tarefas concluidas */
				return Math.round(qtdeConcluidas / qtdeTotal * 100) || 0

			}

		},

		/* Monitorando */
		watch: {

			/* Ao invés de 'método' vamos monitorar um 'Objeto' */
			tarefas: {
				/* Propriedade que indica a 'profundidade' do monitoramento (true = monitora TUDO, false = monitoramento superficial) */
				deep: true,
				handler(){
					/* Pega a 'lista de Tarefas' + Convertendo para String +  Adicionando no 'localStorage', a partir da chave 'tarefas' */
					localStorage.setItem('tarefas', JSON.stringify(this.tarefas))
				}

			}

		},

		methods: {

			/* Método que tem como 'start' o Evento do Componente Filho (InputTarefa) */
			tarefaAdd(tarefa){
				
				/* Filtrando Array 'tarefas' e criando novo array com 'Objetos' duplicados */
				const duplicados = this.tarefas.filter(t => t.name === tarefa.name)

				/* Se o Array 'duplicados' estiver vazio */
				if(duplicados < 1){
					/* Adicionar novo 'objeto' (com chaves e valores) dentro do Array 'tarefas' */
					this.tarefas.push({
						name: tarefa.name,
						pendente: tarefa.pendente || true
					})
				}

			}

		},

		/* Método de Ciclo de Vida do Componente */
		/* Assim que o componente é criado, começa a monitorar os Eventos indicados */
		created(){

			/* Monitorando o Evento 'tarefaExcluida' */
			barramento.$on('tarefaExcluida', (tarefa) => {

				/* Armazena o 'indice' da tarefa indicada */
				const indice = this.tarefas.indexOf(tarefa)

				/* Se a o 'indice' for positivo, retirar 1 elemento a partir dele de dentro do 'array' */
				if(indice >= 0) this.tarefas.splice(indice, 1)

			}),

			/* Monitorando o Evento 'tarefaExcluida' */
			barramento.$on('statusAlterado', (tarefa) => {

				/* Armazena o 'indice' da tarefa indicada */
				const indice = this.tarefas.indexOf(tarefa)

				/* Altera o valor 'boolean' da propriedade indicada. */
				this.tarefas[indice].pendente = !this.tarefas[indice].pendente

			});

			/* Pega os dados salvos no navegador: busca os dados salvos com a chave 'tarefas'. */
			const json = localStorage.getItem('tarefas');

			/* Transforma o texto em dados: converte o texto recuperado do localStorage para um formato utilizável, como um array. */
			const array = JSON.parse(json);

			/* Verifica se é realmente uma lista: */
			if(Array.isArray(array)){

				this.tarefas = array

			} else {
				
				this.tarefas = []
			}

		}
		
	}
</script>

<style>
	body {
		font-family: 'Lato', sans-serif;
		background: linear-gradient(to right, rgb(22, 34, 42), rgb(58, 96, 115));
		color: #FFF;
	}

	#app {
		display: flex;
		flex: 1;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 100vh;
	}

	#app h1 {
		margin-bottom: 5px;
		font-weight: 300;
		font-size: 3rem;
	}
</style>
