<template>
  <v-card dark>
    <v-container>
      <v-row>
        <v-col cols="6">
          <v-text-field
            dense
            label="Nombre"
            v-model="producto.data.nombre"
            required
            outlined
          />
        </v-col>
        <v-col cols="6">
          <v-text-field
            dense
            label="Cervecería"
            v-model="producto.data.cerveceria"
            required
            outlined
          />
        </v-col>
        <v-col cols="4" md="3">
          <v-text-field
            dense
            label="Código"
            v-model="producto.data.codigo"
            required
            outlined
          />
        </v-col>
        <v-col cols="8" md="5">
          <v-text-field
            dense
            label="Estilo"
            v-model="producto.data.estilo"
            required
            outlined
          />
        </v-col>
        <v-col cols="6" md="4">
          <v-text-field
            dense
            label="Origen"
            v-model="producto.data.origen"
            required
            outlined
          />
        </v-col>
        <v-col cols="3" md="2">
          <v-text-field
            dense
            type="number"
            label="ABV"
            suffix="%"
            required
            outlined
            v-model="producto.data.ABV"
          />
        </v-col>
        <v-col cols="3" md="2">
          <v-text-field
            dense
            type="number"
            label="IBU"
            v-model="producto.data.IBU"
            required
            outlined
          />
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field
            dense
            label="Foto"
            v-model="producto.data.foto"
            required
            outlined
          />
        </v-col>
        <v-col cols="4" md="2">
          <v-text-field
            dense
            type="number"
            label="Volumen"
            suffix="cc"
            required
            outlined
            v-model="producto.data.volumen"
          />
        </v-col>
        <v-col cols="4" md="1">
          <v-text-field
            dense
            type="number"
            v-model="producto.data.stock"
            label="Stock"
            required
            outlined
          />
        </v-col>
        <v-col cols="4" md="2">
          <v-text-field
            dense
            type="number"
            label="Precio"
            prefix="$"
            required
            outlined
            v-model="producto.data.precio"
          />
        </v-col>
        <v-col cols="5" md="2">
          <v-text-field
            dense
            type="text"
            label="Path"
            prefix="/"
            required
            outlined
            v-model="producto.data.path"
          />
        </v-col>
        <v-col cols="7" md="3">
          <v-radio-group row v-model="producto.data.nueva">
            <span>Nueva?</span>
            <v-radio label="Sí" :value="true"></v-radio>
            <v-radio label="No" :value="false"></v-radio>
          </v-radio-group>
        </v-col>
        <v-col cols="12" md="4">
          <v-textarea
            label="Reseña"
            v-model="producto.data.resena"
            rows="1"
            required
            outlined
            dense
          />
        </v-col>

        <v-col cols="12">
          <v-btn color="success" @click="editarProducto(producto)">
            <v-icon>mdi-pencil</v-icon> CONFIRMAR EDICIÓN
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
import {mapState, mapActions } from "vuex";
export default {
  name: "Edit",
  props: ["producto"],
  computed: {
    productoEdit() {
      let producto = Object.assign({}, this.producto);
      return producto;
    },
  },
  methods: {
    ...mapActions("Admin", ["updateProduct"]),
    async editarProducto(item) {
      let edit = await this.updateProduct(item);

      edit
        ? this.$toast.default(
            `Producto "${item.data.cerveceria} - ${item.data.nombre}" editado`,
            {
              position: "top",
              duration: 3000,
              dismissible: true,
            }
          )
        : this.$toast.error(`${this.errorMessage}`, {
            position: "top",
            duration: 3000,
            dismissible: true,
          });
      this.$emit("cerrarDialog");
    },
  },
  computed: {
    ...mapState('Admin' , ['errorMessage'])
  },
};
</script>

<style>
</style>