<template>
  <v-tabs dark grow>
    <v-tab to="/admin">PRODUCTOS</v-tab>
    <v-tab to="/admin/pedidos"><v-badge :content="noEntregados" :value="noEntregados" color="red">PEDIDOS</v-badge></v-tab>
    <v-tab to="/admin/comentarios">COMENTARIOS</v-tab>
  </v-tabs>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "MenuAdmin",
  computed: {
    ...mapState("Admin", ["pedidos"]),
    noEntregados() {
      return this.pedidos.filter((p) => p.data.entregado == false).length;
    },
  },
};
</script>

<style>
</style>