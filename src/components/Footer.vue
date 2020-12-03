<template>
  <v-container fluid id="Footer">
    <v-container class="mx-auto">
      <v-row>
        <v-col cols="4" md="4">
          <div class="footer_info">
            <p>Las mejores cervezas artesanales directo a tu hogar</p>
            <a href="http://wa.link/lyzuj2" target="_blank"
              >Contacto: <i class="fab fa-whatsapp-square"></i
            ></a>
          </div>
          <v-divider />
          <p>Reparto solo en la RM</p>
          <v-divider />
          <div class="footer_horario">
            <p>Horario de atención:</p>
            <p>Lun - dom | 12:00 - 00:00</p>
          </div>
        </v-col>
        <v-col cols="8" md="8">
          <v-container class="feedback-form rounded-xl pa-2">
            <h2>Déjanos tu feedback!</h2>
            <v-form v-model="valid">
              <v-container>
                <v-form ref="formFooter" lazy-validation v-model="valid">
                  <v-row>
                    <v-col cols="12" md="6">
                      <v-text-field
                      id="FooterFormName"
                        dense
                        light
                        outlined
                        v-model="nombre"
                        :rules="nameRules"
                        :counter="30"
                        label="Nombre"
                        required
                        validateOnBlur
                      ></v-text-field>
                    </v-col>

                    <v-col cols="12" md="6">
                      <v-text-field
                      id="FooterFormEmail"
                        dense
                        light
                        outlined
                        type="email"
                        v-model="email"
                        :rules="emailRules"
                        label="Correo electrónico"
                        required
                        validateOnBlur
                      ></v-text-field>
                    </v-col>

                    <v-col cols="12">
                      <v-textarea
                      id="FooterFormComment"
                        dense
                        light
                        outlined
                        v-model="comentario"
                        :rules="comentarioRules"
                        counter
                        label="Déjanos tu comentario..."
                        rows="2"
                        validateOnBlur
                        hint="Consultas, reclamos o sugerencias"
                      ></v-textarea>
                    </v-col>
                  </v-row>
                  <v-btn :disabled="formDisabled" @click="enviarComentario" id="BtnFooterForm"
                    >Enviar</v-btn
                  >
                </v-form>
              </v-container>
            </v-form>
          </v-container>
        </v-col>
        <v-col cols="12">
          <h6 class="text-center pb-5 pb-md-0">
            made by:
            <a href="https://github.com/sebsegoso" target="_blank">sebsegoso</a>
            2020
          </h6>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "Footer",
  data() {
    return {
      valid: true,
      nombre: "",
      email: "",
      comentario: "",
      nameRules: [
        (v) => !!v || "Nombre requerido",
        (v = "") =>
          v.length >= 3 || "El nombre debe contener al menos 3 caracteres",
        (v = "") =>
          v.length <= 30 || "El nombre debe contener máximo 30 caracteres",
      ],
      emailRules: [
        (v) => !!v || "Correo electrónico requerido",
        (v) =>
          /.+@.+/.test(v) ||
          "El formato del correo electrónico ingresado no es válido",
      ],
      comentarioRules: [
        (v) => !!v || "Comentario requerido",
        (v = "") =>
          v.length >= 30 ||
          "Tu comentario debe contener al menos 30 caracteres",
        (v = "") => v.length <= 300 || "Máximo 300 caracteres",
      ],
    };
  },
  methods: {
    ...mapActions("Feedback", ["sendFeedback"]),
    async enviarComentario() {
      const date = new Date();
      const fecha =
        date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear();

      const comentario = {
        nombre: this.nombre,
        email: this.email,
        comentario: this.comentario,
        fecha,
      };

      const validacion = this.validar();

      if (validacion) {
        await this.sendFeedback(comentario);
        this.$toast.success("Mensaje enviado", {
          position: "top",
          duration: 3000,
          dismissible: true,
        });
        this.$refs.formFooter.reset();
      }
    },
    validar() {
      return this.$refs.formFooter.validate();
    },
  },
  computed: {
    formDisabled() {
      if (
        this.nombre == undefined ||
        this.email == undefined ||
        this.comentario == undefined ||
        this.nombre.trim() == "" ||
        this.email.trim() == "" ||
        this.comentario.trim() == ""
      )
        return true;
      else return false;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/main.scss";

#Footer {
  background-color: $main-black;
  color: $main-white;
  min-height: 150px;
  padding: 1rem 0 5% 0;
  a {
    color: $main-yellow;
  }
  p {
    margin: 0;
  }

  .footer_info a {
    color: $main-white;
    font-size: $text-title;
  }
  .footer_horario {
    padding-top: 2rem;
  }
}

.feedback-form {
  background-color: $main-yellow;
  color: $main-black;
}
</style>
