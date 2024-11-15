const imagem = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRSMbg-3Cw94uFhtzxcblCpPFjxdavQIOV4A&s'

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