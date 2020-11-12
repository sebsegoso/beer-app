<template>
<v-app id="App">
    <!--MAIN -->
    <v-main>
        <router-view></router-view>
    </v-main>
    <!--FOOTER -->
    <Footer />
    <!--NAVIGATION -->
    <Navbar />
</v-app>
</template>

<script>
import Footer from './components/Footer'
import Navbar from './components/Navbar'

import {
    mapActions
} from 'vuex'
export default {
    name: 'App',
    components: {
        Footer,
        Navbar
    },
    data: () => ({

    }),
    methods: {
        ...mapActions('Products', ['getData'])
    },
    created() {
        this.getData()
    }
}
</script>

<style lang="scss">
@import "@/assets/scss/main.scss";
</style>
