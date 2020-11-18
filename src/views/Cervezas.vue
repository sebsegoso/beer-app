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
              @change="sort"
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
        <v-col v-for="(cerveza, i) in buscar" :key="i" cols="6" :md="3" :xl="2">
          <Card :producto="cerveza"/>
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
      busqueda: '',
    };
  },
  methods: {
    sort(ordenarSegun) {
      this.buscar.sort(this.compareValues("cerveceria"));
      alert();
    },
    compareValues(key, order = "asc") {
      return function innerSort(a, b) {
        if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
          // property doesn't exist on either object
          return 0;
        }

        const varA = typeof a[key] === "string" ? a[key].toUpperCase() : a[key];
        const varB = typeof b[key] === "string" ? b[key].toUpperCase() : b[key];

        let comparison = 0;
        if (varA > varB) {
          comparison = 1;
        } else if (varA < varB) {
          comparison = -1;
        }
        return order === "desc" ? comparison * -1 : comparison;
      };
    },
  },
  computed: {
    ...mapState("Products", ["cervezas"]),
    ...mapGetters("Products", ["resultadoBusqueda"]),
    buscar() {
      return this.resultadoBusqueda(this.busqueda);
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
