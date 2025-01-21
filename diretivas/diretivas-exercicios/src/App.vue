<template>

	<div id="app">

		<h1>Diretivas</h1>
		<hr>

		<!-- Renderiza o conteudo indicado na diretiva -->
		<p v-text="vText.texto"></p>

		<!-- Renderiza o conteudo, da tag. indicado na diretiva -->
		<p v-html="'Usando diretiva <strong>v-html</strong>'"></p>

		<hr>
		
		<h4 v-text="'Diretivas Personalizadas (Globalmente)'"></h4>
		<!-- Renderiza o conteudo da Tag de acordo com o indicado na criação da diretiva personalizada. OBS -> em caso de String, deve lembrar de passar com aspas simples -->

		<!-- Modificador, atraso, faz com que demore alguns segundos antes de atribuir o estilo da diretiva -->
		<p v-destaque.atraso="cor">Usando diretiva personalizada (Global)</p>

		<p v-destaque:fundo.atraso="cor">Usando diretiva personalizada (Global)</p>

		<hr>

		<h4 v-text="'Diretivas Personalizadas (Localmente)'"></h4>

		<!-- <p v-destaqueLocal.atrasar.alternar="cor">Usando diretiva personalizada (Local)</p>

		<p v-destaqueLocal:fundo.atrasar.alternar="cor">Usando diretiva personalizada (Local)</p> -->

		<!-- Passando valores por Objeto -->
		<p v-destaqueLocal
			:fundo
			.atrasar
			.alternar="{cor1: 'red', cor2: 'blue', atraso: 2000, intervalo: 200}"
		>
			Usando diretiva personalizada (Local)
		</p>

	</div>

</template>

<script>

	export default {

		// Registrando Diretivas Localmente
		directives: {
			// nome da diretiva
			'destaqueLocal': {

				// Montando (lembrando que no Vue 2, era o 'bind' no lugar do 'mounted')
				mounted(el, binding, vnode) {

					const aplicarCor = (cor) => {
						// Se existir o 'argumento' na diretiva. Add a cor no Background, senão na cor da fonte
						binding.arg === 'fundo'? 
							el.style.backgroundColor = cor : 
							el.style.color = cor

					}

					// Declarando variavel auxiliar
					let atrasar = 0;

					// Se o modificador 'atrasar' for adicionado, a variavel 'atrasar' recebe 3000
					if(binding.modifiers['atrasar']){
						atrasar = binding.value.atraso; // Recebido pelo Objeto
					};

					// Variaveis auxiliares do modificador 'alternar'
					let cor1 = binding.value.cor1; // Recebido pelo Objeto
					let cor2 = binding.value.cor2; // Recebido pelo Objeto
					let corAtual = cor1

					// Função Assincrona: Executar o código depois do tempo indicado na variavel 'atrasar'
					setTimeout(()=>{

						// Se o modificador 'alternar' for adicionado... 
						if(binding.modifiers['alternar']){

							// Executar código no Intervalo Indicado (1000)
							setInterval(() => {
								// Condicional de alternancia de valores de cor
								corAtual === cor1? corAtual = cor2 : corAtual = cor1;
								aplicarCor(corAtual)

							}, binding.value.intervalo) // Recebido pelo Objeto

						} else {
							aplicarCor(cor1)
						}
						
					}, binding.value.atraso) // Recebido pelo Objeto
				}

			}

		},

		data(){
			return {

				vText: {
					texto: 'Usando diretiva v-text',
				},

				cor: 'lightBlue'

			}
		},

	}

</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
	font-size: 2.5rem;
}
</style>