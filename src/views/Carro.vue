<template>
<div>
    <div class="pag_header">
        <h1>Mi carro</h1>
    </div>
    <v-container class="pag_body mx-auto py-4">
        <!--HEADER -->
        <v-row>
            <v-col cols="12" md="8">
                <!--<v-row align="end" dense class="cart_header">
                    <v-col cols="4" class="cart_header_description">
                        <p>PRODUCTO</p>
                    </v-col>
                    <v-col cols="3" class="cart_header_quantity">
                        <p>CANTIDAD</p>
                    </v-col>
                    <v-col cols="2" class="cart_header_price">
                        <p>PRECIO UNIDAD</p>
                    </v-col>
                    <v-col cols="1" class="cart_header_delete">
                        <p>ELIMINAR</p>
                    </v-col>
                </v-row>-->
                <!--ITEMS-->
                <div v-for="n in 7" :key="n" class="cart_item elevation-5 rounded-xl">
                    <v-row class="cart_item_row">
                        <v-col cols="4" class="cart_item_description">
                            <p>HASTA PRONTO</p>
                            <p>...y gracias por los lúpulos</p>
                        </v-col>

                        <v-col cols="3" class="cart_item_quantity">
                            <v-row justify="space-around" align="center">
                                <v-btn fab dark x-small>
                                    <v-icon>mdi-minus</v-icon>
                                </v-btn>
                                <span>{{ n }}</span>
                                <v-btn fab dark x-small>
                                    <v-icon>mdi-plus</v-icon>
                                </v-btn>
                            </v-row>
                        </v-col>

                        <v-col cols="2" class="cart_item_price">
                            <h4>$3800</h4>
                        </v-col>

                        <v-col cols="1" class="cart_item_delete">
                            <v-btn x-small dark fab color="red">
                                <v-icon>mdi-delete</v-icon>
                            </v-btn>
                        </v-col>

                        <v-col cols="4" class="cart_header">
                            <p>PRODUCTO</p>
                        </v-col>
                        <v-col cols="3" class="cart_header">
                            <p>CANTIDAD</p>
                        </v-col>
                        <v-col cols="2" class="cart_header">
                            <p>PRECIO UNIDAD</p>
                        </v-col>
                        <v-col cols="1" class="cart_header">
                            <p>ELIMINAR</p>
                        </v-col>
                    </v-row>
                </div>
            </v-col>
            <!--TOTALES -->
            <v-col class="pl-2">
                <v-container class="cart_total elevation-5 rounded-l-xl pa-2">
                    <h2>TOTAL</h2>
                    <v-divider />
                    <h5>Cantidad de productos:</h5>
                    <v-divider />
                    <h5>Subtotal:</h5>
                    <h5 v-show="entrega">Envío:</h5>
                    <h4>Total: $</h4>
                    <v-divider />
                    <v-container>
                        <h5>Forma de entrega:</h5>
                        <v-radio-group dark row v-model="entrega" mandatory>
                            <v-radio label="Retiro" :value="false"></v-radio>
                            <v-radio label="Despacho a domicilio" :value="true"></v-radio>
                        </v-radio-group>
                        <v-divider inset></v-divider>
                        <h5>Datos cliente</h5>
                        <v-text-field dark outlined dense label="Nombre" type="text"></v-text-field>
                        <v-text-field dark outlined dense label="Apellidos" type="text"></v-text-field>
                        <v-text-field dark outlined dense label="Teléfono de contacto" type="number" prefix="+56"></v-text-field>
                        <v-divider inset></v-divider>
                        <div v-show="entrega">
                            <h5>Dirección de entrega</h5>
                            <v-select dark dense outlined label="Comuna" :items="comunas"></v-select>
                            <v-text-field dark outlined dense label="Calle" type="text"></v-text-field>
                            <v-text-field dark outlined dense label="Número" type="number" prefix="#"></v-text-field>
                            <v-text-field dark outlined dense label="Block o departamento" type="text"></v-text-field>
                            <v-divider inset></v-divider>
                        </div>
                        <h5>Medio de pago</h5>
                        <v-radio-group dark row mandatory>
                            <v-radio label="Efectivo" :value="false"></v-radio>
                            <v-radio label="Transferencia" :value="true"></v-radio>
                        </v-radio-group>
                        <v-divider inset></v-divider>
                        <h5>Comentarios</h5>
                        <v-textarea dark dense outlined rows="1" label="ej: Timbre malo, Casa roja, etc"></v-textarea>
                    </v-container>
                    <v-divider />
                    <div class="text-center py-3">
                        <v-btn x-large light color="#fff" @click="finalizar">Finalizar pedido</v-btn>
                    </div>
                </v-container>
            </v-col>
        </v-row>
    </v-container>
</div>
</template>

<script>
export default {
    name: "Carro",
    data() {
        return {
            entrega: null,
            comunas: [
                "Cerro Navia",
                "Conchalí",
                "Estación Central",
                "Huechuraba",
                "Independencia",
                "La Cisterna",
                "La Florida",
                "La Reina",
                "Las Condes",
                "Lo Barnechea",
                "Lo Prado",
                "Macul",
                "Maipú",
                "Ñuñoa",
                "Pedro Aguirre Cerda",
                "Peñalolén",
                "Providencia",
                "Pudahuel",
                "Puente Alto",
                "Quilicura",
                "Quinta Normal",
                "Recoleta",
                "Renca",
                "San Joaquín",
                "San Miguel",
                "San Ramón",
                "Santiago",
                "Vitacura",
            ],
        };
    },
    methods: {
        finalizar() {
            this.$router.push("/Pedido-realizado");
        },
    },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/main.scss";

.cart_header,
.cart_item {
    text-align: center;
}

.cart_header {
    font-size: $text-caption;
    color: #aaa;
}

.cart_header,
.cart_item_row {
    display: flex;
    justify-content: space-around;
    align-items: center;
}

.cart_item {
    width: 100%;
    // min-height: 6rem;
    padding: 5rem auto;
    background-color: $main-white;
    color: $main-black;
    margin: 1rem 0;
    font-size: $text-body;

    &_row {
        p {
            margin: 0;
        }
    }
}

.cart_total {
    width: 100%;
    min-height: 300px;
    background-color: $main-black;
    color: $main-white;
    text-align: left;
    position: sticky;
    top: 1rem;
}
</style>
