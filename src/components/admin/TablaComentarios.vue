<template>
  <v-data-table
    dark
    dense
    :headers="headers"
    :items="comentarios"
    :items-per-page="10"
    class="elevation-10 rounded-lg"
  >

    <template v-slot:item.eliminar="{ item }">
        
        <v-btn color="red" x-small @click="deleteComment(item.id)">
            <v-icon dark> mdi-trash-can-outline </v-icon>
        </v-btn>
    </template>

  </v-data-table>
</template>

<script>
import {mapState , mapActions} from 'vuex'
export default {
  data() {
    return {
      headers: [
        {
          text: "Fecha",
          align: "start",
          value: "data.fecha",
        },
        {
          text: "Nombre",
          value: "data.nombre",
        },
        {
          text: "Email",
          value: "data.email",
        },
        {
          text: "Comentario",
          value: "data.comentario",
        },
        {
            text: 'Eliminar',
            value: 'eliminar'
        }
      ],
    };
  },
  computed: {
      ...mapState('Admin' , ['comentarios'])
  },
  methods: {
      ...mapActions('Admin' , ['deleteComment'])
  },
};
</script>

<style>
</style>