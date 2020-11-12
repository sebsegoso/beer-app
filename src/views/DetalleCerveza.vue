<template>
  <div>
    <div class="pag_header">
      <h1>Esta podría ser tu nueva cerveza favorita</h1>
    </div>
    <v-container class="pag_body pa-md-1 mx-auto">
      <v-row align="start" class="cerveza_content">
        <v-col cols="12" md="4">
          <v-img
            class="ml-auto rounded-xl cerveza_content_img"
            width="100%"
            :src="cerveza.foto"
          />
        </v-col>
        <v-col cols="12" md="8">
          <h2>{{cerveza.cerveceria}}</h2>
          <div class="wrapper_variedad_precio">
            <h3>
              {{cerveza.nombre}}
              <span class="cerveza_content_volumen">(350cc)</span>
            </h3>
            <h2>${{cerveza.precio}}</h2>
          </div>
          <v-divider light />
          <p>
            {{cerveza.resena}}
          </p>
          <h4>Información:</h4>

          <ul>
            <li>Origen: <strong>{{cerveza.origen}}</strong></li>
            <li>Estilo: <strong>{{cerveza.estilo}}</strong></li>
            <li>ABV: <strong>{{cerveza.ABV}} %</strong></li>
            <li>IBU: <strong>{{cerveza.IBU}}</strong></li>
          </ul>
          <br />

          <v-btn class="elevation-5" x-large>Agregar a mi carro</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  name: "DetalleCerveza",
  props: ["detallecerveza"],
  data() {
    return {};
  },
  methods: {},
  computed: {
      ...mapGetters('Products' , ['detalleCerveza']),
      cerveza(){
          const cervezaPath = this.detallecerveza
          return this.detalleCerveza(cervezaPath).data
      }
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/main.scss";

.cerveza_content {
  padding: 15px 0 40px 0;

  &_img {
    transition: filter 0.5s;
    filter: drop-shadow(0 0 2px $main-black);

    &:hover {
      filter: drop-shadow(0 0 5px $main-black);
    }
  }

  &_volumen {
    font-size: 1.125rem;
    font-weight: 500;
  }
}

.wrapper_variedad_precio {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}
</style><style lang="scss" scoped>
//< !--MEDIA QUERIES -->
@media (min-width: 576px) {
  .cerveza_content {
    padding: 40px 0;
  }
}
</style>
