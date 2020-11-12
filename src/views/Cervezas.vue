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
              label="Ordenar por:"
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
              clearable
              dense
              light
              solo
              outlined
              label="Buscar..."
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
        <v-col
          v-for="(cerveza, i) in buscar"
          :key="i"
          cols="6"
          :md="3"
          :xl="2"
        >
          <Card
            :imagen="cerveza.data.foto"
            :titulo="cerveza.data.nombre"
            :cerveceria="cerveza.data.cerveceria"
            :estilo="cerveza.data.estilo"
            :descripcion="cerveza.data.resena"
            :precio="cerveza.data.precio"
            :enlace="`/Cervezas/${cerveza.data.cerveceria}/${cerveza.data.path}`"
          />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapState , mapGetters } from "vuex";
import Card from "@/components/Card";

export default {
  name: "Cervezas",
  components: {
    Card,
  },
  data() {
    return {
      items: [
        "",
        "Por cervecería",
        "Nombre A-Z",
        "Nombre Z-A",
        "Precios de menor a mayor",
        "Precios de mayor a menor",
      ],
      busqueda: '',
    };
  },
  computed: {
    ...mapState("Products", ["cervezas"]),
    ...mapGetters("Products", ["resultadoBusqueda"]),
    buscar(){
      return this.resultadoBusqueda(this.busqueda)
    }
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
