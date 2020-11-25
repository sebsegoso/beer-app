<template>
  <div>
    <div class="pag_header">
      <v-container>
        <h1>Nuestras cervezas</h1>
      </v-container>
    </div>

    <!--FILTROS -->
    <div class="products_filter rounded-b-xl">
      <v-container class="mx-auto">
        <v-row class="align-center">
          <v-col>
            <v-select
              v-model="select"
              label="Ordenar por..."
              :items="items"
              dense
              outlined
              light
            ></v-select>
          </v-col>
          <v-divider vertical light></v-divider>
          <!-- BUSCADOR -->
          <v-col>
            <v-text-field
              dense
              light
              solo
              outlined
              label="Buscar cerveza, cervecería o estilo..."
              prepend-icon="mdi-magnify"
              v-model="busqueda"
            ></v-text-field>
          </v-col>
        </v-row>
      </v-container>
    </div>

    <!-- CERVEZAS -->
    <v-container class="pag_body pa-md-1 mx-auto pa-0">
      <v-row>
        <v-col v-for="(cerveza, i) in buscar" :key="i" cols="6" :md="3" :xl="2" class="d-flex">
          <Card :producto="cerveza" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import Card from "@/components/Card";

export default {
  name: "Cervezas",
  components: {
    Card,
  },
  data() {
    return {
      items: [
        "Nombre A-Z",
        "Nombre Z-A",
        "Precios de menor a mayor",
        "Precios de mayor a menor",
      ],
      select: null,
      busqueda: "",
    };
  },
  methods: {},
  computed: {
    ...mapState("Products", ["cervezas"]),
    ...mapGetters("Products", ["resultadoBusqueda", "cervezasConStock"]),
    buscar() {
      let productos = this.resultadoBusqueda(this.busqueda);
      let ordenarPorNombre = (a, b) => {
        if (a.data.nombre > b.data.nombre) {
          return 1;
        }
        if (a.data.nombre < b.data.nombre) {
          return -1;
        }
        return 0;
      };

      let ordenarPorPrecio = (a, b) => {
        if (a.data.precio > b.data.precio) {
          return 1;
        }
        if (a.data.precio < b.data.precio) {
          return -1;
        }
        return 0;
      };

      if (this.select == "Nombre A-Z") {
        return productos.sort(ordenarPorNombre);
      }
      if (this.select == "Nombre Z-A") {
        return productos.sort(ordenarPorNombre).reverse();
      } 
      if (this.select == "Precios de menor a mayor") {
        return productos.sort(ordenarPorPrecio);
      }
      if (this.select == "Precios de mayor a menor") {
        return productos.sort(ordenarPorPrecio).reverse();
      }
      
      
      else return productos;
    },
  },
  title() {
    return `Nuestras cervezas`;
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/main.scss";

.products_filter {
  background-color: $main-white;
  color: $main-black;
}
</style>
