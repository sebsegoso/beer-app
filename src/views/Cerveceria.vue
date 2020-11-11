<template>
<div>
    <div class="pag_header mx-auto">
        <h1>Cervecería:</h1>
    </div>
    <v-container class="pag_body mx-auto pa-md-1">
        <v-img class="cerveceria_img" src="https://mossto.cl/wp-content/uploads/2020/08/mossto-05.png" />
        <v-row>
            <v-col v-for="(n, i) in 16" :key="i" cols="6" :md="3" :xl="2">
                <Card imagen="https://cdn-b.william-reed.com/var/wrbm_gb_hospitality/storage/images/publications/hospitality/bighospitality.co.uk/article/2018/04/26/beer-quiz-25-questions-to-test-your-knowledge/2807204-1-eng-GB/Beer-quiz-25-questions-to-test-your-knowledge_wrbm_large.jpg" titulo="Nombre de la cerveza" estilo="Foreign Extra Stout" descripcion="Una IPA para disfrutar en las calurosas tardes de verano" precio="2490" enlace="/Cervezas/Marca/Estilo" />
            </v-col>
        </v-row>
    </v-container>
</div>
</template>

<script>
import Card from '@/components/Card'
export default {
    name: "Cerveceria",
    components: {
        Card
    },
    data() {
        return {};
    },
    methods: {},
};
</script>

<style lang="scss" scoped>
.cerveceria_img {
    width: 100%;
}

//Mediaqueries
@media (min-width: 576px) {
    .cerveceria_img {
        width: 50%;
    }
}
</style>
