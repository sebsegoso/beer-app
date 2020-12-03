<template>
  <v-app id="App">
    <div v-if="!login">
      <MenuAdmin v-if="admin" />
    </div>
    <!--MAIN -->
    <v-main>
        <router-view />
    </v-main>
    <!--FOOTER -->
    <Footer v-if="!admin" />
    <!--NAVIGATION -->
    <Navbar v-if="!admin" />
  </v-app>
</template>

<script>
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import MenuAdmin from "@/components/admin/AdminNavbar";

import { mapMutations, mapActions } from "vuex";
export default {
  name: "App",
  components: {
    Footer,
    Navbar,
    MenuAdmin,
  },
  computed: {
    admin() {
      return (
        this.$route.fullPath.includes("/admin") ||
        this.$route.fullPath.includes("/login")
      );
    },
    login() {
      return this.$route.name == "Login";
    },
  },
  methods: {
    ...mapActions("Products", ["getData", "getCervecerias", "errorMessagePr"]),
    ...mapActions("Admin", ["getComments", "getPedidos", "errorMessage"]),
    // ...mapMutations(['LOADING' , 'NOT_LOADING'])
  },
  async created() {
    let cervezas = await this.getData();
    let cervecerias = await this.getCervecerias();
    let comentarios = await this.getComments();
    let pedidos = await this.getPedidos();

    cervezas
      ? true
      : this.$toast.error(`${this.errorMessagePr}`, {
          position: "top",
          duration: 5000,
          dismissible: true,
        });

    cervecerias
      ? true
      : this.$toast.error(`${this.errorMessagePr}`, {
          position: "top",
          duration: 5000,
          dismissible: true,
        });

    comentarios
      ? true
      : this.$toast.error(`${this.errorMessage}`, {
          position: "top",
          duration: 5000,
          dismissible: true,
        });

    pedidos
      ? true
      : this.$toast.error(`${this.errorMessage}`, {
          position: "top",
          duration: 5000,
          dismissible: true,
        });
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/main.scss";
#App {
  min-height: 100vh;
}
</style>
