<template>

    <nav class="menu">
        <!-- Componente de 'router', trás um link e faz o tratamento por baixo dos panos para não ser necessário fazer requisições HTTP. (característica de aplicações SPA) -->

        <!-- Lista de Links de Navegação -->
        <ul>
            <!-- OBS: a propriedade 'to' é a rota do componente que será renderizado -->
            <!-- OBS: a propriedade 'tag=li' quer dizer que o 'router-link' será um item de uma lista -->
            <!-- OBS: a propriedade 'active-class="active"' garante que o 'estilo' de link ativo seja adicionado (definido no css )-->
            <!-- OBS: a propriedade 'exact' garante que o estilo 'active' seja implementado apenas se a rota for 'exatamente' A INDICADA (Uso indicado para a rota '/') -->
            <router-link to="/" tag="li" active-class="active" exact> 
                <!-- Tag 'encora' envolvendo a Label -->
                <a>Inicio</a> 
            </router-link>

            <!-- OBS: a propriedade 'to' é a rota do componente que será renderizado -->
            <!-- OBS: a propriedade 'tag=li' quer dizer que o 'router-link' será um item de uma lista -->
            <!-- OBS: a propriedade 'active-class="active"' garante que o 'estilo' de link ativo seja adicionado (definido no css )-->
            
            <!-- Usuario recebe um ID -->
            <router-link to="/usuario/1" tag="li" active-class="active">
                <!-- Tag 'encora' envolvendo a Label -->
                <a>Usuario 1</a>
            </router-link>

            <!-- OBS: a propriedade 'to' é a rota do componente que será renderizado -->
            <!-- OBS: a propriedade 'tag=li' quer dizer que o 'router-link' será um item de uma lista -->
            <!-- OBS: a propriedade 'active-class="active"' garante que o 'estilo' de link ativo seja adicionado (definido no css )-->
            
            <!-- Usuario recebe um ID -->
            <router-link to="/usuario/2" tag="li" active-class="active">
                <!-- Tag 'encora' envolvendo a Label -->
                <a>Usuario 2</a>
            </router-link>

            <router-link to="/usuario/3" tag="li" active-class="active">
                <!-- Tag 'encora' envolvendo a Label -->
                <a>Usuario 3</a>
            </router-link>

        </ul>

    </nav>

</template>

<script>

    export default {



    }

</script>