new Vue({
    el: '#desafio',
    data: {
        status: true,
        livro: {
            titulo: 'O senhor dos Anéis',
            autor: 'J.R.R. Tolkiens',
            volume: '3',
        },
        aluno: {
            id: 10,
            nome: 'Marcos',
            notas: [7.5, 8.9, 2.5, 6.0],
        }
    },
    methods: {
        calcularMedia(array){
            let soma = 0;
            for(let valor of array){
                soma += valor
            }

            return (soma / array.length).toFixed(2)
        }
    }
})