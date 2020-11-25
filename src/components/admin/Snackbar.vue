<template>
  <v-snackbar v-model="snackbar" :timeout="5000">
    TEXTO
    <template v-slot:action="{ attrs }">
      <v-btn color="warning" text v-bind="attrs" @click="snackbar = false">
        X
      </v-btn>
    </template>
  </v-snackbar>
</template>

    <script>
export default {
  data: () => ({
    snackbar: false,
  }),
};
</script>