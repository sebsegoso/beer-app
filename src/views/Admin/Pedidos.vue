<template>
  <v-container fluid id="pedidos">
    <h1>Pedidos</h1>
    <h2>NO entregados</h2>
    <TablaVentas :pedidos="noEntregados" />
    <br>
    <v-divider></v-divider>
    <h2>Entregados</h2>
    <TablaVentas :pedidos="entregados" />

  </v-container>
</template>

<script>
import TablaVentas from "@/components/admin/TablaVentas";
import { mapState } from "vuex";
export default {
  name: 'Pedidos',

  title() {
    return `Pedidos | Admin`;
  },
  components: {
    TablaVentas,
  },
  computed: {
    ...mapState("Admin", ["pedidos"]),
    noEntregados() {
      return this.pedidos.filter((p) => p.data.entregado == false);
    },
    entregados() {
      return this.pedidos.filter((p) => p.data.entregado == true);
    },
  },
};
</script>

<style lang="scss" scoped>
#pedidos {
  min-height: 92vh;
}
</style>