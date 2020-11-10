<template>
<v-container fluid id="Footer">
    <v-container class="mx-auto">
        <v-row>
            <v-col cols="4" md="4">
                <div class="footer_info">
                    <p>Las mejores cervezas artesanales directo a tu hogar</p>
                    <a href="http://wa.link/lyzuj2" target="_blank">Contacto: <i class="fab fa-whatsapp-square"></i></a>
                </div>
                <v-divider />
                    <p>Reparto solo en la RM</p>
                <v-divider />
                <div class="footer_horario">
                    <p>Horario de atención:</p>
                    <p>Lun - dom | 12:00 - 00:00</p>
                </div>
            </v-col>
            <v-col cols="8" md="8">
                <v-container class="feedback-form rounded-xl pa-2">
                    <h2>Déjanos tu feedback!</h2>
                    <v-form v-model="valid">
                        <v-container>
                            <v-row>
                                <v-col cols="12" md="6">
                                    <v-text-field dense light outlined v-model="firstname" :rules="nameRules" :counter="10" label="Nombre" required></v-text-field>
                                </v-col>

                                <v-col cols="12" md="6">
                                    <v-text-field dense light outlined v-model="email" :rules="emailRules" label="Correo electrónico" required></v-text-field>
                                </v-col>

                                <v-col cols="12">
                                    <v-textarea dense light outlined counter label="Déjanos tu comentario..." rows="2"></v-textarea>
                                </v-col>
                            </v-row>
                            <v-btn>Enviar</v-btn>
                        </v-container>
                    </v-form>
                </v-container>
            </v-col>
            <v-col cols="12">
                <h6 class="text-center pb-5">
                    made by:
                    <a href="https://github.com/sebsegoso" target="_blank">sebsegoso</a>
                    2020
                </h6>
            </v-col>
        </v-row>
    </v-container>
</v-container>
</template>

<script>
export default {
    name: 'Footer',
    data() {
        return {
            valid: false,
            firstname: '',
            lastname: '',
            nameRules: [
                (v) => !!v || 'Name is required',
                (v) => v.length <= 10 || 'Name must be less than 10 characters',
            ],
            email: '',
            emailRules: [
                (v) => !!v || 'E-mail is required',
                (v) => /.+@.+/.test(v) || 'E-mail must be valid',
            ],
            rules: [
                (v) => v.length <= 25 || 'Max 25 characters',
                (v) => !!v || 'Name is required',
            ],
        }
    },
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/main.scss";

#Footer {
    background-color: $main-black;
    color:$main-white;
    min-height: 150px;
    padding: 1rem 0 5% 0;

    p {
        margin: 0;
    }

    .footer_info a{
        color: $main-white;
        font-size: $text-title;
    }
    .footer_horario{
        padding-top: 2rem;
    }
}

.feedback-form {
    background-color: $main-yellow;
    color: $main-black;
}
</style>
