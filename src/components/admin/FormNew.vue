<template>
  <div>
    <v-divider></v-divider>
    <v-form ref="addProduct">
      <v-row>
        <v-col cols="6">
          <v-text-field
            dense
            v-model="newBeer.nombre"
            label="Nombre"
            required
            outlined
            id="NewProductNombre"
          />
        </v-col>
        <v-col cols="6">
          <v-text-field
            dense
            v-model="newBeer.cerveceria"
            list="cervecerias"
            label="Cervecería"
            required
            outlined
            id="NewProductCerveceria"
          />
        </v-col>
        <v-col cols="4" md="3">
          <v-text-field
            dense
            v-model="newBeer.codigo"
            label="Código"
            required
            outlined
            id="NewProductCodigo"
          />
        </v-col>
        <v-col cols="8" md="5">
          <v-text-field
            dense
            v-model="newBeer.estilo"
            label="Estilo"
            required
            outlined
            id="NewProductEstilo"
          />
        </v-col>
        <v-col cols="6" md="4">
          <v-text-field
            dense
            v-model="newBeer.origen"
            label="Origen"
            required
            outlined
            id="NewProductOrigen"
          />
        </v-col>
        <v-col cols="3" md="2">
          <v-text-field
            dense
            type="number"
            v-model="newBeer.ABV"
            label="ABV"
            suffix="%"
            required
            outlined
            id="NewProductABV"
          />
        </v-col>
        <v-col cols="3" md="2">
          <v-text-field
            dense
            type="number"
            v-model="newBeer.IBU"
            label="IBU"
            required
            outlined
            id="NewProductIBU"
          />
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field
            dense
            v-model="newBeer.foto"
            label="Foto"
            required
            outlined
            id="NewProductFoto"
            type="url"
          />
        </v-col>
        <v-col cols="4" md="2">
          <v-text-field
            dense
            type="number"
            v-model="newBeer.volumen"
            label="Volumen"
            suffix="cc"
            required
            outlined
            id="NewProductVolumen"
          />
        </v-col>
        <v-col cols="4" md="1">
          <v-text-field
            dense
            type="number"
            v-model="newBeer.stock"
            label="Stock"
            required
            outlined
            id="NewProductStock"
          />
        </v-col>
        <v-col cols="4" md="2">
          <v-text-field
            dense
            type="number"
            v-model="newBeer.precio"
            label="Precio"
            prefix="$"
            required
            outlined
            id="NewProductPrecio"
          />
        </v-col>
        <v-col cols="5" md="2">
          <v-text-field
            dense
            type="text"
            v-model="newBeer.path"
            label="Path"
            prefix="/"
            required
            outlined
            id="NewProductPath"
          />
        </v-col>
        <v-col cols="7" md="3">
          <v-radio-group row v-model="newBeer.nueva" mandatory class="d-flex">
            <span>Nueva?</span>
            <v-radio label="Sí" :value="true"></v-radio>
            <v-radio label="No" :value="false"></v-radio>
          </v-radio-group>
        </v-col>
        <v-col cols="12" md="4">
          <v-textarea
            v-model="newBeer.resena"
            label="Reseña"
            rows="1"
            required
            outlined
            id="NewProductResena"
            dense
          />
        </v-col>

        <v-col cols="12">
          <v-btn
            color="success"
            @click="agregarCerveza"
            :disabled="disabledBoton"
            id="BtnNewProduct"
          >
            <v-icon>mdi-plus</v-icon> Agregar
          </v-btn>
        </v-col>
      </v-row>
    </v-form>

    <datalist id="cervecerias">
      <option v-for="(cerveceria, i) in cervecerias">
        {{ cerveceria.data.nombre }}
      </option>
    </datalist>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  data() {
    return {
      newBeer: {
        codigo: "",
        nombre: "",
        cerveceria: "",
        estilo: "",
        origen: "",
        ABV: "",
        IBU: "",
        foto: "",
        volumen: "",
        stock: "",
        precio: "",
        path: "",
        nueva: false,
        resena: "",
      },
    };
  },
  methods: {
    ...mapActions("Admin", ["addProduct"]),
    async agregarCerveza() {
      let cervezaNueva = {
        codigo: this.newBeer.codigo,
        nombre: this.newBeer.nombre,
        cerveceria: this.newBeer.cerveceria,
        estilo: this.newBeer.estilo,
        origen: this.newBeer.origen,
        ABV: Number(this.newBeer.ABV),
        IBU: Number(this.newBeer.IBU),
        foto: this.newBeer.foto,
        volumen: Number(this.newBeer.volumen),
        stock: Number(this.newBeer.stock),
        precio: Number(this.newBeer.precio),
        path: this.newBeer.path,
        resena: this.newBeer.resena,
        nueva: this.newBeer.nueva,
        cart: false,
        meta: {
          addedBy: this.usuario.name,
          creationDate: this.fecha,
        },
      };

      const agregar = await this.addProduct(cervezaNueva);

      if (agregar) {
        this.$toast.success(`Producto "${cervezaNueva.nombre}" agregado`, {
          position: "top",
          duration: 3000,
          dismissible: true,
        });

        this.$refs.addProduct.reset();
      } else {
        this.$toast.error(`${this.errorMessage}`, {
          position: "top",
          duration: 3000,
          dismissible: true,
        });
      }
    },
  },
  computed: {
    ...mapState("Admin", ["usuario", "errorMessage"]),
    ...mapState("Products", ["cervecerias"]),
    fecha() {
      let date = new Date();
      let fecha =
        date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear();
      return fecha;
    },
    disabledBoton() {
      if (
        this.newBeer.codigo == undefined ||
        this.newBeer.nombre == undefined ||
        this.newBeer.cerveceria == undefined ||
        this.newBeer.estilo == undefined ||
        this.newBeer.origen == undefined ||
        this.newBeer.ABV == undefined ||
        this.newBeer.IBU == undefined ||
        this.newBeer.foto == undefined ||
        this.newBeer.volumen == undefined ||
        this.newBeer.stock == undefined ||
        this.newBeer.precio == undefined ||
        this.newBeer.path == undefined ||
        this.newBeer.resena == undefined ||
        this.newBeer.codigo.trim() == "" ||
        this.newBeer.nombre.trim() == "" ||
        this.newBeer.cerveceria.trim() == "" ||
        this.newBeer.estilo.trim() == "" ||
        this.newBeer.origen.trim() == "" ||
        this.newBeer.ABV.trim() == "" ||
        this.newBeer.IBU.trim() == "" ||
        this.newBeer.foto.trim() == "" ||
        this.newBeer.volumen.trim() == "" ||
        this.newBeer.stock.trim() == "" ||
        this.newBeer.precio.trim() == "" ||
        this.newBeer.path.trim() == "" ||
        this.newBeer.resena.trim() == ""
      )
        return true;

      return false;
    },
  },
};
</script>
