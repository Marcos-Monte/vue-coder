const imagem = 'http://files.cod3r.com.br/curso-vue/vue.jpg'

new Vue({
    el: '#desafio',
    data: {
        nome: 'Marcos',
        idade: 35,
        linkImagem: imagem
    },
    methods: {
        numeroRandom: function(){
            const numero = Math.random().toFixed(1);
            return numero
        },
        alterarNome(event){
            this.nome = event.target.value
        }
    }
})