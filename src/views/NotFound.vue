<template>
  <div class="error_page">
    <div class="pag_header">
      <h1>ERROR</h1>
    </div>
    <v-container class="pag_body d-flex flex-column align-center">
      <h2>La página que buscas no está disponible o no existe.</h2>
      <v-btn to="/"><v-icon>mdi-home</v-icon> volver a home</v-btn>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'Error',
  title() {
    return `Error - página no encontrada`;
  },
};
</script>

<style lang="scss" scoped>
.error_page{
    min-height: 50vh;
}
</style>