<template>
  <div>
    <div class="pag_header mx-auto">
      <h1>Cervecería "{{cerveceria}}"</h1>
    </div>
    <v-container class="pag_body mx-auto pa-md-1">
    <!--Info cerveceria -->
      <v-row align="center" justify="center">
        <v-col cols="12" md="5"  class="d-flex justify-center">
              <img class="cerveceria_img" :src="filtroCerveceria.data.img" />
        </v-col>
        <v-col v-if="filtroCerveceria.data.resena">
          <div class="cerveceria_info rounded-xl pa-2 elevation-5">
            <h4>Reseña:</h4>
            <p>{{ filtroCerveceria.data.resena }}</p>
          </div>
        </v-col>
      </v-row>
      <v-divider></v-divider>

      <!--cervezas-->
      <v-row>
        <v-col
          v-for="(cerveza, i) in filtroCervezas"
          :key="i"
          cols="6"
          :md="3"
          :xl="2"
        >
          <Card :producto="cerveza" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Card from "@/components/Card";
export default {
  name: "Cerveceria",
  props: ["cerveceria"],
  components: {
    Card,
  },
  title() {
    return `Cervecería: ${this.cerveceria}`;
  },
  data() {
    return {};
  },
  methods: {},
  computed: {
    ...mapState("Products", ["cervezas", "cervecerias"]),
    filtroCervezas() {
      let path = this.cerveceria.toUpperCase();
      return this.cervezas.filter(
        (p) => p.data.cerveceria.toUpperCase() == path
      );
    },
    filtroCerveceria() {
      let path = this.cerveceria.toUpperCase();
      return (
        this.cervecerias.find((p) => p.data.nombre.toUpperCase() == path) || {
          data: {},
        }
      );
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/main.scss";

.cerveceria {
  &_img {
    width: 75%;
    max-height: 350px;
  }
  &_info {
    background-color: $main-black;
    color: $main-white;
  }
}

//Mediaqueries
@media (min-width: 576px) {
  .cerveceria_img {
    width: 300px;
    margin: 0 auto;
  }
}
</style>
