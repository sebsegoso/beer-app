<template>
<div class="mx-auto">
    <v-card class="card_product ma-3 rounded-xl elevation-5" dark>
        <router-link :to="enlace">
            <v-img :src="imagen" class="rounded-t-xl" width="100%" aspect-ratio="1"></v-img>
            <v-container class="pa-1">
                <v-card-title>{{ titulo }} </v-card-title>
                <v-card-subtitle class="pb-1" v-if="cerveceria">{{ cerveceria }}</v-card-subtitle>
                <v-card-subtitle class="pb-1" v-if="estilo">{{ estilo }}</v-card-subtitle>
                <v-card-text class="text-truncate pb-3">{{ descripcion }}
                </v-card-text>
                <v-card-text v-if="precio" class="card_price pt-0">
                    <h3>${{ precioEnMiles }}</h3>
                </v-card-text>
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
    name: "Card",
    props: ["imagen", "titulo", 'cerveceria' ,  "estilo", "descripcion", "precio", "enlace"],
    computed: {
        precioEnMiles() {
            return this.precio.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        },
    },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/main.scss";

.card {
    &_price {
        text-shadow: 0 0 4px $main-black, 0 0 2px $main-black, 0 0 8px $main-yellow;
    }

    &_product {
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
}
</style>
