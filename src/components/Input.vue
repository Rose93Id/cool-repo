<template>
  <v-card class="fill-height">
    <v-card-text>Inputs</v-card-text>
    <!-- <v-btn id="get-btn">GET DATA</v-btn>
    <v-btn id="post-btn">POST DATA</v-btn>-->
    <CSV />
    <v-divider></v-divider>
  </v-card>
</template>

<script>
import CSV from "./CSV.vue";

export default {
  components: {
    CSV
  },
  data: () => ({})
};
</script>

<style scoped></style>
