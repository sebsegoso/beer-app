<template>
  <v-container fluid id="productos">
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
  name: "Productos",
  title() {
    return "Productos | Admin";
  },
  components: {
    Accordion,
    TablaProductos,
  },
};
</script>

<style lang="scss" scoped>
#productos {
  min-height: 92vh;
}
</style>
