<template>
<div class="mx-auto">
    <v-card class="card_product ma-3 rounded-xl elevation-5" dark>
        <router-link :to="enlace">
            <v-img :src="imagen" class="rounded-t-xl" width="100%" aspect-ratio="1"></v-img>
            <v-container class="pa-1">
                <v-card-title>{{ titulo }} </v-card-title>
                <v-card-subtitle v-if="estilo">{{ estilo }} </v-card-subtitle>
                <v-card-text class="text-truncate">{{ descripcion }} </v-card-text>
                <v-card-title v-if="precio" class="card_price text-h5 text-center">${{ precioEnMiles }}</v-card-title>
            </v-container>
        </router-link>
        <v-card-actions>
            <v-spacer />
            <v-btn small light color="#fff" width="80%" class="elevation-10 rounded-xl">
                <v-icon>mdi-plus</v-icon>
                Añadir
            </v-btn>
            <v-spacer />
        </v-card-actions>
        <br />
    </v-card>
</div>
</template>

<script>
export default {
    name: 'Card',
    props: ['imagen', 'titulo', 'estilo', 'descripcion', 'precio', 'enlace'],
    computed: {
        precioEnMiles() {
            return this.precio.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
        },
    },
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/main.scss";

.card_product {
    transition: filter 0.5s;
    text-decoration: none;
    max-width: 260px;

    a {
        color: $main-white;
    }

    &:hover {
        filter: drop-shadow(0 0 5px $main-black);
    }
}
</style>
