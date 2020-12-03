<template>
  <div class="d-flex justify-center align-center card">
    <v-card
      class="card_product ma-md-3 rounded-xl elevation-5 d-flex flex-column justify-space-around"
      dark
      width="100%"
      :id="`DetalleProducto${producto.data.codigo}`"
    >
      <v-container class="pa-1">
        <div>
          <router-link
            :to="`/cervezas/${producto.data.cerveceria}/${producto.data.path}`"
          >
            <v-img
              :src="producto.data.foto"
              class="rounded-t-xl"
              width="100%"
              aspect-ratio="1"
            ></v-img>

            <v-card-title class="card_title">{{ producto.data.nombre }} </v-card-title>
            <v-card-subtitle class="pb-1" v-if="producto.data.cerveceria">
              <router-link :to="`/cervezas/${producto.data.cerveceria}`">{{
                producto.data.cerveceria
              }}</router-link>
            </v-card-subtitle>
            <v-card-subtitle class="pb-1" v-if="producto.data.estilo">{{
              producto.data.estilo
            }}</v-card-subtitle>
            <v-card-text class="text-truncate pb-3"
              >{{ producto.data.resena }}
            </v-card-text>
            <v-card-text v-if="producto.data.precio" class="card_price pt-0">
              <h3>${{ precio }}</h3>
            </v-card-text>
          </router-link>
        </div>
        <div>
          <v-card-actions>
            <v-spacer />
            <v-btn
              v-if="producto.data.stock <= 0"
              small
              dark
              color="#efc251"
              width="80%"
              class="elevation-10 rounded-xl"
              disabled
            >
              Producto agotado
            </v-btn>
            <v-btn
              v-else-if="!producto.data.cart"
              small
              light
              color="#fff"
              width="80%"
              class="elevation-10 rounded-xl "
              @click="anadirAlCarrito(producto.id)"
              :id="`BtnCard${producto.data.codigo}`"
            >
              <v-icon>mdi-plus</v-icon>
              Añadir
            </v-btn>
            <v-btn
              v-else
              small
              light
              color="#efc251"
              width="80%"
              class="elevation-10 rounded-xl"
              @click="quitarDelCarrito(producto.id)"
            >
              <v-icon>mdi-check</v-icon>
              Agregado
            </v-btn>
            <v-spacer />
          </v-card-actions>
        </div>
      </v-container>
    </v-card>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Card",
  props: ["producto"],
  computed: {
    ...mapGetters(["precioEnMiles"]),
    precio() {
      return this.precioEnMiles(this.producto.data.precio);
    },
  },
  methods: {
    ...mapActions("Cart", ["anadirAlCarrito", "quitarDelCarrito"]),
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/main.scss";

@keyframes fadein {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.card {
  animation-name: fadein;
  animation-duration: 1.5s;
  animation-timing-function: ease;
  &_title{
    font-size: 1rem;
    font-weight: 900;
  }
  &_price {
    text-shadow: 0 0 4px $main-black, 0 0 2px $main-black, 0 0 8px $main-yellow;
  }

  &_product {
    transition: filter 0.5s;
    text-decoration: none;
    max-width: 260px;
    // height: 500px;

    a {
      color: $main-white;
    }

    &:hover {
      filter: drop-shadow(0 0 5px $main-black);
    }
  }
}

// @media (min-width: 576px) {
//   .card_product {
//     height: 560px;
//   }
// }
</style>
