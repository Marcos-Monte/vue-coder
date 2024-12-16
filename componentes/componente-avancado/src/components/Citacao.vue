<template>
    
    <!-- Sem uso de Props, valor interpolado diretamente no Elemento Pai via 'Slots' -->
    <div class="citacao">

        <slot name="fonte"></slot>
        <slot name="texto"></slot>
        <slot name="autor"></slot>

    </div>

</template>

<script>
    export default {

        /* Ciclo de vida do Componente: Indicando no Console, quando o componente Dinâmico é criado e destruído */
        created(){
			console.log('Criado')
		},

		destroyed(){
			console.log('Destruido')
		},        
        
        /* Ciclo de vida do Componente: Indicando no Console, quando o componente Dinâmico é Ativdo ou Desativado */
        activated(){
			console.log('Ativando')
		},

		deactivated(){
			console.log('Desativando')
		},
    }
</script>

<style scoped>
    .citacao {
        border: 1px solid #DDD;
        background-color: rgba(0, 0, 0, .1);
        padding: 25px;
        max-width: 450px;
    }
</style>
