<template>
  <div>
    <!--MODAL DETALLE-->
    <v-dialog v-model="modalDetalle" v-if="pedido">
      <v-card>
        <v-card-actions>
          <div class="ml-auto rounded-xl">
            <v-btn @click="modalDetalle = false" fab x-small dark color="black"
              >X</v-btn
            >
          </div>
        </v-card-actions>
        <h3 class="text-center" v-if="pedido">
          Detalle pedido de <u>{{ pedido.nombre }} {{ pedido.apellidos }}</u>
        </h3>
        <v-card-subtitle class="text-center" v-if="pedido"
          >Realizado el {{ pedido.fecha }} - Medio entrega:
          {{ pedido.entrega }}</v-card-subtitle
        >
        <TablaDetallePedido :pedido="pedido" />
        <v-card-actions>
          <div class="mx-auto">
            <v-btn v-if="!pedido.entregado" dark @click="entregado(pedido.id)"
              >Marcar como entregado</v-btn
            >
            <v-btn v-else dark color="red" @click="noEntregado(pedido.id)"
              >Marcar como NO entregado</v-btn
            >
          </div>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- TABLA -->
    <v-data-table
      dark
      dense
      :headers="headers"
      :items="pedidos"
      :items-per-page="10"
      class="elevation-10 rounded-lg"
      no-data-text="No hay pedidos que mostrar"
    >
      <!--EDITANDO COLUMNAS -->
      <template v-slot:item.data.nombre="{ item }">
        {{ item.data.nombre }} {{ item.data.apellidos }}
      </template>

      <template v-slot:item.data.direccion="{ item }">
        {{ item.data.direccion ? `${item.data.direccion.comuna}` : "" }}
      </template>

      <template v-slot:item.data.productos="{ item }">
        <ul>
          <li v-for="(producto, i) in item.data.productos" :key="i">
            <b> [{{ producto.cantidad }}] : </b>
            {{ producto.producto.cerveceria }} -
            {{ producto.producto.nombre }}
          </li>
        </ul>
      </template>

      <template v-slot:item.data.total="{ item }">
        ${{ item.data.total }}
      </template>

      <!--<template v-slot:item.data.entregado="{ item }">
        {{ item.data.entregado ? "Sí" : "No" }}
      </template>-->

      <template v-slot:item.detalle="{ item }">
        <v-btn x-small light @click="verDetalle(item)"
          ><v-icon>mdi-dots-horizontal</v-icon>Detalle</v-btn
        >
      </template>
    </v-data-table>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import TablaDetallePedido from "@/components/TablaDetallePedido";

export default {
  components: { TablaDetallePedido },
  props: ["pedidos"],
  data() {
    return {
      headers: [
        {
          text: "Fecha",
          align: "start",
          value: "data.fecha",
        },
        {
          text: "Código",
          value: "id",
        },
        {
          text: "Nombre",
          value: "data.nombre",
        },
        // {
        //   text: "Email",
        //   value: "data.email",
        // },
        // {
        //   text: "Telefono",
        //   value: "data.telefono",
        // },
        {
          text: "Entrega",
          value: "data.entrega",
        },
        {
          text: "Comuna entrega",
          value: "data.direccion",
        },
        {
          text: "Productos",
          value: "data.productos",
        },
        {
          text: "Total",
          value: "data.total",
        },
        // {
        //   text: "Medio de pago",
        //   value: "data.medioDePago",
        // },
        // {
        //   text: "Entregado",
        //   value: "data.entregado",
        // },
        {
          text: "Detalle",
          value: "detalle",
        },
      ],
      modalDetalle: false,
      pedido: null,
    };
  },
  computed: {
    ...mapState("Admin", ["errorMessage"]),
    direccion(direccion) {
      return `${direccion.calle} ${direccion.numero} , ${direccion.departamento} , ${direccion.comuna}`;
    },
  },
  methods: {
    ...mapActions("Admin", ["pedidoEntregado", "pedidoNoEntregado"]),
    verDetalle(item) {
      item.data.id = item.id;
      this.pedido = item.data;
      this.modalDetalle = true;
    },
    async entregado(id) {
      const entregado = await this.pedidoEntregado(id);
      if (entregado) {
        this.modalDetalle = false;
        this.pedido.entregado = true;

        this.$toast.success(`Pedido de: "${this.pedido.nombre} ${this.pedido.apellidos}" entregado`, {
          position: "top",
          duration: 5000,
          dismissible: true,
        });

      } else {
        this.$toast.error(`${this.errorMessage}`, {
          position: "top",
          duration: 5000,
          dismissible: true,
        });
      }
    },
    async noEntregado(id) {
      const noEntregado = await this.pedidoNoEntregado(id);
      if (noEntregado) {
        this.modalDetalle = false;
        this.pedido.entregado = false;

        this.$toast.default(`Pedido de: "${this.pedido.nombre} ${this.pedido.apellidos}" NO entregado`, {
          position: "top",
          duration: 5000,
          dismissible: true,
        });

      } else {
        this.$toast.error(`${this.errorMessage}`, {
          position: "top",
          duration: 5000,
          dismissible: true,
        });
      }
    },
  },
};
</script>

<style>
</style>
