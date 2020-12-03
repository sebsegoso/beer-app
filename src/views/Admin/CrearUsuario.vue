<template>
  <v-container fluid>
    <h1>Crear usuarios</h1>
    <v-card dark class="elevation-5 rounded-xl">
      <v-container>
        <h3>Datos</h3>
        <v-form ref="createUser">
          <v-row>
            <v-col cols="12" md="6">
              <v-text-field
                dense
                label="Nombre"
                v-model="nombre"
                required
                outlined
                id="NombreCreateUser"
                :rules="[rules.required]"
              />
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field
                dense
                label="Correo electrónico"
                type="email"
                :rules="emailRules"
                v-model="email"
                required
                outlined
                id="EmailCreateUser"
              />
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field
                v-model="clave"
                :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                dark
                outlined
                dense
                :rules="[rules.required]"
                :type="show1 ? 'text' : 'password'"
                name="input-10-1"
                label="Contraseña"
                @click:append="show1 = !show1"
                id="PassCreateUser"
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field
                v-model="confirmarClave"
                :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
                dark
                outlined
                dense
                :rules="[rules.required, passwordMatch]"
                :type="show2 ? 'text' : 'password'"
                name="input-10-1"
                label="Confirmar contraseña"
                @click:append="show2 = !show2"
                id="ConfirmPassCreateUser"
              ></v-text-field>
            </v-col>

            <!--Date picker-->
            <v-col cols="12">
              <v-menu
                ref="menu"
                v-model="menu"
                :close-on-content-click="false"
                transition="scale-transition"
                offset-y
                min-width="290px"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    v-model="date"
                    label="Fecha de nacimiento"
                    prepend-icon="mdi-calendar"
                    outlined
                    readonly
                    v-bind="attrs"
                    v-on="on"
                    id="FechaCreateUser"
                  ></v-text-field>
                </template>
                <v-date-picker
                  ref="picker"
                  v-model="date"
                  :max="new Date().toISOString().substr(0, 10)"
                  dark
                  min="1950-01-01"
                  @change="save"
                  type="date"
                ></v-date-picker>
              </v-menu>
            </v-col>

            <v-col cols="12">
              <v-btn
                color="success"
                width="100%"
                @click="crearUsuario"
                id="BtnCreateUser"
              >
                <v-icon>mdi-account-plus</v-icon> Crear usuario
              </v-btn>
            </v-col>
          </v-row>
        </v-form>
      </v-container>
    </v-card>
  </v-container>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "CrearUsuario",
  data() {
    return {
      nombre: "",
      email: "",
      clave: "",
      confirmarClave: "",
      emailRules: [
        (v) => !!v || "Correo electrónico requerido",
        (v) =>
          /.+@.+/.test(v) || "El correo electrónico ingresado no es válido",
      ],
      rules: {
        required: (value) => !!value || "Campo obligatorio",
      },
      show1: false,
      show2: false,
      date: null,
      menu: false,
    };
  },
  watch: {
    menu(val) {
      val && setTimeout(() => (this.$refs.picker.activePicker = "YEAR"));
    },
  },
  methods: {
    ...mapActions("Admin", ["createUSer", "signInWithEmailAndPass"]),
    save(date) {
      this.$refs.menu.save(date);
    },
    async crearUsuario() {
      let user = {
        name: this.nombre,
        email: this.email,
        password: this.clave,
        birthday: this.formatearFecha,
        rol: "admin",
        meta: {
          createdBy: this.usuario.name || "admin",
          creationDay: this.fecha,
        },
      };
      let crear = await this.createUSer(user);

      if (crear) {
        this.nombre = "";
        this.email = "";
        this.clave = "";
        this.confirmarClave = "";
        this.date = "";
        this.$refs.createUser.reset();

        this.$toast.success(`Usuario "${user.name}" creado`, {
          position: "top",
          duration: 3000,
          dismissible: true,
        });
      } else {
        this.$toast.error(this.errorMessage, {
          position: "top",
          duration: 3000,
          dismissible: true,
        });
      }
    },
  },
  computed: {
    ...mapState("Admin", ["usuario", "errorMessage"]),
    formatearFecha() {
      let fecha = this.date;
      return fecha.split("-").reverse().join("-");
    },
    fecha() {
      let date = new Date();
      let fecha =
        date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear();
      return fecha;
    },
    passwordMatch() {
      return () =>
        this.clave === this.confirmarClave || "Las contraseñas no coinciden";
    },
  },
  title() {
    return `Crear usuarios | admin`;
  },
};
</script>

<style>
</style>