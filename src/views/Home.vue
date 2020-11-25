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
        v-for="(n, i) in 2"
        :key="i"
        height="150"
      >     
      <v-sheet width="100%" height="100%" :style="{'backgroundImage':'url(https://st4.depositphotos.com/5389310/19992/v/1600/depositphotos_199920628-stock-illustration-wheat-beer-ads-flying-ingredients.jpg)'}">
           <v-container class="d-flex flex-column justify-center" >
              <h2>Beba menos, beba mejor</h2>
              <h3>Elige artesanal.</h3>          
              <v-btn class="text-center" to="/Cervezas" x-large dark elevation="5"
                >Ver todas las cervezas <v-icon>mdi-beer</v-icon>
              </v-btn>  
           </v-container>
            
      
      </v-sheet>
      </v-carousel-item>
    </v-carousel>

    <v-container class="pa-7 pa-md-1 mx-auto">
      <!-- SLIDES -->

      <h2 class="text-center">Cervezas nuevas</h2>

      <v-slide-group class="main_slide pa-4" show-arrows="desktop" mobile-breakpoint="576px">
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
      <v-slide-group class="main_slide pa-4" show-arrows="desktop" mobile-breakpoint="576px">
        <div class="cervecerias_slider mx-auto">
          <v-slide-item v-for="(cerveceria, i) in cervecerias" :key="i">
            <router-link :to="`/Cervezas/${cerveceria.data.nombre.trim()}`">
              <v-img
                class="card_home cerveceria_img ma-4 rounded-xl"
                :src="cerveceria.data.img"
                alt="logo cervecería"
              ></v-img>
            </router-link>
          </v-slide-item>
        </div>
      </v-slide-group>

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
import { mapState, mapGetters } from "vuex";
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
    ...mapGetters("Products", ["cervezasNuevas", "cervecerias"]),
    ...mapState("Products", ["cervecerias"]),
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/main.scss";

.main_slide {
  padding: 4rem auto;

  .cerveceria_img {
    width: 180px;
    transition: filter 0.5s;
    filter: drop-shadow(0 0 0 1 $main-black);

    &:hover {
      filter: drop-shadow(0 0 3px $main-black);
    }
  }

  .componente_card {
    margin: 12px;
  }
}

.cervecerias_slider {
  display: flex;
  align-items: center;
}
</style>
