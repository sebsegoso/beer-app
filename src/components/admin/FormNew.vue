<template>
<v-row>
    <v-col cols="6">
        <v-text-field dense v-model="newBeer.nombre" label="Nombre" required outlined />
    </v-col>
    <v-col cols="6">
        <v-text-field dense v-model="newBeer.cerveceria" label="Cervecería" required outlined />
    </v-col>
    <v-col cols="4" md="3">
        <v-text-field dense v-model="newBeer.codigo" label="Código" required outlined />
    </v-col>
    <v-col cols="8" md="5">
        <v-text-field dense v-model="newBeer.estilo" label="Estilo" required outlined />
    </v-col>
    <v-col cols="6" md="4">
        <v-text-field dense v-model="newBeer.origen" label="Origen" required outlined />
    </v-col>
    <v-col cols="3" md="2">
        <v-text-field dense type="number" v-model="newBeer.ABV" label="ABV" suffix="%" required outlined />
    </v-col>
    <v-col cols="3" md="2">
        <v-text-field dense type="number" v-model="newBeer.IBU" label="IBU" required outlined />
    </v-col>
    <v-col cols="12" md="6">
        <v-text-field dense v-model="newBeer.foto" label="Foto" required outlined />
    </v-col>
    <v-col cols="4" md="2">
        <v-text-field dense type="number" v-model="newBeer.volumen" label="Volumen" suffix="cc" required outlined />
    </v-col>
    <v-col cols="4" md="1">
        <v-text-field dense type="number" v-model="newBeer.stock" label="Stock" required outlined />
    </v-col>
    <v-col cols="4" md="2">
        <v-text-field dense type="number" v-model="newBeer.precio" label="Precio" prefix="$" required outlined />
    </v-col>
    <v-col cols="5" md="2">
        <v-text-field dense type="text" v-model="newBeer.path" label="Path" prefix="/" required outlined />
    </v-col>
    <v-col cols="7" md="3">
        <v-radio-group row v-model="newBeer.nueva" mandatory class="d-flex">
            <span>Nueva?</span>
            <v-radio label="Sí" :value="true"></v-radio>
            <v-radio label="No" :value="false"></v-radio>
        </v-radio-group>
    </v-col>
    <v-col cols="12" md="4">
        <v-textarea v-model="newBeer.resena" label="Reseña" rows="1" required outlined dense />
    </v-col>

    <v-col cols="12">
        <v-btn color="success" @click="agregarCerveza">
            <v-icon>mdi-plus</v-icon> Agregar
        </v-btn>
    </v-col>
</v-row>
</template>

<script>
import {
    mapActions
} from 'vuex'
export default {
    data() {
        return {
            newBeer: {
                codigo: '',
                nombre: '',
                cerveceria: '',
                estilo: '',
                origen: '',
                ABV: '',
                IBU: '',
                foto: '',
                volumen: '',
                stock: '',
                precio: '',
                path: '',
                nueva: false,
                resena: '',
            },
        }
    },
    created() {
        console.log(this.fecha)
    },
    methods: {
        ...mapActions('Admin', ['addProduct']),
        agregarCerveza() {
            let cervezaNueva = {
                codigo: this.newBeer.codigo,
                nombre: this.newBeer.nombre,
                cerveceria: this.newBeer.cerveceria,
                estilo: this.newBeer.estilo,
                origen: this.newBeer.origen,
                ABV: Number(this.newBeer.ABV),
                IBU: Number(this.newBeer.IBU),
                foto: this.newBeer.foto,
                volumen: Number(this.newBeer.volumen),
                stock: Number(this.newBeer.stock),
                precio: Number(this.newBeer.precio),
                path: this.newBeer.path,
                resena: this.newBeer.resena,
                nueva: this.newBeer.nueva,
                cart: false,
            }

            this.addProduct(cervezaNueva)
        },
    },
    computed: {
        fecha() {
            let date = new Date()
            let fecha =
                date.getDate() + '-' + (date.getMonth() + 1) + '-' + date.getFullYear()
            return fecha
        },
    },
}
</script>
