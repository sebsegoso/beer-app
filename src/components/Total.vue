<template>
  <v-container class="cart_total elevation-5 rounded-l-xl pa-2">
    <h2>TOTAL</h2>
    <v-divider />
    <h5>Cantidad de productos: {{ cantidadProductos }}</h5>
    <v-divider />
    <h5>Subtotal: ${{ subtotal }}</h5>
    <h5 v-show="entrega">Envío: $3.500</h5>
    <v-divider dark></v-divider>
    <h4 class="cart_total_total">Total: ${{ total }}</h4>
    <v-divider />
    <v-container>
      <h5>Forma de entrega:</h5>
      <v-radio-group dark row v-model="entrega" mandatory>
        <v-radio label="Retiro" :value="false"></v-radio>
        <v-radio label="Despacho a domicilio" :value="true"></v-radio>
      </v-radio-group>
      <v-divider inset></v-divider>
      <h5>Datos cliente</h5>
      <v-text-field
        dark
        outlined
        dense
        label="Nombre"
        v-model="nombre"
        type="text"
      ></v-text-field>
      <v-text-field
        dark
        outlined
        dense
        label="Apellidos"
        v-model="apellidos"
        type="text"
      ></v-text-field>
      <v-text-field
        dense
        dark
        outlined
        :rules="emailRules"
        label="Correo electrónico"
        v-model="email"
        required
      >
      </v-text-field>
      <v-text-field
        dark
        outlined
        dense
        label="Teléfono de contacto"
        type="number"
        prefix="+56"
        v-model="telefono"
      ></v-text-field>
      <v-divider inset></v-divider>
      <div v-show="entrega">
        <h5>Dirección de entrega</h5>
        <v-select
          dark
          dense
          outlined
          label="Comuna"
          :items="comunas"
          v-model="comuna"
        ></v-select>
        <v-text-field
          dark
          outlined
          dense
          label="Calle"
          type="text"
          v-model="calle"
        ></v-text-field>
        <v-text-field
          dark
          outlined
          dense
          label="Número"
          type="number"
          prefix="#"
          v-model="numero"
        ></v-text-field>
        <v-text-field
          dark
          outlined
          dense
          label="Block o departamento"
          v-model="departamento"
          type="text"
        ></v-text-field>
        <v-divider inset></v-divider>
      </div>
      <h5>Medio de pago</h5>
      <v-radio-group dark row mandatory v-model="medioDePago">
        <v-radio label="Efectivo" :value="false"></v-radio>
        <v-radio label="Transferencia" :value="true"></v-radio>
      </v-radio-group>
      <v-divider inset></v-divider>
      <h5>Comentarios</h5>
      <v-textarea
        dark
        dense
        outlined
        rows="1"
        label="ej: Timbre malo, Casa roja, etc"
        v-model="comentario"
      ></v-textarea>
    </v-container>
    <v-divider />
    <div class="text-center py-3">
      <v-btn x-large light color="#fff" @click="finalizar"
        >Finalizar pedido</v-btn
      >
    </div>
  </v-container>
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";

export default {
  name: "Totales",
  data() {
    return {
      comunas: [
        "Cerro Navia",
        "Conchalí",
        "Estación Central",
        "Huechuraba",
        "Independencia",
        "La Cisterna",
        "La Florida",
        "La Reina",
        "Las Condes",
        "Lo Barnechea",
        "Lo Prado",
        "Macul",
        "Maipú",
        "Ñuñoa",
        "Pedro Aguirre Cerda",
        "Peñalolén",
        "Providencia",
        "Pudahuel",
        "Puente Alto",
        "Quilicura",
        "Quinta Normal",
        "Recoleta",
        "Renca",
        "San Joaquín",
        "San Miguel",
        "San Ramón",
        "Santiago",
        "Vitacura",
      ],
      emailRules: [
        (v) => !!v || "Correo electrónico requerido",
        (v) =>
          /.+@.+/.test(v) ||
          "El formato del correo electrónico ingresado no es válido",
      ],
      //Datos
      entrega: false,
      medioDePago: true,
      nombre: "",
      apellidos: "",
      email: "",
      telefono: "", //numero
      comentario: "",
      calle: "",
      numero: "", //numero
      departamento: "",
      comuna: "",
    };
  },
  methods: {
    ...mapActions("Cart", ["pedidoFinalizado" ,'quitarDelCarrito']),
    finalizar() {
      //datos base
      let pedido = {
        nombre: this.nombre,
        apellidos: this.apellidos,
        email: this.email,
        telefono: Number(this.telefono),
        comentario: this.comentario,
        medioDePago: this.medioPago,
        entrega: this.medioEntrega,
        fecha: this.fecha,
        cantidadProductos: this.cantidadProductos,
        total: this.total,
        productos: [],
        entregado : false
      };
      //Detalle productos
      this.carrito.forEach((p) => {
        pedido.productos.push({
          producto: {
            cerveceria: p.data.cerveceria,
            nombre: p.data.nombre,
            stock: p.data.stock
          },
          id: p.id,
          cantidad: Number(p.data.cantidad),
        });
      });
      //Si es con despacho a domicilio
      if (this.entrega) {
        pedido.direccion = {
          calle: this.calle,
          numero: Number(this.numero),
          departamento: this.departamento , 
          comuna: this.comuna,
        };
        pedido.subtotal = this.subtotal;
        pedido.envio = this.envio;
      }

      this.pedidoFinalizado(pedido);
      this.$router.push("/Pedido-realizado");
      this.carrito.forEach(p=> {
        this.quitarDelCarrito(p.id)
      })
    },
  },
  computed: {
    ...mapState("Cart", ["carrito"]),
    ...mapGetters(["precioEnMiles"]),
    ...mapGetters("Cart", ["cantidadProductos", "subtotal"]),
    total() {
      if (this.entrega) {
        return this.subtotal + this.envio;
      } else return this.subtotal;
    },
    envio() {
      return 3500;
    },
    fecha() {
      let date = new Date();
      let fecha =
        date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear();
      return fecha;
    },
    medioPago() {
      return this.medioDePago ? "Transferencia bancaria" : "Efectivo";
    },
    medioEntrega() {
      return this.entrega ? "Despacho a domicilio" : "Retiro en tienda";
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/main.scss";

.cart_total {
  width: 100%;
  min-height: 300px;
  background-color: $main-black;
  color: $main-white;
  text-align: left;
  position: sticky;
  top: 1rem;
  &_total {
    color: $main-yellow;
  }
}
</style>