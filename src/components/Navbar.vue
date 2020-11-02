<template>
<v-bottom-navigation :value="1" color="#FFBA08" background-color="#000" grow dark id="Bottom_navbar">
    <v-btn>
        <span>Cervezas</span>

        <v-icon>mdi-beer</v-icon>
    </v-btn>

    <v-btn>
        <span>Buscar</span>

        <v-icon>mdi-magnify</v-icon>
    </v-btn>

    <v-btn>
        <span>Mi carro</span>

        <v-badge :content="6" color="#000" bordered>
            <v-icon>mdi-cart</v-icon>
        </v-badge>
    </v-btn>

    <v-btn>
        <span>Mi cuenta</span>

        <v-icon>mdi-account-circle</v-icon>
    </v-btn>

</v-bottom-navigation>
</template>

<script>
export default {
    name: 'Navbar',
    data: () => {

    }
}
</script>

<style lang="scss">
#Bottom_navbar {
    position: fixed;
    z-index: 999;
    height: 200px;
    box-shadow: 0 0 20px #000;
}
</style>
