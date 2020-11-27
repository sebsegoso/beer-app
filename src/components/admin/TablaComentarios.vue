<template>
  <v-data-table
    dark
    :headers="headers"
    :items="comentarios"
    :items-per-page="10"
    class="elevation-10 rounded-lg"
    no-data-text="No hay comentarios"
  >

    <template v-slot:item.eliminar="{ item }">
        
        <v-btn color="red" x-small @click="borrarComentario(item.id)">
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
      sortDesc : true
    };
  },
  computed: {
      ...mapState('Admin' , ['comentarios' , 'errorMessage'])
  },
  methods: {
      ...mapActions('Admin' , ['deleteComment']),
      async borrarComentario(id){
        const borrar = await this.deleteComment(id)
        borrar ?
        this.$toast.success(`Comentario eliminado`, {
          position: "top",
          duration: 3000,
          dismissible: true,
        })
        : this.$toast.error(`${this.errorMessage}`, {
          position: "top",
          duration: 3000,
          dismissible: true,
        });
      }
  },
};
</script>

<style>
</style>