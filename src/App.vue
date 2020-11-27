<template>
  <v-app id="App">
    <div  v-if="!login">
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
import MenuAdmin from "@/components/admin/TabsMenu";

import {mapMutations, mapActions } from "vuex";
export default {
  name: "App",
  components: {
    Footer,
    Navbar,
    MenuAdmin,
  },
  computed: {
    admin() {
      return this.$route.fullPath.includes("/admin") || this.$route.fullPath.includes("/login") ;
    },
    login() {
      return this.$route.name == "Login";
    },
  },
  methods: {
    ...mapActions("Products", ["getData", "getCervecerias"]),
    ...mapActions("Admin", ["getComments", "getPedidos"]),
    // ...mapMutations(['LOADING' , 'NOT_LOADING'])
  },
  async created() {
    await this.getData();
    await this.getComments();
    await this.getCervecerias();
    await this.getPedidos();

    // this.getCarrito()
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/main.scss";
#App{
  min-height: 100vh;
}
</style>
