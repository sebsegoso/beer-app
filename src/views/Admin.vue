<template>
<v-container>
    <Accordion />
    <br />
    <TablaProductos />
    <br />
    <TablaVentas />
</v-container>
</template>

<script>
import Accordion from "@/components/admin/Accordion";
import TablaProductos from "@/components/admin/TablaProductos";
import TablaVentas from "@/components/admin/TablaVentas";

export default {
    components: {
        Accordion,
        TablaProductos,
        TablaVentas,
    },

};
</script>

<style>
</style>
