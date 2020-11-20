<template>
  <div>
  <!-- MODAL -->
    <v-dialog v-model="dialogWindow" max-width="100%">
      <v-container fluid>
        <FormEdit :producto="productoAEditar" @cerrarDialog="closeDialog" />
      </v-container>
    </v-dialog>

    <v-data-table
      dark
      dense
      :headers="headers"
      :items="cervezas"
      :items-per-page="10"
      class="elevation-10 rounded-lg"
    >
      <!--BOTONES -->
      <template v-slot:item.acciones="{ item }">
        <!--EDITAR -->
        <v-btn color="primary" small @click="editarProducto(item)">
          <v-icon dark> mdi-pencil </v-icon>
        </v-btn>
        <!-- BORRAR -->

        <v-btn color="red" small @click="borrarProducto(item)">
          <v-icon dark> mdi-trash-can-outline </v-icon>
        </v-btn>
      </template>

      <template v-slot:item.data.foto="{ item }">
        <v-img :src="item.data.foto" width="70" />
      </template>
    </v-data-table>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import FormEdit from "@/components/admin/FormEdit";
export default {
  data() {
    return {
      dialogWindow: false,
      headers: [
        {
          text: "Código",
          align: "start",
          value: "data.codigo",
        },
        {
          text: "Nombre",
          value: "data.nombre",
        },
        {
          text: "Cervecería",
          value: "data.cerveceria",
        },
        {
          text: "Estilo",
          value: "data.estilo",
        },
        {
          text: "Origen",
          value: "data.origen",
        },
        {
          text: "ABV",
          value: "data.ABV",
        },
        {
          text: "IBU",
          value: "data.IBU",
        },
        {
          text: "Foto",
          value: "data.foto",
        },
        {
          text: "Volumen",
          value: "data.volumen",
        },
        {
          text: "Stock",
          value: "data.stock",
        },
        {
          text: "Precio",
          value: "data.precio",
        },
        {
          text: "Reseña",
          value: "data.resena",
        },
        {
          text: "Acciones",
          value: "acciones",
        },
      ],
      productoAEditar: null,
    };
  },
  components: {
    FormEdit,
  },
  methods: {
    ...mapActions("Admin", ["deleteProduct"]),
    editarProducto(item) {
      this.dialogWindow = true;
      this.productoAEditar = JSON.parse(JSON.stringify(item));
    },
    borrarProducto(item) {
      let deseaEliminar = confirm(`Desea eliminar: ${item.data.nombre} ?`);
      deseaEliminar ? this.deleteProduct(item.id) : false;
    },
    closeDialog() {
      this.dialogWindow = false;
    },
  },
  computed: {
    ...mapState("Products", ["cervezas"]),
  },
};
</script>

<style>
</style>
