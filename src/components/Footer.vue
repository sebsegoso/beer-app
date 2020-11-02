<template>
<v-container fluid class="footer">
    <v-row>
        <v-col cols="6" md="5">
            <ul>
                <li>Las mejores cervezas artesanales directo a tu hogar</li>
                <li>Fono: +56 9 72181483</li>
                <br />
                <li>Horario de atención:</li>
                <li>Lun - dom | 12:00 - 00:00</li>
            </ul>
        </v-col>
        <v-col cols="6" md="7">
            <v-container class="feedback-form rounded-xl">
                <h2>Déjanos tu feedback!</h2>
                <v-form v-model="valid">
                    <v-container>
                        <v-row>
                            <v-col cols="12" md="6">
                                <v-text-field outlined v-model="firstname" :rules="nameRules" :counter="10" label="Nombre" required></v-text-field>
                            </v-col>

                            <v-col cols="12" md="6">
                                <v-text-field outlined v-model="email" :rules="emailRules" label="Correo electrónico" required></v-text-field>
                            </v-col>

                            <v-col cols="12">
                                <v-textarea outlined counter label="Déjanos tu comentario..." :rules="rules" rows="2"></v-textarea>
                            </v-col>
                        </v-row>
                        <v-btn>Enviar</v-btn>
                    </v-container>
                </v-form>
            </v-container>
        </v-col>
    </v-row>
    <div>
        <h6 class="text-center">
            made by:
            <a href="https://github.com/sebsegoso" target="_blank">sebsegoso</a>
            2020
        </h6>
    </div>
</v-container>
</template>

<script>
export default {
    data() {
        return {
            valid: false,
            firstname: "",
            lastname: "",
            nameRules: [
                (v) => !!v || "Name is required",
                (v) => v.length <= 10 || "Name must be less than 10 characters",
            ],
            email: "",
            emailRules: [
                (v) => !!v || "E-mail is required",
                (v) => /.+@.+/.test(v) || "E-mail must be valid",
            ],
            rules: [(v) => v.length <= 25 || "Max 25 characters"],

        };
    },
};
</script>

<style lang="scss" scoped>
.footer {
    background-color: #000;
    color: #fff;
    min-height: 150px;
    padding: 0 0 5% 0;

    ul {
        list-style: none;
    }
}

.feedback-form {
    background-color: #ffba08;
    color: #000;
}
</style>
