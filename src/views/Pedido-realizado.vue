<template>
  <div>
    <div class="pag_header">
      <h1>Pedido realizado <v-icon>mdi-check</v-icon></h1>
    </div>
    <v-container class="pag_body mx-auto">
      <v-sheet class="rounded-xl elevation-5" dark>
        <h3 class="text-center"><u>Órden de pedido</u></h3>
        <TablaDetallePedido :pedido="pedido" />
      </v-sheet>
    </v-container>
  </div>
</template>

<script>
import { mapState } from "vuex";
import TablaDetallePedido from "@/components/TablaDetallePedido";

export default {
  name: "Pedido-realizado",
  components: { TablaDetallePedido },
  computed: {
    ...mapState("Cart", ["pedido"]),
  },
  title() {
    return `Pedido realizado`;
  },
};
</script>

