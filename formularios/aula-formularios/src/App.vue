<template>
	<!-- Container Pai, funciona como o 'body' -->
	<div id="app">

		<h1>Registrar Reclamação</h1>

		<!-- Container flex que envolve os dois 'forms' -->
		<div class="conteudo">

			<!-- Painel de inserção de dados pelo Usuario (form)-->
			<!-- Se a variável 'enviado' não for true -->
			<form class="painel" v-if="!enviado">

				<div class="cabecalho">Formulário</div>

				<Rotulo nome="E-mail">
					<input type="email" v-model.lazy.trim="usuario.email" required /> <!-- V-model faz o Two-way data binding -->
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
					<span class="mr-4">
						<!-- Ao clicar no 'ckeckbox', o 'value' será adicionado no 'array = usuario.caracteristicas'  -->
						<input type="checkbox" value="reproduzivel" v-model="usuario.caracteristicas" /> Reproduzível
					</span>
					<span>
						<!-- Ao clicar no 'ckeckbox', o 'value' será adicionado no 'array = usuario.caracteristicas'  -->
						<input type="checkbox" value="intermitente" v-model="usuario.caracteristicas" /> Intermitente
					</span>
				</Rotulo>

				<Rotulo nome="Qual produto?">
					<!-- No uso de Radio, normalmente, pode ser selecionado apenas um valor  -->
					<!-- O que garante isso é o local de armazenamento em comum: v-model="usuario.produto" -->
					<span class="mr-4">
						<!-- Ao clicar no 'radio', o 'value' será adicionado em  'usuario.produto'  -->
						<input type="radio" value="web" v-model="usuario.produto" /> Web
					</span>

					<span class="mr-4">
						<!-- Ao clicar no 'radio', o 'value' será adicionado em  'usuario.produto'  -->
						<input type="radio" value="mobile" v-model="usuario.produto" /> Mobile
					</span>

					<span>
						<!-- Ao clicar no 'radio', o 'value' será adicionado em  'usuario.produto'  -->
						<input type="radio" value="outro" v-model="usuario.produto" /> Outro
					</span>

				</Rotulo>

				<Rotulo nome="Prioridade">
					<!--  -->
					<select v-model="usuario.prioridade">
						<!-- Opções são renderizadas a partir de uma lista de Objetos em 'data' -->
						<!-- A seleção de uma opção popula 'value' com o objeto, que será armazenado no local indicado por 'v-model' -->
						<option 
							v-for="prioridade in prioridades"
							:key="prioridade.codigo"
							:value="prioridade"
						>
							{{prioridade.codigo}} - {{ prioridade.nome }}
						</option>
					</select>
				</Rotulo>

				<Rotulo nome="Primeira Reclamação?">
					<!-- Componente Personalizado.
					Lembrete: Usamos o 'v-model' e isso obriga a ter um INPUT. Esse evento será emitido no componente Escolha -->
					<Escolha 
						v-model="usuario.escolha"
						:propsLigado="usuario.escolha"
					/>
				</Rotulo>

				<hr>
				
				<!-- Botão ao ser clicado vai chamar a função  'enviar'-->
				<button @click.prevent="enviar()">Enviar</button>
			</form>

			<!-- Painel de Visualização dos dados armazenados. -->
			<!-- Se a variável 'enviado' for true -->
			<div class="painel" v-else>

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
					<!-- <span style="white-space: pre;">{{ usuario.msg }}</span> -->
					<span><pre>{{ usuario.msg }}</pre></span>
				</Rotulo>

				<Rotulo nome="Marque as Opções">
						<!-- Lista não ordenada que: Cada item irá imprimir um valor de dentro do array 'usuario.caracteristicas' -->
						<ul type="none">
							<li 
								v-for="(caracteristica, index) in usuario.caracteristicas"
								:key="index"
							>
								{{ caracteristica.toUpperCase() }}
							</li>
						</ul>
					
				</Rotulo>

				<Rotulo nome="Qual produto?">
					<span>{{ usuario.produto.toUpperCase() }}</span>
				</Rotulo>

				<Rotulo nome="Prioridade">
					<!-- Resultado renderizado -->
					<span>{{usuario.prioridade.codigo}} - {{ usuario.prioridade.nome }}</span>
				</Rotulo>

				<Rotulo nome="Primeira Reclamação?">
					<!-- Resultado renderizado -->
					<span>{{ usuario.escolha === true? 'Sim': 'Não' }}</span>
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
			},

		},

		data(){
			return {
				// Objeto com cada uma das propriedades
				usuario: {
					email: '',
					senha: '',
					idade: '', // Podemos inicializar o objeto com um valor default
					msg: '',
					caracteristicas: [],
					produto: 'web',
					prioridade: 1,
					escolha: true
				},

				// Array de Objetos como opções de seleção (select e option)
				prioridades: [
					{codigo: 1, nome: 'Baixa'},
					{codigo: 2, nome: 'Moderada'},
					{codigo: 3, nome: 'Alta'},
				],

				// Variavel que indica se o 'formulário' foi enviado ou não. Se for vai mostrar a visualização dos dados
				enviado: false,
			}
		},

		methods: {
			enviar(){
				this.enviado = true
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
