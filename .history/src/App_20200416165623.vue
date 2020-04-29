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
import WebMap from './components/Webmap.vue';
export default {
  name: 'App',

  components: {
    WebMap
  },

  data: () => ({
    //
  }),
};
</script>
