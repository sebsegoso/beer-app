<template>
<div>
    <!--CARRUSEL -->
    <v-carousel cycle height="400" hide-delimiter-background show-arrows-on-hover>
        <v-carousel-item v-for="(slide, i) in slides" :key="i">
            <v-sheet :color="colors[i]" height="100%">
                <v-row class="fill-height" align="center" justify="center">
                    <v-img src="https://st4.depositphotos.com/5389310/19992/v/1600/depositphotos_199920628-stock-illustration-wheat-beer-ads-flying-ingredients.jpg" width="100%"></v-img>
                </v-row>
            </v-sheet>
        </v-carousel-item>
    </v-carousel>

    <v-container class="pa-7 pa-md-1">
        <!-- SLIDES -->

        <h1 class="text-center">Cervezas nuevas:</h1>

        <v-slide-group class="main_slide pa-4">
            <v-slide-item v-for="n in 15" :key="n">
                <router-link to="/">
                    <v-card class="ma-4 rounded-xl elevation-5" max-width="250" dark>
                        <v-img src="https://cdn-b.william-reed.com/var/wrbm_gb_hospitality/storage/images/publications/hospitality/bighospitality.co.uk/article/2018/04/26/beer-quiz-25-questions-to-test-your-knowledge/2807204-1-eng-GB/Beer-quiz-25-questions-to-test-your-knowledge_wrbm_large.jpg" height="200px"></v-img>
                        <v-card-title>{{n}} Top western road trips </v-card-title>
                        <v-card-subtitle> 1,000 miles of wonder </v-card-subtitle>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn color="orange lighten-2" text> Explore </v-btn>
                        </v-card-actions>
                    </v-card>
                </router-link>
            </v-slide-item>
        </v-slide-group>

        <h1 class="text-center">Cervezas destacadas:</h1>
        <v-slide-group class="main_slide pa-4">
            <v-slide-item v-for="n in 15" :key="n">
                <v-card class="ma-4 rounded-xl elevation-5" max-width="250" dark>
                    <v-img src="https://bcnfoodieguide.com/wp-content/uploads/2015/03/BeFunky_craft-beer-portada1.jpg1_.jpg" height="200px"></v-img>
                    <v-card-title>{{n}} Top western road trips </v-card-title>
                    <v-card-subtitle> 1,000 miles of wonder </v-card-subtitle>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="orange lighten-2" text> Explore </v-btn>
                    </v-card-actions>
                </v-card>
            </v-slide-item>
        </v-slide-group>

        <h1 class="text-center">Promociones:</h1>
        <v-slide-group class="main_slide pa-4">
            <v-slide-item v-for="n in 15" :key="n">
                <v-card class="ma-4 rounded-xl elevation-5" max-width="250" dark>
                    <v-img src="https://st4.depositphotos.com/5389310/19992/v/1600/depositphotos_199920628-stock-illustration-wheat-beer-ads-flying-ingredients.jpg" height="200px"></v-img>
                    <v-card-title> {{n}}Top western road trips </v-card-title>
                    <v-card-subtitle> 1,000 miles of wonder </v-card-subtitle>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="orange lighten-2" text> Explore </v-btn>
                    </v-card-actions>
                </v-card>
            </v-slide-item>
        </v-slide-group>
    </v-container>
</div>
</template>

<script>
// @ is an alias to /src

export default {
    name: "Home",
    components: {},
    data() {
        return {
            //CAROUSEL DATA
            colors: [
                "indigo",
                "warning",
                "pink darken-2",
                "red lighten-1",
                "deep-purple accent-4",
            ],
            slides: ["First", "Second"],
        };
    },
};
</script>

<style lang="scss" scoped>
.main_slide {
    padding: 4rem auto;
}
</style>
