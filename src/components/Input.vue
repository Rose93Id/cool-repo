<template>
  <v-card class="fill-height">
    <v-card-text>Inputs</v-card-text>
    <!-- <v-btn id="get-btn">GET DATA</v-btn>
    <v-btn id="post-btn">POST DATA</v-btn>-->
    <vue-csv-import v-model="parseCsv" :map-fields="{field1: 'Label 1', field2: 'Label 2'}"></vue-csv-import>
    <v-divider></v-divider>
  </v-card>
</template>

<script>
import { VueCsvImport } from "vue-csv-import";

export default {
  components: {
    VueCsvImport
  },
  data: () => ({})
};
</script>

<style scoped></style>
