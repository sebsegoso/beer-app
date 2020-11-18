<template>
  <v-bottom-navigation
    :value="1"
    grow
    dark
    id="Bottom_navbar"
    class="rounded-t-xl"
  >
    <v-btn to="/">
      <span>Home</span>
      <v-icon>mdi-home</v-icon>
    </v-btn>

    <v-divider vertical></v-divider>

    <v-btn to="/Cervezas">
      <span>Cervezas</span>
      <v-icon>mdi-glass-mug-variant</v-icon>
    </v-btn>
    <!--<v-divider vertical></v-divider>
    <v-btn>
        <span>Buscar</span>

        <v-icon>mdi-magnify</v-icon>
    </v-btn>-->

    <v-divider vertical></v-divider>

    <v-btn to="/Carro">
      <span>Mi carro</span>
      <v-badge
        :content="cantidadProductos"
        :value="cantidadProductos"
        color="#16181e"
      >
        <v-icon>mdi-cart</v-icon>
      </v-badge>
    </v-btn>
    <!--
    <v-divider vertical></v-divider>

    <v-btn>
        <span>Mi cuenta</span>
        <v-icon>mdi-account-circle</v-icon>
    </v-btn>-->
  </v-bottom-navigation>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Navbar",
  computed: {
    ...mapGetters("Cart", ["cantidadProductos"]),
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/main.scss";

#Bottom_navbar {
  position: fixed;
  z-index: 999;
  height: 200px;
  box-shadow: 0 0 20px $main-black, 0 0 3px $main-white;
  max-width: 100vw;
  background-color: $main-black;

  a {
    text-decoration: none;
    color: $main-white;
  }
}
</style>
