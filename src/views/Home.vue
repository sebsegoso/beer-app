<template>
  <div>
    <div class="pag_header">
      <v-container>
        <h1>Las mejores cervezas artesanales, directo a tu puerta</h1>
      </v-container>
    </div>
    <!--CARRUSEL -->
    <v-carousel cycle hide-delimiters show-arrows-on-hover>
      <v-carousel-item
        v-for="(slide, i) in slides"
        :key="i"
        src="https://st4.depositphotos.com/5389310/19992/v/1600/depositphotos_199920628-stock-illustration-wheat-beer-ads-flying-ingredients.jpg"
        height="200"
        link
        to="/Packs/Promociondestacada"
      >
        <template v-slot:placeholder>
          <v-row class="fill-height ma-0" align="center" justify="center">
            <v-progress-circular
              indeterminate
              color="grey lighten-5"
            ></v-progress-circular>
          </v-row>
        </template>
      </v-carousel-item>
    </v-carousel>

    <v-container class="pa-7 pa-md-1 mx-auto">
      <!-- SLIDES -->

      <h2 class="text-center">Cervezas nuevas</h2>

      <v-slide-group class="main_slide pa-4">
        <v-slide-item
          v-for="(cerveza, i) in cervezasNuevas"
          :key="i"
          class="px-3"
        >
          <Card :producto="cerveza" />
        </v-slide-item>
      </v-slide-group>

      <v-divider light class="my-15" />

      <h2 class="text-center">Cervecerías</h2>
      <v-slide-group class="main_slide pa-4">
        <v-slide-item v-for="n in 15" :key="n">
          <router-link to="/Cervezas/Cerveceria">
            <v-img
              class="card_home cerveceria_img ma-4 rounded-xl"
              src="https://www.cuellonegro.cl/wp-content/uploads/2017/05/logo_web.png"
              alt="logo cervecería"
            ></v-img>
          </router-link>
        </v-slide-item>
      </v-slide-group>

      <!--<v-divider light class="my-15" />

      <h2 class="text-center">Packs</h2>
      <v-slide-group class="main_slide pa-4">
        <v-slide-item v-for="n in 15" :key="n">
          <Card 
            class="componente_card"
            imagen="https://www.cervezabyra.com/shop/109-large_default/craft-beer-byra-alphabet-collection-pack-12ud.jpg"
            titulo="4PACK MIXTO"
            descripcion="Una variedad de sabores para vivir una experiencia cervecera única"
            precio="10000"
            enlace="/Packs/DetallePack"
          />
        </v-slide-item>
      </v-slide-group>-->

      <v-divider light class="my-15" />

      <div class="text-center py-5">
        <v-btn class="text-center" to="/Cervezas" x-large dark elevation="5"
          >Ver todas las cervezas <v-icon>mdi-beer</v-icon>
        </v-btn>
      </div>
      <v-divider light class="my-15" />
    </v-container>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
// @ is an alias to /src
import Card from "@/components/Card";

export default {
  name: "Home",
  components: {
    Card,
  },
  data() {
    return {
      //CAROUSEL DATA
      slides: ["First", "Second"],
    };
  },
  title() {
    return `Las mejores cervezas artesanales directo a tu puerta`;
  },
  computed: {
    ...mapGetters("Products", ["cervezasNuevas"]),
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/main.scss";

.main_slide {
  padding: 4rem auto;

  .cerveceria_img {
    width: 150px;
    transition: filter 0.5s;
    filter: drop-shadow(0 0 2px $main-black);

    &:hover {
      filter: drop-shadow(0 0 5px $main-black);
    }
  }

  .componente_card {
    margin: 12px;
  }
}
</style>
