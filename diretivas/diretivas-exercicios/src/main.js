import { createApp } from 'vue';
import App from './App.vue';

// Instanciando o Vue
const app = createApp(App);

// Criando uma Diretiva personalizada
app.directive('destaque', {

    // No Vue 2, era usado o 'bind' no lugar do 'mounted'
    // Apenas o 'el' sobre alteração. O restante é indicado apenas usar para leitura
    mounted(el, binding, vnode){

        // O elemento vai ter o 'background' estilizado na cor indicada
        // el.style.backgroundColor = 'lightGreen'

        // Substituindo o valor por 'binding.value'. OBS -> Deve passar o valor como String
        // el.style.backgroundColor = binding.value

        // Declarando variavei de atraso
        let atraso = 0;

        // Condicional: Se o modificador 'atraso' for atribuido a 'diretiva personalizada'
        // A variavel 'atraso' recebe o valor de 3000 (numero de segundos)
        if(binding.modifiers['atraso']){
            atraso = 5000
        };

        // Função Assincrona
        setTimeout(()=> {

            // Se o 'argumento' da diretiva for 'fundo'
            if(binding.arg === 'fundo'){
                // Atribuir a cor ao 'background'
                el.style.backgroundColor = binding.value
    
            } else {
                // Senão, atribuir a cor da fonte
                el.style.color = binding.value
    
            }

        }, atraso)

    }

});


// Montando a Vue Instance Principal
app.mount('#app')
