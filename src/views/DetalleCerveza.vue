<template>
<div>
    <div class="pag_header">
        <h1>Esta podría ser tu nueva cerveza favorita</h1>
    </div>
    <v-container class="pag_body pa-md-1 mx-auto">
        <v-row align="start" class="cerveza_content">
            <v-col cols="12" md="4">
                <v-img class="ml-auto rounded-xl cerveza_content_img" width="100%" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTHtf-40JBLNj9IRwth1UUJOHhrkjB56QAgbQ&usqp=CAU" />
            </v-col>
            <v-col cols="12" md="8">
                <h2>Hasta Pronto</h2>
                <div class="wrapper_variedad_precio">
                    <h3>
                        ...Y gracias por los lúpulos
                        <span class="cerveza_content_volumen">(350cc)</span>
                    </h3>
                    <h2>$2.000</h2>
                </div>
                <v-divider light />
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta,
                    cupiditate earum eius sapiente quae fuga impedit quam inventore,
                    facilis architecto officia iusto delectus nulla deleniti ipsa id!
                    Expedita, veritatis ut?
                </p>
                <h4>Información:</h4>

                <ul>
                    <li>Origen: <strong>Chile</strong></li>
                    <li>Estilo: <strong>New England Indian Pale Ale</strong></li>
                    <li>ABV: <strong>6.8%</strong></li>
                    <li>IBU: <strong>80</strong></li>
                </ul>
                <br />

                <v-btn class="elevation-5" x-large>Agregar a mi carro</v-btn>
            </v-col>
        </v-row>
    </v-container>
</div>
</template>

<script>
export default {
    name: 'DetalleCerveza',
    data() {
        return {}
    },
    methods: {},
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/main.scss";

.cerveza_content {
    padding: 15px 0 40px 0;

    &_img {
        transition: filter 0.5s;
        filter: drop-shadow(0 0 2px $main-black);

        &:hover {
            filter: drop-shadow(0 0 5px $main-black);
        }
    }

    &_volumen {
        font-size: 1.125rem;
        font-weight: 500;
    }
}

.wrapper_variedad_precio {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
}
</style><style lang="scss" scoped>
//< !--MEDIA QUERIES -->
@media (min-width: 576px) {
    .cerveza_content {
        padding: 40px 0;
    }
}
</style>
