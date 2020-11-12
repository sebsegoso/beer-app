<template>
<v-data-table dark dense :headers="headers" :items-per-page="10" class="elevation-10 rounded-lg">
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
export default {
    data() {
        return {
            headers: [{
                    text: "Fecha",
                    align: "start",
                    value: "fecha",
                },
                {
                    text: "Código",
                    value: "codigo",
                },
                {
                    text: "Nombre",
                    value: "nombre",
                },
                {
                    text: "Email",
                    value: "email",
                },
                {
                    text: "Telefono",
                    value: "telefono",
                },
                {
                    text: "Entrega",
                    value: "entrega",
                },
                {
                    text: "Dirección",
                    value: "direccion",
                },
                {
                    text: "Cant. productos",
                    value: "productos",
                },
                {
                    text: "Total",
                    value: "total",
                },
                {
                    text: "Medio de pago",
                    value: "medioPago",
                },
                {
                    text: "Entregado",
                    value: "entregado",
                },
            ],
        };
    },
    methods: {
        editarProducto(item) {
            console.log(item);
        },
        borrarProducto(item) {
            console.log(item);
        },
    },
};
</script>

<style>
</style>
