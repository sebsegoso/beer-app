<template>
  <div>
    <div class="pag_header pag_header_home">
      <v-container>
        <h1>Las mejores cervezas artesanales, directo a tu puerta</h1>
      </v-container>
    </div>
    <!--CARRUSEL -->
    <div>
      <v-carousel cycle hide-delimiters show-arrows-on-hover>
        <v-carousel-item>
          <Banner
            bgImage="https://firebasestorage.googleapis.com/v0/b/beer-app-2020.appspot.com/o/assets%2Fbanner.jpg?alt=media&token=74c24772-07e5-4561-a055-37ebe03cd232"
            title="Beba menos, beba mejor"
            subtitle="Elige artesanal."
            btn-text="Ver todas las cervezas "
            btn-icon="mdi-beer"
            btn-link="/Cervezas"
          />          
        </v-carousel-item>
        <v-carousel-item>
          <Banner
            bgImage="https://firebasestorage.googleapis.com/v0/b/beer-app-2020.appspot.com/o/assets%2Fbannerheyhops.jpg?alt=media&token=42688974-1735-40a7-8835-be1d38b9c8fe"
            title="COLABORA O MUERE"
            subtitle="HEY HOPS LET'S GO - Desatino x Zutik"
            btn-text="Ver cerveza"
            btn-icon="mdi-beer"
            btn-link="/Cervezas/Desatino/HeyHopsLetsGO"
          />          
        </v-carousel-item>        
      </v-carousel>

      <v-container class="pa-7 pa-md-1 mx-auto">
        <!-- SLIDES -->

        <h2 class="text-center">Cervezas nuevas</h2>

        <v-slide-group
          class="main_slide pa-4"
          show-arrows="desktop"
          mobile-breakpoint="576"
          id="CervezasNuevas"
        >
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
        <v-slide-group
          class="main_slide pa-4"
          show-arrows="desktop"
          mobile-breakpoint="576"
        >
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
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import Card from "@/components/Card";
import Banner from "@/components/Banner";

export default {
  name: "Home",
  components: {
    Card,
    Banner,
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
    animation-name: scale;
    animation-duration: 1s;
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
