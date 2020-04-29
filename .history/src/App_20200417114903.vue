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
<style>
html,body {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
}
#app {
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
}
</style>