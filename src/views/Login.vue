<template>
  <div id="Login">
    <h1>Login</h1>
    <v-container class="mx-auto">
      <v-form v-model="valid" class="form elevation-5 rounded-xl">
        <v-container>
          <h3>
            <v-icon dark>mdi-login</v-icon> Para acceder al sistema debes
            iniciar sesión.
          </h3>
          <v-row>
            <!--iNPUT MAIL -->
            <v-col cols="12" sm="6">
              <v-text-field
                v-model="user.email"
                :rules="emailRules"
                label="E-mail"
                type="email"
                dark
                required
              ></v-text-field>
            </v-col>
            <!--INPUT PASSWORD-->
            <v-col cols="12" sm="6">
              <v-text-field
                v-model="user.password"
                :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                dark
                :rules="[rules.required]"
                :type="show1 ? 'text' : 'password'"
                name="input-10-1"
                label="Contraseña"
                @click:append="show1 = !show1"
              ></v-text-field>
            </v-col>
            <!--BUTTONS -->
            <v-col cols="12">
              <v-btn
                class="boton"
                elevation="10"
                color="#efc251"
                dark
                :disabled="disabledlogin"
                @click="signIn"
                >Iniciar sesión</v-btn
              >
            </v-col>
          </v-row>
        </v-container>
      </v-form>
    </v-container>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Login",
  title() {
    return "Inicia sesión";
  },
  data: () => ({
    valid: false,
    user: {
      email: "",
      password: "",
    },
    emailRules: [
      (v) => !!v || "Correo electrónico requerido",
      (v) => /.+@.+/.test(v) || "El correo electrónico ingresado no es válido",
    ],
    show1: false,
    rules: {
      required: (value) => !!value || "Contraseña requerida",
    },
  }),
  computed: {
    disabledlogin() {
      if (this.user.email.trim() == "" || this.user.password.trim() == "")
        return true;
      else return false;
    },
  },
  methods: {
      ...mapActions('Admin' , ['signInWithEmailAndPass']),
    signIn() {
      this.signInWithEmailAndPass(this.user);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/main.scss";

#Login {
  min-height: 100vh;
  background: linear-gradient( $main-yellow 75% , $main-black 100%);
}
.form {
  background-color: $main-black;
  color: #fff;
}
.boton {
  width: 100%;
}
</style>