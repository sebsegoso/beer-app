<template>
  <div>
    <div class="pag_header">
      <h1>Mi carro</h1>
    </div>
    <v-container class="pag_body mx-auto py-4">
      <div v-if="this.carrito.length == 0" class="cart_empty d-flex align-center justify-center">
        <h2  class="text-center">No hay productos agregados en tu carrito</h2>
      </div>
      <v-row v-else>
        <!--ITEMS-->
        <v-col cols="12" md="8">
          <div
            v-for="(producto, i) in carrito"
            :key="i"
            class="cart_item elevation-5 rounded-xl"
          >
            <div class="cart_item_row">
              <div class="cart_item_name">
                <p>{{ producto.data.cerveceria }}</p>
                <p>{{ producto.data.nombre }}</p>
              </div>

              <div class="cart_item_quantity">
                <v-row justify="space-between" align="center">
                  <v-btn
                    fab
                    dark
                    x-small
                    @click="dismiuirCantidad(producto.id)"
                    :disabled="producto.data.cantidad <= 1"
                  >
                    <v-icon>mdi-minus</v-icon>
                  </v-btn>
                  <span>{{ producto.data.cantidad }}</span>
                  <v-btn
                    fab
                    dark
                    x-small
                    @click="sumarCantidad(producto.id)"
                    :disabled="producto.data.cantidad >= producto.data.stock"
                  >
                    <v-icon>mdi-plus</v-icon>
                  </v-btn>
                </v-row>
              </div>

              <div class="cart_item_price">
                <h4>${{ precioEnMiles(producto.data.precio) }}</h4>
              </div>

              <div class="cart_item_delete">
                <v-btn
                  x-small
                  dark
                  fab
                  color="red"
                  @click="quitarDelCarrito(producto.id)"
                >
                  <v-icon>mdi-delete</v-icon>
                </v-btn>
              </div>
            </div>
          </div>
        </v-col>
        <!--TOTALES -->
        <v-col class="pl-2"> 
          <Total />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";
import Total from '@/components/Total.vue'
export default {
  name: "Carro",
  data() {
    return {
      
    };
  },
  components:{
    Total
  },
  methods: {
    ...mapActions("Cart", [
      "quitarDelCarrito",
      "sumarProducto",
      "descontarProducto",
    ]),
    sumarCantidad(id) {
      this.sumarProducto(id);
    },
    dismiuirCantidad(id) {
      this.descontarProducto(id);
    },
  },
  computed: {
    ...mapState("Cart", ["carrito"]),
    ...mapGetters(["precioEnMiles"]),
    precio() {
      return this.precioEnMiles(this.cerveza.data.precio);
    },
  },
  title() {
    return `Mi carrito`;
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/main.scss";

.cart_item {
  text-align: center;
  width: 100%;
  // min-height: 6rem;
  background-color: $main-white;
  color: $main-black;
  margin: 1rem 0;
  font-size: $text-caption;
  padding: 1rem 0;

  &_row {
    display: flex;
    justify-content: space-around;
    align-items: center;
    p {
      margin: 0;
    }
  }
  &_quantity {
    span {
      padding: 0.25rem;
      margin: 0 0.25rem;
    }
  }
  &_price {
    font-size: $text-caption;
    font-weight: 700;
  }
}

.cart_empty{
  height: 30vh;
}

@media (min-width: 576px) {
  .cart_item {
    font-size: $text-body;
    &_name {
      width: 45%;
    }
    &_quantity {
      font-size: $text-title2;

      width: 25%;
    }
    &_price {
      width: 15%;
      font-size: $text-body;
    }
    &_delete {
      width: 15%;
    }
  }
}
</style>
