<template>
  <div>
    <v-app-bar color="#000" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <h1>Admin</h1>
      <v-spacer  v-if="cumpleanos"/>
      <span v-if="cumpleanos"><b>Feliz cumpleaños {{usuario.name}}!</b></span>

      <v-spacer />
      <span>Usuario: {{ usuario.name}}</span>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
      color="#000"
      dark
      width="auto"
      class="rounded-r-xl elevation-10"
    >
      <v-list v-if="usuario !== ''">
      <v-list-item>
          <v-list-item-title >{{ usuario.name }}</v-list-item-title>
        </v-list-item>
        <v-list-item>
          <v-list-item-subtitle>{{ usuario.email }}</v-list-item-subtitle>
        </v-list-item>
        <v-list-item>
          <v-btn @click="logOut" outlined color="red">
            <v-icon>mdi-logout</v-icon>
            cerrar sesion
          </v-btn>
        </v-list-item>
      </v-list>

      <v-list v-else>
        <v-list-item>
          <v-list-item-title> No has iniciado sesión </v-list-item-title>
        </v-list-item>
      </v-list>

      <v-divider></v-divider>

      <v-list nav>
        <v-list-item :to="{ name: 'Admin' }">
          <v-list-item-icon>
            <v-icon>mdi-beer</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Productos</v-list-item-title>
        </v-list-item>

        <v-list-item :to="{ name: 'Pedidos' }">
          <v-list-item-icon>
            <v-icon>mdi-cart-check</v-icon>
          </v-list-item-icon>
          <v-badge :content="noEntregados" :value="noEntregados" color="red">
            <v-list-item-title>Pedidos</v-list-item-title>
          </v-badge>
        </v-list-item>

        <v-list-item :to="{ name: 'Comentarios' }">
          <v-list-item-icon>
            <v-icon>mdi-chat</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Comentarios</v-list-item-title>
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item :to="{ name: 'CrearUsuario' }">
          <v-list-item-icon>
            <v-icon>mdi-account-plus</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Crear usuarios</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "MenuAdmin",
  data: () => ({
    drawer: false,
    group: null,
  }),
  computed: {
    ...mapState("Admin", ["pedidos", "usuario"]),
    noEntregados() {
      return this.pedidos.filter((p) => p.data.entregado == false).length;
    },
    fecha() {
      let date = new Date();
      let fecha =
        date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear();
      return fecha;
    },
    cumpleanos(){
      return this.usuario.birthday.slice(0,5) == this.fecha.slice(0,5)
    }
  },
  methods: {
    ...mapActions("Admin", ["logOut"]),
  },
  watch: {
    group() {
      this.drawer = false;
    },
  },
};
</script>

<style>
</style>