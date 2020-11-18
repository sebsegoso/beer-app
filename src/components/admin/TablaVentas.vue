<template>
  <v-data-table
    dark
    dense
    :headers="headers"
    :items="pedidos"
    :items-per-page="10"
    class="elevation-10 rounded-lg"
  >
    <!--EDITANDO COLUMNAS -->
    <template v-slot:item.data.nombre="{ item }">
      {{ item.data.nombre }} {{ item.data.apellidos }}
    </template>

    <template v-slot:item.data.direccion="{ item }">
      {{
        item.data.direccion
          ? `${item.data.direccion.calle} ${item.data.direccion.numero}, ${item.data.direccion.departamento}, ${item.data.direccion.comuna}`
          : ""
      }}
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

    <template v-slot:item.data.entregado="{ item }">
      {{ item.data.entregado ? "Sí" : "No" }}
    </template>

    <template v-slot:item.detalle="{ item }">
      <v-btn x-small light @click="verDetalle(item)"
        ><v-icon>mdi-dots-horizontal</v-icon>Detalle</v-btn
      >
    </template>
  </v-data-table>
</template>

<script>
import { mapState } from "vuex";
export default {
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
          text: "Dirección",
          value: "data.direccion",
        },
        {
          text: "Cant. productos",
          value: "data.productos",
        },
        {
          text: "Total",
          value: "data.total",
        },
        {
          text: "Medio de pago",
          value: "data.medioDePago",
        },
        {
          text: "Entregado",
          value: "data.entregado",
        },
        {
          text: "Detalle",
          value: "detalle",
        },
      ],
    };
  },
  computed: {
    ...mapState("Admin", ["pedidos"]),
    direccion(direccion) {
      return `${direccion.calle} ${direccion.numero} , ${direccion.departamento} , ${direccion.comuna}`;
    },
  },
  methods: {
    verDetalle(item) {
      console.log("Detalle: ", item);
    },
  },
};
</script>

<style>
</style>
