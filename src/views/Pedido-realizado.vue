<template>
  <div>
    <div class="pag_header">
      <h1>Pedido realizado<v-icon>mdi-check</v-icon></h1>
      
    </div>
    <v-container class="pag_body mx-auto">
    <div class="text-center">
      <h2>Tu compra ha sido realizada, tu código de compra es: </h2>  
      <h3><u><b>{{pedido.id}}</b></u></h3>
    </div>
      <v-sheet class="rounded-xl elevation-5" dark>
        <h3 class="text-center"><u>Órden de pedido</u></h3>
        <TablaDetallePedido :pedido="pedido" />
      </v-sheet>
      <br />
      <div class="text-center">
        <v-btn to="/" light small class="my-1" x-large>
          Volver a inicio
        </v-btn>
      </div>
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

