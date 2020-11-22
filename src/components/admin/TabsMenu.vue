<template>
  <v-tabs dark grow>
    <v-tab :to="{name: 'Admin'}"><v-icon>mdi-beer</v-icon> PRODUCTOS</v-tab>
    <v-tab :to="{name :'Pedidos'}">
      <v-badge :content="noEntregados" :value="noEntregados" color="red">
        <v-icon>mdi-cart-check</v-icon>PEDIDOS
      </v-badge>
    </v-tab>
    <v-tab :to="{name :'Comentarios'}"><v-icon>mdi-chat</v-icon>COMENTARIOS</v-tab>
    <v-tab to="/">TIENDA</v-tab>
    <v-tab>
      <v-menu offset-y bottom v-if="usuario !== ''">
        <template v-slot:activator="{ on, attrs }">
          <div v-bind="attrs" v-on="on">
            <v-icon >mdi-account-circle</v-icon>
            USUARIO
          </div>
        </template>

        <v-list dark>
          <v-list-item>
            <v-btn @click="logOut" small color="red">
              <v-icon>mdi-logout</v-icon>
              cerrar sesion
            </v-btn>
          </v-list-item>
          <v-list-item>
            <router-link to="/admin">Wena rey</router-link>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-tab>
  </v-tabs>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "MenuAdmin",
  computed: {
    ...mapState("Admin", ["pedidos", "usuario"]),
    noEntregados() {
      return this.pedidos.filter((p) => p.data.entregado == false).length;
    },
  },
  methods: {
    ...mapActions("Admin", ["logOut"]),
  },
};
</script>

<style>
</style>