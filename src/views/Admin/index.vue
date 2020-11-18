<template>
  <v-container fluid>
    <h1>Productos</h1>
    <TablaProductos />
    <br />
    <Accordion />
  </v-container>
</template>

<script>
import Accordion from "@/components/admin/Accordion";
import TablaProductos from "@/components/admin/TablaProductos";

export default {
  components: {
    Accordion,
    TablaProductos,
  },
};
</script>

<style>
</style>
