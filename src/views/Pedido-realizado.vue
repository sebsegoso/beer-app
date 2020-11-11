<template>
<div>
    <div class="pag_header">
        <h1>Pedido realizado <v-icon>mdi-check</v-icon>
        </h1>
    </div>
    <v-container class="pag_body mx-auto">
        <v-sheet class="rounded-xl elevation-5" dark>
            <h3 class="text-center"><u>Órden de pedido</u></h3>
            <v-simple-table class="tabla_entrega">
                <tbody>
                    <tr>
                        <th class="text-right">NOMBRE CLIENTE:</th>
                        <td>Sebastián Segura Osorio</td>
                    </tr>
                    <tr>
                        <th class="text-right">CORREO ELECTRÓNICO:</th>
                        <td>sseguraosorio@gmail.com</td>
                    </tr>
                    <tr>
                        <th class="text-right">TELÉFONO:</th>
                        <td>+56972181483</td>
                    </tr>
                    <tr>
                        <th class="text-right">FORMA ENTREGA:</th>
                        <td>Despacho a domicilio</td>
                    </tr>
                    <tr>
                        <th class="text-right">DIRECCIÓN DESPACHO:</th>
                        <td>Rivas Vicuña #1581 1006 Yungay, Quinta normal.</td>
                    </tr>
                    <tr>
                        <th class="text-right">CANTIDAD DE PRODUCTOS:</th>
                        <td>8</td>
                    </tr>
                    <tr>
                        <th class="text-right">MONTO PRODUCTOS:</th>
                        <td>$17.970</td>
                    </tr>
                    <tr>
                        <th class="text-right">ENVÍO:</th>
                        <td>$3.500</td>
                    </tr>
                    <tr>
                        <th class="text-right">TOTAL A PAGAR:</th>
                        <td><b>$21.470</b></td>
                    </tr>
                    <tr>
                        <th class="text-right">MEDIO DE PAGO:</th>
                        <td>Transferencia bancaria</td>
                    </tr>
                    <tr>
                        <th class="text-right">FECHA COMPRA:</th>
                        <td>17-11-2020</td>
                    </tr>
                    <tr>
                        <th class="text-right">CÓDIGO DE COMPRA:</th>
                        <td>
                            <b>3f649aa7de6c70efdc59eb1f5f40002d</b>
                        </td>
                    </tr>
                </tbody>
            </v-simple-table>
        </v-sheet>
    </v-container>
</div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/main.scss";
</style><style lang="scss" scoped>
//MEDIA QUERIES
@media (min-width: 576px) {
    .tabla_entrega {
        width: 50%;
        margin: 0 auto;
    }
}
</style>
