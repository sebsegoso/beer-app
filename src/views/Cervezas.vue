<template>
<div>
    <div class="pag_header">
        <v-container>
            <h1>Nuestras cervezas</h1>
        </v-container>
    </div>

    <!--FILTROS -->
    <div class="products_filter rounded-b-xl">
        <v-container class="mx-auto">
            <v-row class="align-center">
                <v-col>
                    <v-select label="Ordenar por:" :items="items" dense outlined light></v-select>
                </v-col>
                <v-divider vertical light></v-divider>
                <!-- BUSCADOR -->
                <v-col>
                    <v-text-field dense clearable light solo outlined label="Buscar..." prepend-icon="mdi-magnify"></v-text-field>
                </v-col>
            </v-row>
        </v-container>
    </div>

    <!-- CERVEZAS -->
    <v-container class="pag_body pa-md-1 mx-auto pa-0">
        <v-row>
            <v-col v-for="(n, i) in 16" :key="i" cols="6" :md="3" :xl="2">
                <Card imagen="https://cdn-b.william-reed.com/var/wrbm_gb_hospitality/storage/images/publications/hospitality/bighospitality.co.uk/article/2018/04/26/beer-quiz-25-questions-to-test-your-knowledge/2807204-1-eng-GB/Beer-quiz-25-questions-to-test-your-knowledge_wrbm_large.jpg" titulo="Nombre de la cerveza" estilo="Foreign Extra Stout" descripcion="Una IPA para disfrutar en las calurosas tardes de verano" precio="2490" enlace="/Cervezas/Marca/Estilo" />
            </v-col>
        </v-row>
    </v-container>
</div>
</template>

<script>
import Card from "@/components/Card";

export default {
    name: "Cervezas",
    components: {
        Card,
    },
    data() {
        return {
            items: [
                "",
                "Por cervecería",
                "Nombre A-Z",
                "Nombre Z-A",
                "Precios de menor a mayor",
                "Precios de mayor a menor",
            ],
        };
    },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/main.scss";

.products_filter {
    background-color: $main-white;
    color: $main-black;
}
</style>
