<template>
  <v-container fluid id="admincomentarios">
    <h1>Comentarios</h1>
    <TablaComentarios />
  </v-container>
</template>

<script>
import TablaComentarios from "@/components/admin/TablaComentarios";
export default {
  name: 'Comentarios',
   title() {
    return `Comentarios | Admin`;
  },
  components: {
    TablaComentarios,
  },
};
</script>

<style lang="scss" scoped>
#admincomentarios{
  min-height: 92vh;
}

</style>