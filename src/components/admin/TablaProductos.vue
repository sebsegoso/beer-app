<template>
<v-data-table dark dense :headers="headers" :items="cervezas.data" :items-per-page="10" class="elevation-10 rounded-lg">
    <!--BOTONES -->
    <template v-slot:item.acciones="{ item }">
        <!--EDITAR -->
        <v-btn color="primary" small @click="editarProducto(item)">
            <v-icon dark> mdi-pencil </v-icon>
        </v-btn>
        <!-- BORRAR -->

        <v-btn color="red" small @click="borrarProducto(item)">
            <v-icon dark> mdi-trash-can-outline </v-icon>
        </v-btn>
    </template>
</v-data-table>
</template>

<script>
import {
    mapState
} from 'vuex'

export default {
    data() {
        return {
            headers: [{
                    text: 'Código',
                    align: 'start',
                    value: 'codigo',
                },
                {
                    text: 'Nombre',
                    value: 'nombre',
                },
                {
                    text: 'Cervecería',
                    value: 'cerveceria',
                },
                {
                    text: 'Estilo',
                    value: 'estilo',
                },
                {
                    text: 'Origen',
                    value: 'origen',
                },
                {
                    text: 'ABV',
                    value: 'ABV',
                },
                {
                    text: 'IBU',
                    value: 'IBU',
                },
                {
                    text: 'Foto',
                    value: 'foto',
                },
                {
                    text: 'Volumen',
                    value: 'volumen',
                },
                {
                    text: 'Stock',
                    value: 'stock',
                },
                {
                    text: 'Precio',
                    value: 'precio',
                },
                {
                    text: 'Reseña',
                    value: 'resena',
                }, {
                    text: 'Nueva',
                    value: 'nueva',
                },
                {
                    text: 'Acciones',
                    value: 'acciones',
                },
            ],
        }
    },
    methods: {
        editarProducto(item) {
            console.log(item)
        },
        borrarProducto(item) {
            console.log(item)
        },
    },
    computed: {
        ...mapState('Products', ['cervezas'])
    },
    mounted() {
        console.log(`Desde vista admin: ${this.cervezas}`)
    }
}
</script>

<style>
</style>
