import { createApp } from 'vue'; /* Função do Vue 3 */
import App from './App.vue'; /* Componente Principal */
import Contadores from './Contadores.vue'; /* Componente importado de forma Global */

createApp(App) /* Cria a aplicação */
    .component('app-contadores', Contadores) /* Registra o componente globalmente */
    .mount('#app') /* Monta a aplicação */
