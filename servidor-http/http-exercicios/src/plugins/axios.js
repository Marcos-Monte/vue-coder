// Import de dependencias
import axios from 'axios';
import Vue from 'vue';

// Registrando a URL (base) do Banco de Dados (Referencia Global). // URL do Firebase
// axios.defaults.baseURL = 'https://curso-vue-1130f-default-rtdb.firebaseio.com/'; 

// Adicionando Headers para o uso do Axios de forma Global
// axios.defaults.headers.common['Authorization']  = 'abc123' // Common = Toda requisição feita, mandar a chanve 'Autorization
// axios.defaults.headers.get['Accepts'] = 'application/json' // Em requisições GET só aceitamos respostas do tipo 'application/json'

Vue.use({
    install(Vue) {
        // Propriedade $http disponível de forma global, apontando para o 'axios'
        // Vue.prototype.$http = axios

        // Propriedade $http disponível especificamente para a URL base, apontando para o 'axios'
        // A ideia é de que podemos criar configurações específicas para cada 'instancia' do Axios.
        Vue.prototype.$http = axios.create({
            baseURL: 'https://curso-vue-1130f-default-rtdb.firebaseio.com/',

            headers: {
                "Authorization": 'abc123',
                "Content-Type": "application/json"
            }

        })

        // A ideia é interceptar 'globalmente' todas as requisições HTTP
        Vue.prototype.$http.interceptors.request.use(requisicao => {
            // Mostra no Console a requisição
            console.log(requisicao.method)
            // Config é o nome indicado na documentação
            return requisicao

        }, error => Promise.reject(error)) // Rejeitando a Promise em caso de erro

        Vue.prototype.$http.interceptors.response.use(resposta => {
            
            // const array = []

            // for(let chave in resposta.data){
            //     array.push({id: chave, ...resposta.data[chave]}) // Forma menos manual
            //     //array.push({id: chave, nome: resposta.data[chave].nome, email: resposta.data[chave].email}) // Forma mais manual
            // }

            // resposta.data = array
            // console.log( resposta.data)
            return resposta

        }, error => Promise.reject(error))

    }
})