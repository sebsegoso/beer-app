<template>
  <div>
    <!--MODAL FINALIZAR -->
    <v-dialog v-model="modalFinalizar" v-if="pedido" persistent>
      <div class="finalizar">
        <v-card dark>
          <v-card-actions>
            <div class="ml-auto rounded-xl">
              <v-btn @click="modalFinalizar = false" fab x-small light>X</v-btn>
            </div>
          </v-card-actions>
          <h4 class="text-center" v-if="pedido">
            {{ pedido.nombre }}, por favor confirma tus datos:
          </h4>

          <TablaDetallePedido :pedido="pedido" />
          <v-card-actions>
            <div class="text-center mx-auto">
              <v-checkbox
                v-model="checkbox"
                label="Los datos ingresados son correctos y deseo finalizar mi compra"
                color="#efc251"
                hide-details
                id="CartConfirmCheckbox"
              ></v-checkbox>
              <div>
                <v-btn
                  id="BtnCartConfirm"
                  :disabled="!checkbox"
                  color="#efc251"
                  @click="finalizar"
                  large
                  class="my-1"
                >
                  Finalizar compra
                </v-btn>
                <v-spacer></v-spacer>
                <v-btn @click="modalFinalizar = false" light small class="my-1">
                  Seguir comprando
                </v-btn>
              </div>
            </div>
          </v-card-actions>
        </v-card>
      </div>
    </v-dialog>

    <!--total -->
    <v-container class="cart_total elevation-5 rounded-l-xl pa-2">
      <h2>TOTAL</h2>
      <v-divider />
      <h5>
        Cantidad de productos:
        <span id="CantidadProductos">{{ cantidadProductos }}</span>
      </h5>
      <v-divider />
      <h5>Subtotal: ${{ subtotal }}</h5>
      <h5 v-show="entrega">Envío: $3.500</h5>
      <v-divider dark></v-divider>
      <h4 class="cart_total_total">Total: ${{ total }}</h4>
      <v-divider />
      <v-container>
        <h5>Forma de entrega:</h5>
        <v-radio-group dark row v-model="entrega" mandatory>
          <v-radio id="CartRetiro" label="Retiro" :value="false"></v-radio>
          <v-radio
            id="CartTransferencia"
            label="Despacho a domicilio"
            :value="true"
          ></v-radio>
        </v-radio-group>
        <v-divider inset></v-divider>
        <h5>Datos cliente</h5>
        <v-text-field
          id="CartNombre"
          dark
          outlined
          dense
          label="Nombre"
          v-model="nombre"
          type="text"
          :rules="nameRules"
          validate-on-blur
        ></v-text-field>
        <v-text-field
          id="CartApellidos"
          dark
          outlined
          dense
          label="Apellidos"
          :rules="lastnameRules"
          v-model="apellidos"
          type="text"
          validate-on-blur
        ></v-text-field>
        <v-text-field
          id="CartEmail"
          dense
          dark
          outlined
          :rules="emailRules"
          label="Correo electrónico"
          v-model="email"
          required
          validate-on-blur
        >
        </v-text-field>
        <v-text-field
          id="CartTelefono"
          dark
          outlined
          dense
          label="Teléfono de contacto"
          type="number"
          prefix="+56"
          v-model="telefono"
          :rules="phoneRules"
          validate-on-blur
        ></v-text-field>
        <v-divider inset></v-divider>
        <div v-show="entrega">
          <h5>Dirección de entrega</h5>
          <v-select
            id="CartDireccionComuna"
            dark
            dense
            outlined
            label="Comuna"
            :items="comunas"
            v-model="comuna"
            data-cy="SelectComuna"
          ></v-select>
          <v-text-field
            id="CartDireccionCalle"
            dark
            outlined
            dense
            label="Calle"
            type="text"
            v-model="calle"
            :rules="required"
            validate-on-blur
          ></v-text-field>
          <v-text-field
            id="CartDireccionNumero"
            dark
            outlined
            dense
            label="Número"
            type="number"
            prefix="#"
            v-model="numero"
            :rules="required"
            validate-on-blur
          ></v-text-field>
          <v-text-field
            id="CartDireccionDepartamento"
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
          <v-radio id="CartEfectivo" label="Efectivo" :value="false"></v-radio>
          <v-radio
            id="CartTransferencia"
            label="Transferencia"
            :value="true"
          ></v-radio>
        </v-radio-group>
        <v-divider inset></v-divider>
        <h5>Comentarios</h5>
        <v-textarea
          id="CartComentario"
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
        <v-btn
          x-large
          light
          color="#fff"
          @click="confirmar"
          id="BtnCart"
          :disabled="disabledBTN"
          >Finalizar pedido</v-btn
        >
      </div>
    </v-container>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";
import TablaDetallePedido from "@/components/TablaDetallePedido";

export default {
  name: "Totales",
  components: { TablaDetallePedido },
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
      nameRules: [
        (v) => !!v || "Nombre requerido",
        (v = "") =>
          v.length >= 3 || "El nombre debe contener al menos 3 caracteres",
        (v = "") =>
          v.length <= 30 || "El nombre debe contener máximo 30 caracteres",
      ],
      lastnameRules: [
        (v) => !!v || "Campo requerido",
        (v = "") =>
          v.length >= 8 || "Los apellidos deben contener al menos 8 caracteres",
      ],
      emailRules: [
        (v) => !!v || "Correo electrónico requerido",
        (v) =>
          /.+@.+/.test(v) ||
          "El formato del correo electrónico ingresado no es válido",
      ],
      phoneRules: [
        (v) => !!v || "Teléfono requerido",
        (v) => v.length == 9 || "Formato del teléfono no válido",
      ],
      required: [(v) => !!v || "Campo requerido"],
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

      //modal
      modalFinalizar: false,
      pedido: null,
      checkbox: false,
    };
  },
  methods: {
    ...mapActions("Cart", ["pedidoFinalizado", "quitarDelCarrito"]),
    confirmar() {
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
        entregado: false,
      };
      //Detalle productos
      this.carrito.forEach((p) => {
        pedido.productos.push({
          producto: {
            cerveceria: p.data.cerveceria,
            nombre: p.data.nombre,
            stock: p.data.stock,
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
          departamento: this.departamento,
          comuna: this.comuna,
        };
        pedido.subtotal = this.subtotal;
        pedido.envio = this.envio;
      }
      this.pedido = pedido;
      this.modalFinalizar = true;
    },
    async finalizar() {
      let finalizar = await this.pedidoFinalizado(this.pedido);

      if (finalizar) {
        this.$router.push("/Pedido-realizado");
        this.carrito.forEach((p) => {
          this.quitarDelCarrito(p.id);
        });
        this.modalFinalizar = true;
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
    ...mapState("Cart", ["carrito", "errorMessage"]),
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
    disabledBTN() {
      if (
        this.nombre == "" ||
        this.apellidos == "" ||
        this.email == "" ||
        this.telefono == ""
      )
        return true;
      else if (
        this.entrega == true &&
        (this.calle == "" || this.numero == "" || this.comuna == "")
      )
        return true;
      else return false;
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

.finalizar {
  max-height: 80vh;
}
</style>