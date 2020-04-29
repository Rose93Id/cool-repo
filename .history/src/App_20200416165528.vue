<template>
  <v-app>
    <v-content>
      <div id="app">
        <web-map />
      </div>
    </v-content>
  </v-app>
</template>

<script>
export default {
  import WebMap from './components/WebMap.vue';
  name: 'App',

  components: {
    WebMap
  },

  data: () => ({
    //
  }),
};
</script>
