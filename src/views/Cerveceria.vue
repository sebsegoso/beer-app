<template>
<div>
    <div class="pag_header mx-auto">
        <h1>Cervecería:</h1>
    </div>
    <v-container class="pag_body mx-auto pa-md-1">
        <v-img class="cerveceria_img" src="https://mossto.cl/wp-content/uploads/2020/08/mossto-05.png" />
        <v-row>
            <v-col v-for="(cerveza, i) in filtroCerveceria" :key="i" cols="6" :md="3" :xl="2">
                <Card :producto="cerveza" />
            </v-col>
        </v-row>
    </v-container>
</div>
</template>

<script>
import {mapState} from 'vuex'
import Card from '@/components/Card'
export default {
    name: "Cerveceria",
    props: ['cerveceria'],
    components: {
        Card
    },
    data() {
        return {};
    },
    methods: {},
    computed: {
        ...mapState('Products' , ['cervezas']),
        filtroCerveceria(){
            let path = this.cerveceria

            return this.cervezas.filter(p => {
                p.data.cerveceria.includes(path)
            })
        }

    },
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
