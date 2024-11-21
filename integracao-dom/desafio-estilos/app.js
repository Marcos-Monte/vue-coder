new Vue({
    el: '#desafio',
    data:{
        classe1: 'destaque',
        classe3: '',
        classe4: '',
        perigo: true,
        cor5: '',
        estilo5: {
            width: '150px',
            height: '150px',
        },
        width: '0%',
    },
    methods: {
        /* Efeito de alternar as estilizações a cada segundo */
        iniciarEfeito(){
            setInterval(() => {
                this.classe1 = 
                    this.classe1 === 'destaque'? 'encolher': 'destaque'
            }, 1000)
        },
        iniciarProgresso(){
            let valor = 0
            const temporizador = setInterval(() => {
                valor += 5
                this.width = `${valor}%`
                if(valor === 100) clearInterval(temporizador)
            }, 500)
        },
        setPerigo(event){
            if(event.target.value === 'true'){
                this.perigo = true 
            } else if (event.target.value === 'false'){
                this.perigo = false
            }
        }
    }
})