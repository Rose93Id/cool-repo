<template>
  <div>
    <vue-csv-import v-model="csv" :map-fields="['name', 'population']"></vue-csv-import>
  </div>
</template>

<script>
import { VueCsvImport } from "vue-csv-import";

export default {
  name: "CSV",
  components: {
    VueCsvImport
  },
  data() {
    return {
      //file: ""
    };
  },
  methods: {
    //selectFile() {
    // user will call it when change input field
    //this.file = this.$refs.file.files[0]; // we need to set the used file in data to the same file used in input so we use ref
    //files[] is all the stored files in input
  }
};
</script>

<style>
</style>