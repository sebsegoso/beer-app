<template>
  <v-sheet
    width="100%"
    height="100%"
    class="banner"
    :style="{
      backgroundImage: `url(${bgImage})`,
    }"
    ><div class="banner_wrapper">
      <v-container class="d-flex flex-column justify-center pa-10">
        <v-row>
          <v-col cols="12" md="7">
            <h2>{{ title }}</h2>
            <h3 v-if="subtitle">{{ subtitle }}</h3>
            <v-btn
              class="text-center"
              :to="btnLink || '/'"
              x-large
              dark
              elevation="5"
              v-if="btnText || btnIcon"
              >{{ btnText }}<v-icon v-if="btnIcon">{{ btnIcon }}</v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </v-sheet>
</template>

<script>
export default {
  props: ["bgImage", "title", "subtitle", "btnText", "btnIcon", "btnLink"],
};
</script>

<style lang="scss" scoped>
.banner {
  background-attachment: fixed;
  background-size: cover;
  background-position: 70% 50%;
  &_wrapper {
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, #000, rgba(0, 0, 0, 0));
    background-size: cover;
    background-position: center;
  }
}
</style>