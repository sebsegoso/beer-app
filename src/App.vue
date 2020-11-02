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
export default {
    name: 'App',

    components: {
        Footer,
        Navbar
    },

    data: () => ({

    }),
};
</script>

<style lang="scss">
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

#App {
    background-color: #FFBA08;
}
</style>
